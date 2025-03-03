import { ProvideKeycloakOptions } from 'keycloak-angular';

import { AppInitialConfig } from '../types';

export const initializeKeycloakConfig = (
  config: AppInitialConfig
): ProvideKeycloakOptions => {
  const keycloakConfig = config.keycloakConfig;

  return {
    config: {
      url: keycloakConfig.url,
      realm: keycloakConfig.realm,
      clientId: keycloakConfig.clientId,
    },
    initOptions: {
      onLoad: 'login-required',
      checkLoginIframe: false,
    },
  };
};
