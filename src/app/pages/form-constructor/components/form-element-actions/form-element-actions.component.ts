import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { FlexBlockComponent } from '@core/components/flex-block/flex-block.component';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'form-element-actions',
  standalone: true,
  imports: [FlexBlockComponent, MatButton],
  templateUrl: './form-element-actions.component.html',
  styleUrl: './form-element-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormElementActionsComponent {
  public readonly removeClicked = output<void>();
  public readonly configureClicked = output<void>();
}
