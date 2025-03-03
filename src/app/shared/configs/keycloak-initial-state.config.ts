import { KeycloakState } from '../types';

export const keycloakInitialState: KeycloakState = {
  accessTokenExpires: null,
  isLoggedIn: false,
  keycloakEvent: '',
  refreshTokenExpires: null,
  tokenParsed: null,
};
