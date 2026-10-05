import { Component } from '@angular/core';
import { Entree } from './entree/entree';


@Component({
  imports: [Entree],
  selector: 'app-list',
  styleUrl: './list.css',
  templateUrl: './list.html',
})
export class List { }
