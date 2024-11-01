import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { dispatch, select } from '@ngxs/store';
import { FormConstructorState } from '@app/pages/form-constructor/store/form-constructor.state';
import { ControlElement, FormElement } from '@app/pages/form-constructor/form-constructor.model';
import { ControlPreviewComponent } from '@app/pages/form-constructor/components/control-preview/control-preview.component';
import { FormConstructorActions } from '@app/pages/form-constructor/store/form-constructor.actions';

@Component({
  selector: 'control-preview-list',
  standalone: true,
  imports: [ControlPreviewComponent],
  templateUrl: './control-preview-list.component.html',
  styleUrl: './control-preview-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlPreviewListComponent {
  protected readonly formElementList: Signal<FormElement[]> = select(FormConstructorState.getFormElementList$);

  protected readonly addInputToEditor = dispatch(FormConstructorActions.AddInputToEditor);
  protected readonly addSelectToEditor = dispatch(FormConstructorActions.AddSelectToEditor);
  protected readonly addDatepickerToEditor = dispatch(FormConstructorActions.AddDatepickerToEditor);

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
