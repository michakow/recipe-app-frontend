import { KeycloakTokenParsed } from 'keycloak-js';

export type KeycloakState = {
  isReady: boolean;
  tokenExpiresAt: string | null;
  tokenParsed: KeycloakTokenParsed | null;
};
