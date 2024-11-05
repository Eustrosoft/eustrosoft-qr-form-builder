import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DatepickerElement } from '@app/pages/form-constructor/form-constructor.model';
import { MatFormField, MatHint, MatLabel, MatSuffix } from '@angular/material/form-field';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker,
  MatEndDate,
  MatStartDate,
} from '@angular/material/datepicker';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'datepicker-element',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatHint,
    MatDatepickerToggle,
    MatDatepicker,
    MatInput,
    MatDatepickerInput,
    MatSuffix,
    MatDateRangeInput,
    MatDateRangePicker,
    MatStartDate,
    MatEndDate,
  ],
  templateUrl: './datepicker-element.component.html',
  styleUrl: './datepicker-element.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerElementComponent {
  public readonly label = input<DatepickerElement['label']>('');
  public readonly placeholder = input<DatepickerElement['placeholder']>('');
  public readonly hint = input<DatepickerElement['hint']>('');
  public readonly datepickerType = input<DatepickerElement['datepickerType']>('single');
}
