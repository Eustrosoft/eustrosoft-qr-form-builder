import { inject } from '@angular/core';
import { WINDOW } from '../tokens/window.token';
import { IS_BROWSER } from '../tokens/is-browser.token';
import { fromEvent, Observable, of } from 'rxjs';

export const browserEventObservableFactory = <T>(eventName: string): Observable<T> => {
  const window: Window = inject(WINDOW);
  const isBrowser: boolean = inject(IS_BROWSER);

  return isBrowser ? fromEvent<T>(window, eventName) : of();
};
