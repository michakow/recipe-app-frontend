import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-users-shell',
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export class UsersShellComponent {}
