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
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideKeycloak } from 'keycloak-angular';

import { routes } from './app.routes';
import {
  AppInitialConfig,
  initializeAppConfig,
  initializeKeycloakConfig,
  keycloakReducer,
} from './shared';

export function appConfig(config: AppInitialConfig): ApplicationConfig {
  return {
    providers: [
      provideAppInitializer(initializeAppConfig<AppInitialConfig>(config)),
      provideKeycloak(initializeKeycloakConfig(config)),
      provideHttpClient(withInterceptorsFromDi()),
      provideRouter(routes),
      provideRouterStore({
        navigationActionTiming: NavigationActionTiming.PostActivation,
      }),
      provideStore({ router: routerReducer }),
      provideState(keycloakReducer),
      provideEffects(),
      provideStoreDevtools({ maxAge: 50, logOnly: !isDevMode() }),
      provideZoneChangeDetection({ eventCoalescing: true }),
      { provide: LOCALE_ID, useValue: 'pl-PL' },
    ],
  };
}
