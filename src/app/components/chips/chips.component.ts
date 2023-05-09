import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component} from '@angular/core';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';

export interface grateful {
  name: string;
}

/**
 * @title Chips with input
 */
@Component({
  selector: 'app-chips',
  templateUrl: 'chips.component.html',
  styleUrls: ['chips.component.scss'],
})
export class ChipsComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  gratitude: grateful[] = [{name: 'Health'}, {name: 'Food'}, {name: 'Home'}];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our grateful
    if (value) {
      this.gratitude.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(grateful: grateful): void {
    const index = this.gratitude.indexOf(grateful);

    if (index >= 0) {
      this.gratitude.splice(index, 1);
    }
  }

  edit(grateful: grateful, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove grateful if it no longer has a name
    if (!value) {
      this.remove(grateful);
      return;
    }

    // Edit existing grateful
    const index = this.gratitude.indexOf(grateful);
    if (index >= 0) {
      this.gratitude[index].name = value;
    }
  }
}
