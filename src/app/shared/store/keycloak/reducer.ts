import { createFeature, createReducer } from '@ngrx/store';

import { keycloakInitialState } from '../../configs';

const initialState = keycloakInitialState;

export const keycloakReducer = createFeature({
  name: 'keycloak',
  reducer: createReducer(initialState),
});
