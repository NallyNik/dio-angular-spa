import { TestBed } from '@angular/core/testing';

import { ChecklistService } from './checklist.service';

describe('ChecklistService', () => {
  let service: ChecklistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChecklistService);
  });


    // Tests that an item can be added to the list.
    it("test_add_list_item", () => {
      const service = new ChecklistService();
      service.addListItem("item1");
      expect(service.listItem).toContain("item1");
  });

  // Tests that an item can be removed from the list.
  it("test_remove_list_item", () => {
      const service = new ChecklistService();
      service.listItem = ["item1", "item2", "item3"];
      service.removeListItem(1);
      expect(service.listItem).not.toContain("item2");
  });

  // Tests that a task can be set with a key and value.
  it("test_set_task", () => {
      const service = new ChecklistService();
      service.setTask("task1", ["task1"]);
      expect(localStorage.getItem("task1")).toBeDefined();
  });

  // Tests that a task can be retrieved with a key.
  it("test_get_task", () => {
      const service = new ChecklistService();
      localStorage.setItem("task2", JSON.stringify({name: "task2", completed: true}));
      const task = service.getTasks("task2");
      expect(task).toEqual({name: "task2", completed: true});
  });

  // Tests that a task can be removed with a key.
  it("test_remove_task", () => {
      const service = new ChecklistService();
      localStorage.setItem("task3", JSON.stringify({name: "task3", completed: false}));
      service.removeList("task3");
      expect(localStorage.getItem("task3")).toBeNull();
  });

  // Tests that saved lists can be recovered.
  it("test_recover_saved_lists", () => {
      const service = new ChecklistService();
      localStorage.setItem("keysList", JSON.stringify(["task1", "task2"]));
      service.recover();
      expect(service.keysList).toEqual(["task1", "task2"]);
  });
});
