import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppInitialConfigService<T> {
  private httpClient = inject(HttpClient);

  resolveConfig$ = new BehaviorSubject<T | null>(null);

  loadConfig(configUrl = '/config.json') {
    return firstValueFrom(
      this.httpClient.get<T>(configUrl).pipe(
        tap((config) => {
          this.resolveConfig$.next(config || null);
        })
      )
    );
  }
}
