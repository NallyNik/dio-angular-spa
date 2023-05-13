import { Component, OnInit } from '@angular/core';
import { CheckboxService } from 'src/app/services/checkbox.service';
 @Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {
  checkboxItem: string = '';
  checkboxes: { name: string; checked: boolean; }[] = [];

   constructor(private checkboxService: CheckboxService) {
     this.checkboxService.recover();
    }

  addNew () {
    this.checkboxService.addCheckbox(this.checkboxItem);
    this.checkboxService.save(this.checkboxes);
    this.checkboxItem = '';
  }
  remove (i: number) {
    this.checkboxService.removeCheckbox(i);
  }

  ngOnInit() {
    this.checkboxes = this.checkboxService.getCheckboxes();
  }

  updateLocalStorage() {
    // save updated state of checkboxes to local storage
    localStorage.setItem('checkboxes', JSON.stringify(this.checkboxes));
  }
}
