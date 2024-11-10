import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RangedDatepickerElement } from '@app/pages/form-constructor/form-constructor.model';
import { MatFormField, MatHint, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatDatepickerToggle, MatDateRangeInput, MatDateRangePicker } from '@angular/material/datepicker';

@Component({
  selector: 'ranged-datepicker-element',
  standalone: true,
  imports: [MatFormField, MatDateRangeInput, MatDatepickerToggle, MatDateRangePicker, MatSuffix, MatLabel, MatHint],
  templateUrl: './ranged-datepicker-element.component.html',
  styleUrl: './ranged-datepicker-element.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RangedDatepickerElementComponent {
  public readonly label = input<RangedDatepickerElement['label']>('');
  public readonly placeholder = input<RangedDatepickerElement['placeholder']>('');
  public readonly hint = input<RangedDatepickerElement['hint']>('');
}
