import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  user = {
    name: '',
    password: ''
  };

  submit() {
    console.log('Datos del formulario:', this.user);
  }
}