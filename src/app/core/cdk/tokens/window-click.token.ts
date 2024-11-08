import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { browserEventObservableFactory } from '../factories/browser-event-observable.factory';

export const WINDOW_CLICK_EVENT$: InjectionToken<Observable<Event>> = new InjectionToken('window click event observable', {
  factory: () => browserEventObservableFactory<Event>('click'),
});
