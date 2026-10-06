import { Component, Input } from '@angular/core';

import { EntreeItem } from '../../../shared/interfaces/entree-item';

@Component({
  imports: [],
  selector: 'app-entree',
  styleUrl: './entree.css',
  templateUrl: './entree.html',
})
export class Entree {

  @Input() public entreeItem!: EntreeItem;

}
