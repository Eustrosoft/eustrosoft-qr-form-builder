import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ControlPreviewListComponent } from '@app/pages/form-constructor/components/control-preview-list/control-preview-list.component';
import { ControlEditorComponent } from '@app/pages/form-constructor/components/control-editor/control-editor.component';

@Component({
  selector: 'form-constructor',
  standalone: true,
  imports: [ControlPreviewListComponent, ControlEditorComponent],
  templateUrl: './form-constructor.component.html',
  styleUrl: './form-constructor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormConstructorComponent {}
