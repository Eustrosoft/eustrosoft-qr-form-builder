import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Controls } from '@app/pages/form-constructor/form-constructor.model';

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
  public readonly control = input.required<Controls>();

  public readonly controlClick = output<Controls>();

  protected onControlClick(): void {
    this.controlClick.emit(this.control());
  }
}
