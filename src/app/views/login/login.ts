import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../shared/classes/user';
import { Logan } from '../../shared/services/logan';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private loganService = inject(Logan);
  private router = inject(Router);

  public user: User = new User();

  public submit(): void {
    this.loganService.logan(this.user).subscribe({
      next: (data: number) => {
        localStorage.setItem('userName', this.user.name);
        localStorage.setItem('personalToken', `${data}`);

        this.router.navigate(['/list']);
      },
      error: (error: Error) => {
        console.error('Error al realizar el acceso:', error);
      }
    });
  }
}