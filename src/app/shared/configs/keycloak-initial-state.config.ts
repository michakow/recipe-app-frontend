import { KeycloakState } from '../types';

export const keycloakInitialState: KeycloakState = {
  isReady: false,
  tokenExpiresAt: null,
  tokenParsed: null,
};
