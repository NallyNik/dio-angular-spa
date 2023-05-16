import { TestBed } from '@angular/core/testing';

import { CheckboxService } from './checkbox.service';

describe('CheckboxService', () => {
  let service: CheckboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckboxService);
  });


    // Tests that a new checkbox item is added to the list when a unique name is provided.
    it("test_add_checkbox", () => {
      const service = new CheckboxService();
      service.addCheckbox("item1");
      expect(service.checkboxes.length).toBe(1);
      expect(service.checkboxes[0].name).toBe("item1");
      expect(service.checkboxes[0].checked).toBe(false);
      service.addCheckbox("item2");
      expect(service.checkboxes.length).toBe(2);
      expect(service.checkboxes[1].name).toBe("item2");
      expect(service.checkboxes[1].checked).toBe(false);
  });

  // Tests that a checkbox item is removed from the first index of the list.
  it("test_remove_checkbox_first_index", () => {
      const service = new CheckboxService();
      service.addCheckbox("item1");
      service.addCheckbox("item2");
      service.removeCheckbox(0);
      expect(service.checkboxes.length).toBe(1);
      expect(service.checkboxes[0].name).toBe("item2");
  });

  // Tests that a checkbox item is removed from the last index of the list.
  it("test_remove_checkbox_last_index", () => {
      const service = new CheckboxService();
      service.addCheckbox("item1");
      service.addCheckbox("item2");
      service.removeCheckbox(1);
      expect(service.checkboxes.length).toBe(1);
      expect(service.checkboxes[0].name).toBe("item1");
  });

  // Tests that the order of the checkboxes is preserved when saving and recovering from local storage.
  it("test_save_recover_checkboxes_order", () => {
      const service = new CheckboxService();
      service.addCheckbox("item1");
      service.addCheckbox("item2");
      service.save(service.checkboxes);
      service.checkboxes = [];
      service.recover();
      expect(service.checkboxes.length).toBe(2);
      expect(service.checkboxes[0].name).toBe("item1");
      expect(service.checkboxes[1].name).toBe("item2");
  });

  // Tests that an empty list of checkboxes is recovered from local storage.
  it("test_recover_empty_checkboxes", () => {
      localStorage.setItem('checkboxes', JSON.stringify([]));
      const service = new CheckboxService();
      service.recover();
      expect(service.checkboxes.length).toBe(0);
  });

  // Tests that no checkbox item is removed when the index is outside the range of the array.
  it("test_remove_checkbox_outside_range", () => {
    const service = new CheckboxService();
    service.checkboxes = [{name: "item1", checked: false}, {name: "item2", checked: false}];
    const initialLength = service.checkboxes.length;
    service.removeCheckbox(5);
    expect(service.checkboxes.length).toBe(initialLength);
  });

  // Tests that a new checkbox item is not added when the name already exists in the list.
  it("test_add_existing_checkbox", () => {
    const service = new CheckboxService();
    service.checkboxes = [{name: "item1", checked: false}, {name: "item2", checked: false}];
    const initialLength = service.checkboxes.length;
    service.addCheckbox("item1");
    expect(service.checkboxes.length).toBe(initialLength);
  });

  // Tests the behavior of the class when the saved list of checkboxes is corrupted or invalid.
  it("test_recover_corrupted_checkboxes", () => {
    const service = new CheckboxService();
    localStorage.setItem('checkboxes', "invalidJSON");
    service.recover();
    expect(service.checkboxes).toEqual([]);
  });

  // Tests that the list of checkboxes is retrieved correctly.
  it("test_get_checkboxes", () => {
    const service = new CheckboxService();
    service.addCheckbox("item1");
    service.addCheckbox("item2");
    const checkboxes = service.getCheckboxes();
    expect(checkboxes.length).toBe(2);
    expect(checkboxes[0].name).toBe("item1");
    expect(checkboxes[0].checked).toBe(false);
    expect(checkboxes[1].name).toBe("item2");
    expect(checkboxes[1].checked).toBe(false);
  });

  // Tests that the list of checkboxes is saved correctly to local storage.
  it("test_save_checkboxes", () => {
    const checkboxService = new CheckboxService();
    checkboxService.addCheckbox("item1");
    checkboxService.addCheckbox("item2");
    checkboxService.save(checkboxService.getCheckboxes());
    const savedCheckboxes = JSON.parse(localStorage.getItem('checkboxes') || "");
    expect(savedCheckboxes.length).toBe(2);
    expect(savedCheckboxes[0].name).toBe("item1");
    expect(savedCheckboxes[0].checked).toBe(false);
    expect(savedCheckboxes[1].name).toBe("item2");
    expect(savedCheckboxes[1].checked).toBe(false);
  });
});
