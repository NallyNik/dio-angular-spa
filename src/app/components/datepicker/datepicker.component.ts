import {Component} from '@angular/core';

/** @title Datepicker with filter validation */
@Component({
  selector: 'app-datepicker',
  templateUrl: 'datepicker.component.html',
})
export class DatepickerComponent {
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
}
