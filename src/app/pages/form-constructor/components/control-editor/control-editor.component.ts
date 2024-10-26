import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'control-editor',
  standalone: true,
  imports: [],
  templateUrl: './control-editor.component.html',
  styleUrl: './control-editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlEditorComponent {}
