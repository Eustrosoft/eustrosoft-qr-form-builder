import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ControlPreviewListComponent } from '@app/pages/form-constructor/components/control-preview-list/control-preview-list.component';
import { ControlEditorComponent } from '@app/pages/form-constructor/components/control-editor/control-editor.component';
import { FlexBlockComponent } from '@core/components/flex-block/flex-block.component';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { AppRoutes } from '@app/app.constant';
import { dispatch } from '@ngxs/store';
import { SerializeFormFieldList } from '@app/pages/form-constructor/store/form-constructor.actions';

@Component({
  selector: 'form-constructor',
  standalone: true,
  imports: [ControlPreviewListComponent, ControlEditorComponent, FlexBlockComponent, MatButton, RouterLink],
  templateUrl: './form-constructor.component.html',
  styleUrl: './form-constructor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormConstructorComponent {
  protected readonly serializeFormFieldList = dispatch(SerializeFormFieldList);
  protected readonly AppRoutes = AppRoutes;
}
