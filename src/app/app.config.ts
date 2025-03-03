import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  ApplicationConfig,
  isDevMode,
  LOCALE_ID,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import {
  NavigationActionTiming,
  provideRouterStore,
  routerReducer,
} from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { AppInitialConfig, getInitialConfigFactory } from './shared';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAppInitializer(getInitialConfigFactory<AppInitialConfig>()),
    provideEffects(),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    provideRouterStore({
      navigationActionTiming: NavigationActionTiming.PostActivation,
    }),
    provideStore({ router: routerReducer }),
    provideStoreDevtools({ maxAge: 50, logOnly: !isDevMode() }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    { provide: LOCALE_ID, useValue: 'pl-PL' },
  ],
};
