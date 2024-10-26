import { ChangeDetectionStrategy, Component, inject, input, InputSignal } from '@angular/core';
import { GridDisplay } from '@core/core.model';
import { PxToRemPipe } from '@core/pipe/px-to-rem.pipe';

@Component({
  selector: 'grid-block, *[grid-block]',
  standalone: true,
  imports: [],
  templateUrl: './grid-block.component.html',
  styleUrl: './grid-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.--grid-display]': 'gridDisplay()',
    '[style.--grid-row-gap-size]': 'rowGapSize()',
    '[style.--grid-column-gap-size]': 'columnGapSize()',
    '[style.--grid-template-columns]': 'gridTemplateColumns()',
    '[style.--grid-template-rows]': 'gridTemplateRows()',
    '[style.--justify-items]': 'justifyItems()',
  },
})
export class GridBlockComponent {
  private readonly pxToRemPipe: PxToRemPipe = inject(PxToRemPipe);

  public readonly gridDisplay: InputSignal<GridDisplay> = input<GridDisplay>('grid');
  public readonly rowGapSize: InputSignal<string> = input('1rem', { transform: (value: string) => this.pxToRemPipe.transform(value) });
  public readonly columnGapSize: InputSignal<string> = input('1rem', { transform: (value: string) => this.pxToRemPipe.transform(value) });
  public readonly gridTemplateColumns: InputSignal<string> = input<string>('repeat(3, 1fr)');
  public readonly gridTemplateRows: InputSignal<string> = input<string>('1fr');
  public readonly justifyItems: InputSignal<string> = input<string>('');
}
