import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { dispatch, select } from '@ngxs/store';
import { FormConstructorState } from '@app/pages/form-constructor/store/form-constructor.state';
import { FlexBlockComponent } from '@core/components/flex-block/flex-block.component';
import { InputElementComponent } from '@app/pages/form-constructor/components/input-element/input-element.component';
import { SelectElementComponent } from '@app/pages/form-constructor/components/select-element/select-element.component';
import { DatepickerElementComponent } from '@app/pages/form-constructor/components/datepicker-element/datepicker-element.component';
import { FormElementService } from '@app/pages/form-constructor/services/form-element.service';
import { MatButton } from '@angular/material/button';
import { InputElementSettingsComponent } from '@app/pages/form-constructor/components/input-element-settings/input-element-settings.component';
import { FormConstructorActions } from '@app/pages/form-constructor/store/form-constructor.actions';
import { SelectElementSettingsComponent } from '@app/pages/form-constructor/components/select-element-settings/select-element-settings.component';
import { DatepickerElementSettingsComponent } from '@app/pages/form-constructor/components/datepicker-element-settings/datepicker-element-settings.component';

@Component({
  selector: 'control-editor',
  standalone: true,
  imports: [
    FlexBlockComponent,
    InputElementComponent,
    SelectElementComponent,
    DatepickerElementComponent,
    MatButton,
    InputElementSettingsComponent,
    SelectElementSettingsComponent,
    DatepickerElementSettingsComponent,
  ],
  templateUrl: './control-editor.component.html',
  styleUrl: './control-editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlEditorComponent {
  protected readonly formElementService = inject(FormElementService);

  protected readonly formFieldList = select(FormConstructorState.getFormFieldList$);

  protected readonly patchInputElementSettings = dispatch(FormConstructorActions.PatchInputElementSettings);
  protected readonly patchSelectElementSettings = dispatch(FormConstructorActions.PatchSelectElementSettings);
  protected readonly patchDatepickerElementSettings = dispatch(FormConstructorActions.PatchDatepickerElementSettings);
  protected readonly removeFormElement = dispatch(FormConstructorActions.RemoveFormElement);
}
