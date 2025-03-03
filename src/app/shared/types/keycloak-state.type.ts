import { KeycloakTokenParsed } from 'keycloak-js';

export type KeycloakState = {
  accessTokenExpires: string | null;
  isLoggedIn: boolean;
  keycloakEvent: string;
  refreshTokenExpires: string | null;
  tokenParsed: KeycloakTokenParsed | null;
};
