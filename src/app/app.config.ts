import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppState } from './store/app.state';
import { FormConstructorState } from './pages/form-constructor/store/form-constructor.state';
import { providePipes } from '@core/providers/pipe.provider';
import { provideStore } from '@ngxs/store';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { MAT_CARD_CONFIG, MatCardConfig } from '@angular/material/card';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore([AppState, FormConstructorState], withNgxsReduxDevtoolsPlugin()),
    provideAnimationsAsync(),
    providePipes(),
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: <MatFormFieldDefaultOptions>{ floatLabel: 'always', appearance: 'outline', subscriptSizing: 'dynamic' } },
    { provide: MAT_CARD_CONFIG, useValue: <MatCardConfig>{ appearance: 'outlined' } },
  ],
};
