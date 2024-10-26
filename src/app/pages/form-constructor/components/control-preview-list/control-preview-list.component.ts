import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { select } from '@ngxs/store';
import { FormConstructorState } from '@app/pages/form-constructor/store/form-constructor.state';
import { Controls, FormElement } from '@app/pages/form-constructor/form-constructor.model';
import { ControlPreviewComponent } from '@app/pages/form-constructor/components/control-preview/control-preview.component';

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

  protected addControlToEditor(event: Controls): void {
    console.log(event);
  }
}
