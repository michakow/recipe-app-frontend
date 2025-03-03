import { KeycloakConfig } from 'keycloak-js';

export type AppInitialConfig = {
  apiUrl: string;
  keycloakConfig: KeycloakConfig;
};
