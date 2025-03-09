import { createFeature, createReducer, on } from '@ngrx/store';

import { keycloakInitialState } from '../../configs';
import { keycloakActions } from './actions';

const initialState = keycloakInitialState;

export const keycloakReducer = createFeature({
  name: 'keycloak',
  reducer: createReducer(
    initialState,
    on(keycloakActions.tokenChanged, (state, { token }) => ({
      ...state,
      tokenExpiresAt: new Date(token.exp! * 1000).toLocaleString(),
      tokenParsed: token,
    })),
    on(keycloakActions.keycloakReady, (state) => ({ ...state, isReady: true }))
  ),
});
