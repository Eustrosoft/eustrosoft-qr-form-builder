import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppState } from './store/app.state';
import { FormConstructorState } from './pages/form-constructor/store/form-constructor.state';
import { providePipes } from '@core/providers/pipe.provider';
import { provideStore } from '@ngxs/store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore([AppState, FormConstructorState], withNgxsReduxDevtoolsPlugin()),
    provideAnimationsAsync(),
    providePipes(),
  ],
};
