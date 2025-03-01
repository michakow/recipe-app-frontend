import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components';

@Component({
  selector: 'app-shell',
  imports: [HeaderComponent, RouterOutlet],
  template: `
    <header>
      <app-header />
    </header>
    <nav>nawigacja</nav>
    <main>
      <router-outlet />
    </main>
  `,
  styles: ``,
})
export class ShellComponent {}
