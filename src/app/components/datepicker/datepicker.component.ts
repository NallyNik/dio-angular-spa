import {Component} from '@angular/core';
import * as moment from 'moment';

/** @title Datepicker with filter validation */
@Component({
  selector: 'app-datepicker',
  templateUrl: 'datepicker.component.html',
})
export class DatepickerComponent {
  myFilter = (d: Date | null): boolean => {
    const currentDate = moment(new Date());
    const selectedDate = moment(d);
    return selectedDate.isSameOrAfter(currentDate);
  };
}
