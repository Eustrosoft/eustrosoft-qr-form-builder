import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { SelectElement } from '@app/pages/form-constructor/form-constructor.model';

@Component({
  selector: 'select-element',
  standalone: true,
  imports: [MatFormField, MatLabel, MatSelect],
  templateUrl: './select-element.component.html',
  styleUrl: './select-element.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectElementComponent {
  public readonly label = input<SelectElement['label']>('');
  public readonly placeholder = input<SelectElement['placeholder']>('');
  public readonly optionList = input<SelectElement['optionList']>([]);
}
