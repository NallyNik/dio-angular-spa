import { Component, OnInit } from '@angular/core';
import { CheckboxService } from 'src/app/services/checkbox.service';
 @Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {
  checkboxItem: string = '';
  checkboxes: string[] = [];

   constructor(private checkboxService: CheckboxService) { }

  addNew () {
    this.checkboxService.addCheckbox(this.checkboxItem);
    this.checkboxItem = '';
  }

  ngOnInit() {
    this.checkboxes = this.checkboxService.getCheckboxes();
  }
}
