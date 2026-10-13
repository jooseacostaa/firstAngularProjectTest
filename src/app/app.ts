import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Menu } from './menu/menu';
import { List } from './views/list/list';

@Component({
  imports: [RouterOutlet, Menu, List, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('firstAngularProjectTest');
}
