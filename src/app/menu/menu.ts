import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-menu',
  styleUrl: './menu.css',
  templateUrl: './menu.html',
})
export class Menu {
  public userName = localStorage.getItem('userName');

  constructor(private router: Router) { }

  public logout(): void {
    localStorage.removeItem('userName');
    localStorage.removeItem('personalToken');

    this.userName = null;
    this.router.navigate(['/login']);
  }
}
