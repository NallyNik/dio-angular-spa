import { Injectable } from '@angular/core';

 @Injectable({
  providedIn: 'root'
})
export class ChecklistService {
  listItem: { name: string; checked: boolean; }[] = [];
  keysList: string[] = [];

  //Add item to the list
   addListItem (item: string) {
    if (item && !this.listItem.find(x => x.name === item)) {
     this.listItem.push({name: item, checked: false})
    }
   }

   removeListItem(index: number) {
    this.listItem.splice(index, 1);
  }

   getListItem() {
    return this.listItem;
  }

  setTask(key: string, value: any): void {
    if (key && !this.keysList.includes(key)) {
      localStorage.setItem(key, JSON.stringify(value));
      this.keysList.push(key);
      localStorage.setItem('keysList', JSON.stringify(this.keysList));
    }
  }

  getTasks(key: string): any {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  }

  getkeys() {
    return this.keysList;
  }

  removeKey(index: number) {
    this.keysList.splice(index, 1);
    localStorage.setItem('keysList', JSON.stringify(this.keysList));
  }

  recover () {
    var savedLists = localStorage.getItem('keysList');
    if (savedLists) {
      this.keysList = JSON.parse(savedLists);
    }
  }

  updateLocalStorage() {
    localStorage.setItem('key', JSON.stringify(this.listItem));
  }
}
