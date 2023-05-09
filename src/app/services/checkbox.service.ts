import { Injectable } from '@angular/core';
 @Injectable({
  providedIn: 'root'
})
export class CheckboxService {
  checkboxes: string[] = [];

   addCheckbox(checkboxItem: string) {
    if (checkboxItem && !this.checkboxes.includes(checkboxItem)) {
     this.checkboxes.push(checkboxItem)
    }
   }

   getCheckboxes() {
    return this.checkboxes;
  }

  removeCheckbox(index: number) {
    this.checkboxes.splice(index, 1);
  }
}
