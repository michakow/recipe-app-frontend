import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppInitialConfigService<T> {
  private appConfig$ = new BehaviorSubject<T | null>(null);

  getConfig() {
    return this.appConfig$.asObservable();
  }

  setConfig(config: T) {
    this.appConfig$.next(config);
  }
}
