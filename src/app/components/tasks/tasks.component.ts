import { Component, OnInit } from '@angular/core';
import { ChecklistService } from '../../services/checklist.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  newItem: string;
  listTitle: string;
  listItems: string[];
  value: string[];
  keys: string[];

  constructor(readonly checklistService: ChecklistService) {
    this.newItem = '';
    this.listTitle = '';
    this.listItems = [];
    this.value = [];
    this.keys = [];

    this.checklistService.recover();
  }

  //Add item to the list
  addNew (): void {
    this.checklistService.addListItem(this.newItem);
    this.newItem = '';
  }
  //Remove item from the list
  removeItem (i: number): void {
    this.checklistService.removeListItem(i);
  }
  //Save list to local storage and reset model
  getValue(): void {
    if (this.listTitle) {
      this.value = this.checklistService.getTasks(this.listTitle);
    }
  }
  setValue(): void {
    this.checklistService.setTask(this.listTitle, this.listItems);
    this.getValue();
    this.listTitle = '';
    this.listItems = [];
  }

  removeChecklist(i: number): void {
    this.checklistService.removeKey(i);
  }

  ngOnInit() {
    this.listItems = this.checklistService.getListItem();
    this.keys = this.checklistService.getkeys();
  }
}
