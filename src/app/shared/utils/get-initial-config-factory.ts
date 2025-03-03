import { inject } from '@angular/core';

import { AppInitialConfigService } from '../services';

export const getInitialConfigFactory = <T>(configUrl = '/config.json') => {
  return () => inject(AppInitialConfigService<T>).loadConfig(configUrl);
};
