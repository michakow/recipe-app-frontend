import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { AppInitialConfig } from './app/shared';

fetch('/config.json')
  .then((response) => response.json())
  .then((config: AppInitialConfig) => {
    bootstrapApplication(AppComponent, appConfig(config)).catch((err) =>
      console.error(err)
    );
  });
