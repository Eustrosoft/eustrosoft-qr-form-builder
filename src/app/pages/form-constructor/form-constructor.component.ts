import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'form-constructor',
  standalone: true,
  imports: [],
  templateUrl: './form-constructor.component.html',
  styleUrl: './form-constructor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormConstructorComponent {}
