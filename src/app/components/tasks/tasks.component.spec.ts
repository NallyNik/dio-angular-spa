import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksComponent } from './tasks.component';
import { ChecklistService } from 'src/app/services/checklist.service';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


    // Tests that a new item can be added to the list.
    it("test_add_new_item", () => {
      const component = new TasksComponent(new ChecklistService());
      component.newItem = "New Item";
      component.addNew();
      expect(component.listItems).toContain("New Item");
  });

  // Tests that an item can be removed from the list.
  it("test_remove_item", () => {
      const component = new TasksComponent(new ChecklistService());
      component.listItems = ["Item 1", "Item 2", "Item 3"];
      component.removeItem(1);
      expect(component.listItems).not.toContain("Item 2");
  });

  // Tests that an empty item cannot be added to the list.
  it("test_empty_item", () => {
      const component = new TasksComponent(new ChecklistService());
      component.newItem = "";
      expect(() => component.addNew()).toThrowError("Item cannot be empty");
  });

  // Tests that a list can be saved to local storage and the model is reset.
  it("test_save_list", () => {
      const component = new TasksComponent(new ChecklistService());
      component.listTitle = "List 1";
      component.listItems = ["Item 1", "Item 2", "Item 3"];
      component.setValue();
      expect(component.value).toEqual(["Item 1", "Item 2", "Item 3"]);
      expect(component.listTitle).toBe("");
      expect(component.listItems).toEqual([]);
  });

  // Tests that a list can be retrieved from local storage.
  it("test_retrieve_list", () => {
      const component = new TasksComponent(new ChecklistService());
      localStorage.setItem("List 1", JSON.stringify(["Item 1", "Item 2", "Item 3"]));
      component.listTitle = "List 1";
      component.getValue();
      expect(component.value).toEqual(["Item 1", "Item 2", "Item 3"]);
  });

  // Tests that a checklist can be removed from local storage.
  it("test_remove_checklist", () => {
      const component = new TasksComponent(new ChecklistService());
      localStorage.setItem("List 1", JSON.stringify(["Item 1", "Item 2", "Item 3"]));
      localStorage.setItem("keysList", JSON.stringify(["List 1", "List 2"]));
      component.keys = ["List 1", "List 2"];
      component.removeChecklist(0);
      expect(component.keys).toEqual(["List 2"]);
      expect(localStorage.getItem("List 1")).toBeNull();
      expect(localStorage.getItem("keysList")).toEqual(JSON.stringify(["List 2"]));
  });
});
