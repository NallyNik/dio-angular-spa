import { Injectable } from '@angular/core';
 @Injectable({
  providedIn: 'root'
})
export class CheckboxService {

  checkboxes: { name: string; checked: boolean; }[] = [];


   addCheckbox(item: string) {
    if (item && !this.checkboxes.find(x => x.name === item)) {
     this.checkboxes.push({name: item, checked: false})
    }
   }

   getCheckboxes() {
    return this.checkboxes;
  }

  removeCheckbox(index: number) {
    this.checkboxes.splice(index, 1);
  }

  save (checkboxes: { name: string; checked: boolean; }[]) {
    localStorage.setItem('checkboxes', JSON.stringify(checkboxes));
  }
  recover () {
    var savedCheckboxes = localStorage.getItem('checkboxes');
    if (savedCheckboxes!== null) {
      this.checkboxes = JSON.parse(savedCheckboxes);
    }
  }
}
