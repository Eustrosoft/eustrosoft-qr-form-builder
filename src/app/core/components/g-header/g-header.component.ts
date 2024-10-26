import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'g-header',
  standalone: true,
  imports: [],
  templateUrl: './g-header.component.html',
  styleUrl: './g-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GHeaderComponent {}
