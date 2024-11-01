import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'input-element',
  standalone: true,
  imports: [],
  templateUrl: './input-element.component.html',
  styleUrl: './input-element.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputElementComponent {}
