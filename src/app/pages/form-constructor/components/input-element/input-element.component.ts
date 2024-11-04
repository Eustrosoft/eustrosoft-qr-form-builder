import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { InputElement } from '@app/pages/form-constructor/form-constructor.model';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'input-element',
  standalone: true,
  imports: [MatFormField, MatInput, MatLabel],
  templateUrl: './input-element.component.html',
  styleUrl: './input-element.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputElementComponent {
  public readonly label = input<InputElement['label']>('Input');
  public readonly placeholder = input<InputElement['placeholder']>('');
  public readonly inputType = input<InputElement['inputType']>('text');
}
