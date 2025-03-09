import {
  AutoRefreshTokenService,
  ProvideKeycloakOptions,
  UserActivityService,
  withAutoRefreshToken,
} from 'keycloak-angular';

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
    features: [withAutoRefreshToken()],
    providers: [AutoRefreshTokenService, UserActivityService],
  };
};
