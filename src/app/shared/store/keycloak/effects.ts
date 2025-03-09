import { inject, Injectable } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { KEYCLOAK_EVENT_SIGNAL, KeycloakEventType } from 'keycloak-angular';
import Keycloak from 'keycloak-js';
import { filter, map } from 'rxjs/operators';

import { keycloakActions } from './actions';

@Injectable()
export class KeycloakEffects {
  private actions$ = inject(Actions);
  private keycloak = inject(Keycloak);
  private keycloakEventSignal = inject(KEYCLOAK_EVENT_SIGNAL);

  private keycloakEvent$ = toObservable(this.keycloakEventSignal);

  keycloakInit$ = createEffect(() =>
    this.keycloakEvent$.pipe(
      filter(({ type }) => type === KeycloakEventType.KeycloakAngularInit),
      map(() => keycloakActions.keycloakInit())
    )
  );

  authSuccess$ = createEffect(() =>
    this.keycloakEvent$.pipe(
      filter(({ type }) => type === KeycloakEventType.AuthSuccess),
      map(() => keycloakActions.loginSuccess())
    )
  );

  authError$ = createEffect(() =>
    this.keycloakEvent$.pipe(
      filter(({ type }) => type === KeycloakEventType.AuthError),
      map(() => keycloakActions.loginFailure())
    )
  );

  logout$ = createEffect(() =>
    this.keycloakEvent$.pipe(
      filter(({ type }) => type === KeycloakEventType.AuthLogout),
      map(() => keycloakActions.logout())
    )
  );

  autoRefreshSuccess$ = createEffect(() =>
    this.keycloakEvent$.pipe(
      filter(({ type }) => type === KeycloakEventType.AuthRefreshSuccess),
      map(() => keycloakActions.tokenAutoRefreshSuccess())
    )
  );

  autoRefreshFailure$ = createEffect(() =>
    this.keycloakEvent$.pipe(
      filter(({ type }) => type === KeycloakEventType.AuthRefreshError),
      map(() => keycloakActions.tokenAutoRefreshFailure())
    )
  );

  keycloakReady$ = createEffect(() =>
    this.keycloakEvent$.pipe(
      filter(({ type }) => type === KeycloakEventType.Ready),
      map(() => keycloakActions.keycloakReady())
    )
  );

  tokenChanged$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        keycloakActions.keycloakReady,
        keycloakActions.tokenAutoRefreshSuccess
      ),
      map(() =>
        keycloakActions.tokenChanged({ token: this.keycloak.tokenParsed! })
      )
    )
  );
}
