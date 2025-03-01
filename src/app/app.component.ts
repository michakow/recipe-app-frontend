import { Component } from '@angular/core';

import { ShellComponent } from './shell';

@Component({
  selector: 'app-root',
  imports: [ShellComponent],
  template: '<app-shell />',
  styles: '',
})
export class AppComponent {}
