import { Directive, ElementRef, inject, OutputRef } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { WINDOW_CLICK_EVENT$ } from '@cdk/tokens/window-click.token';
import { outputFromObservable } from '@angular/core/rxjs-interop';

@Directive({
  selector: '[cdkClickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {
  private readonly elementRef: ElementRef<HTMLElement> = inject(ElementRef);
  private readonly windowClick$: Observable<Event> = inject(WINDOW_CLICK_EVENT$);

  public readonly clickOutside: OutputRef<Event> = outputFromObservable(
    this.windowClick$.pipe(filter((event: Event) => !this.isInside(event.target as HTMLElement))),
  );

  private isInside(elementToCheck: HTMLElement): boolean {
    return elementToCheck === this.elementRef.nativeElement || this.elementRef.nativeElement.contains(elementToCheck);
  }
}
