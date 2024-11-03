import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { select } from '@ngxs/store';
import { FormConstructorState } from '@app/pages/form-constructor/store/form-constructor.state';
import { FlexBlockComponent } from '@core/components/flex-block/flex-block.component';
import { InputElementComponent } from '@app/pages/form-constructor/components/input-element/input-element.component';
import { SelectElementComponent } from '@app/pages/form-constructor/components/select-element/select-element.component';
import { DatepickerElementComponent } from '@app/pages/form-constructor/components/datepicker-element/datepicker-element.component';
import { FormElementService } from '@app/pages/form-constructor/services/form-element.service';

@Component({
  selector: 'control-editor',
  standalone: true,
  imports: [FlexBlockComponent, InputElementComponent, SelectElementComponent, DatepickerElementComponent],
  templateUrl: './control-editor.component.html',
  styleUrl: './control-editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlEditorComponent implements OnInit {
  protected readonly formElementService = inject(FormElementService);

  protected readonly formFieldList = select(FormConstructorState.getFormFieldList$);

  public ngOnInit(): void {
    console.log('ngOnInit');
  }
}
