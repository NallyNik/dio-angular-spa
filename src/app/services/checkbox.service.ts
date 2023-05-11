import { Injectable } from '@angular/core';
 @Injectable({
  providedIn: 'root'
})
export class CheckboxService {
  checkboxes: string[] = ['Sugar', 'Milk', 'Eggs'];

   addCheckbox(checkboxItem: string) {
    if (checkboxItem && !this.checkboxes.includes(checkboxItem)) {
     this.checkboxes.push(checkboxItem)
    }
   }

   getCheckboxes() {
    return this.checkboxes;
  }

  removeCheckbox(checkbox: string) {
    this.checkboxes.splice(this.checkboxes.indexOf(checkbox), 1);
  }

  save (checkboxes: string[]) {
    localStorage.setItem('checkboxes', JSON.stringify(checkboxes));
  }
  recover () {
    var savedCheckboxes = localStorage.getItem('checkboxes');
    if (savedCheckboxes) {
      this.checkboxes = JSON.parse(savedCheckboxes);
    }
  }
}
