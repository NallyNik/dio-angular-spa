import { Injectable } from '@angular/core';

 @Injectable({
  providedIn: 'root'
})
export class ChecklistService {
  listItem: string[] = [];
  keysList: string[] = [];

  //Add item to the list
   addListItem (item: string) {
    if (item && !this.listItem.includes(item)) {
     this.listItem.push(item)
    }
   }

   removeListItem(index: number) {
    this.listItem.splice(index, 1);
  }

   getListItem() {
    return this.listItem;
  }

  setTask(key: string, value: any): void {
    if (key && !this.keysList.includes(key) && value) {
      localStorage.setItem(key, JSON.stringify(value));
      this.keysList.push(key);
      localStorage.setItem('keysList', JSON.stringify(this.keysList));
    }
  }

  getTasks(key: string) {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  }

  getkeys() {
    return this.keysList;
  }

  removeList (key: string): void {
    localStorage.removeItem(key);
  }

  removeKey(index: number): void {
    this.removeList(this.keysList[index]);
    this.keysList.splice(index, 1);
    localStorage.setItem('keysList', JSON.stringify(this.keysList));
  }

  recover () {
    var savedLists = localStorage.getItem('keysList');
    if (savedLists) {
      this.keysList = JSON.parse(savedLists);
    }
  }

}
