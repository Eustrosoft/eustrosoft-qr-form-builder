import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'select-element-settings',
  standalone: true,
  imports: [],
  templateUrl: './select-element-settings.component.html',
  styleUrl: './select-element-settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectElementSettingsComponent {}
