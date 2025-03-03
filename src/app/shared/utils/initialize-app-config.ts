import { inject } from '@angular/core';

import { AppInitialConfigService } from '../services';

export const initializeAppConfig = <T>(config: T) => {
  return () => inject(AppInitialConfigService<T>).setConfig(config);
};
