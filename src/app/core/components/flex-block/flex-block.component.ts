import { ChangeDetectionStrategy, Component, inject, input, InputSignal } from '@angular/core';
import { PxToRemPipe } from '@core/pipe/px-to-rem.pipe';
import { FlexAlignItems, FlexDirection, FlexDisplay, FlexJustifyContent } from '@core/core.model';

@Component({
  selector: 'flex-block, *[flex-block]',
  standalone: true,
  imports: [],
  templateUrl: './flex-block.component.html',
  styleUrl: './flex-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.--flex-display]': 'flexDisplay()',
    '[style.--flex-direction]': 'flexDirection()',
    '[style.--flex-gap-size]': 'gapSize()',
    '[style.--flex-align-items]': 'flexAlignItems()',
    '[style.--flex-justify-content]': 'flexJustifyContent()',
    '[style.--flex-shorthand]': 'flexShorthand()',
    '[style.--flex]': 'flex()',
    '[style.--flex-align-self]': 'flexAlignSelf()',
  },
})
export class FlexBlockComponent {
  private readonly pxToRemPipe: PxToRemPipe = inject(PxToRemPipe);

  public readonly flexDisplay: InputSignal<FlexDisplay> = input<FlexDisplay>('flex');
  public readonly flexDirection: InputSignal<FlexDirection> = input<FlexDirection>('row');
  public readonly gapSize: InputSignal<string> = input('1rem', { transform: (value: string) => this.pxToRemPipe.transform(value) });
  public readonly flexAlignItems: InputSignal<FlexAlignItems> = input<FlexAlignItems>('');
  public readonly flexJustifyContent: InputSignal<FlexJustifyContent> = input<FlexJustifyContent>('');
  public readonly flexShorthand: InputSignal<string> = input<string>('');
  public readonly flex: InputSignal<string | number> = input<string | number>('');
  public readonly flexAlignSelf: InputSignal<FlexAlignItems> = input<FlexAlignItems>('');
}
