import { ChangeDetectionStrategy, Component } from '@angular/core';
import { dispatch, select } from '@ngxs/store';
import { FormConstructorState } from '@app/pages/form-constructor/store/form-constructor.state';
import { ControlElement } from '@app/pages/form-constructor/form-constructor.model';
import { ControlPreviewComponent } from '@app/pages/form-constructor/components/control-preview/control-preview.component';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { FlexBlockComponent } from '@core/components/flex-block/flex-block.component';
import { AddDatepickerElementToEditor, AddInputElementToEditor, AddSelectElementToEditor } from '@app/pages/form-constructor/store/form-constructor.actions';

@Component({
  selector: 'control-preview-list',
  standalone: true,
  imports: [ControlPreviewComponent, MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent, FlexBlockComponent],
  templateUrl: './control-preview-list.component.html',
  styleUrl: './control-preview-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlPreviewListComponent {
  protected readonly formElementList = select(FormConstructorState.getFormElementList$);

  protected readonly addInputToEditor = dispatch(AddInputElementToEditor);
  protected readonly addSelectToEditor = dispatch(AddSelectElementToEditor);
  protected readonly addDatepickerToEditor = dispatch(AddDatepickerElementToEditor);

  protected addControlToEditor(event: ControlElement): void {
    switch (event) {
      case 'input':
        this.addInputToEditor();
        break;
      case 'select':
        this.addSelectToEditor();
        break;
      case 'datepicker':
        this.addDatepickerToEditor();
        break;
      default:
        throw new Error(`Unknown element type: ${event}`);
    }
  }
}
