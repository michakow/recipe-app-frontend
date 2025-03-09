import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { KeycloakTokenParsed } from 'keycloak-js';

export const keycloakActions = createActionGroup({
  source: 'Keycloak',
  events: {
    'Keycloak init': emptyProps(),
    'Keycloak ready': emptyProps(),
    'Login failure': emptyProps(),
    'Login success': emptyProps(),
    'Token auto refresh failure': emptyProps(),
    'Token auto refresh success': emptyProps(),
    'Token changed': props<{ token: KeycloakTokenParsed }>(),
    'Update token': emptyProps(),
    Logout: emptyProps(),
  },
});
