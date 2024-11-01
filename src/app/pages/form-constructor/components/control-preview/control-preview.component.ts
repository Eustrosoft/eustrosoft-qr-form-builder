import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ControlElement } from '@app/pages/form-constructor/form-constructor.model';

@Component({
  selector: 'control-preview',
  standalone: true,
  imports: [],
  templateUrl: './control-preview.component.html',
  styleUrl: './control-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(click)': 'onControlClick()',
  },
})
export class ControlPreviewComponent {
  public readonly name = input.required<string>();
  public readonly controlElement = input.required<ControlElement>();

  public readonly controlElementClick = output<ControlElement>();

  protected onControlClick(): void {
    this.controlElementClick.emit(this.controlElement());
  }
}
