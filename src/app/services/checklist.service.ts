import { Injectable } from '@angular/core';

 @Injectable({
  providedIn: 'root'
})
export class ChecklistService {
  listItem: string[];
  keysList: string[];

  constructor() {
    this.listItem = [];
    this.keysList = [];
   }

  //Add item to the list
   addListItem (item: string) {
    if (!item) {
      throw new Error('Item cannot be empty');
    }
    if (this.listItem.includes(item)) {
      throw new Error('Item already exists');
    }
    this.listItem.push(item);
   }

   removeListItem(index: number) {
    this.listItem.splice(index, 1);
  }

   getListItem(): string[] {
    return this.listItem;
  }

  setTask(key: string, value: string[]): void {
    if (!key) {
      throw new Error('Key cannot be empty');
    }
    if (this.keysList.includes(key)) {
      throw new Error('Key already exists');
    }
    if (!value) {
      throw new Error('Value cannot be empty');
    }
    localStorage.setItem(key, JSON.stringify(value));
    this.keysList.push(key);
    localStorage.setItem('keysList', JSON.stringify(this.keysList));
    this.listItem = [];
  }

  getTasks(key: string) {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  }

  getkeys(): string[] {
    return this.keysList;
  }

  removeList (key: string): void {
    if (!key) {
      throw new Error('Key cannot be empty');
    }
    localStorage.removeItem(key);
  }

  removeKey(index: number): void {
    this.removeList(this.keysList[index]);
    this.keysList.splice(index, 1);
    localStorage.setItem('keysList', JSON.stringify(this.keysList));
  }

  recover (): void {
    const savedLists = localStorage.getItem('keysList');
    if (savedLists) {
      this.keysList = JSON.parse(savedLists);
    }
  }

}
