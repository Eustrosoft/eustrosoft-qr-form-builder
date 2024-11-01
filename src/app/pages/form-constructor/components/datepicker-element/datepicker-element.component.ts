import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'datepicker-element',
  standalone: true,
  imports: [],
  templateUrl: './datepicker-element.component.html',
  styleUrl: './datepicker-element.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerElementComponent {}
