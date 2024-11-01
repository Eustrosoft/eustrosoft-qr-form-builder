import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'select-element',
  standalone: true,
  imports: [],
  templateUrl: './select-element.component.html',
  styleUrl: './select-element.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectElementComponent {}
