import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { Entree } from './entree/entree';
import { Entries } from '../../shared/services/entries';
import { EntreeItem } from '../../shared/interfaces/entree-item'

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [Entree],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List implements OnInit {

  public entryList: any[] = [];

  private entries = inject(Entries);

  ngOnInit(): void {
    this.retrieveEntries();
  }

  private retrieveEntries(): void {
    this.entries.retrieveEntries().subscribe({
      next: (data) => {
        this.entryList = data;
      },
      error: (error: Error) => {
        console.log('Error:', error);
      },
      complete: () => {
        console.log('Petición realizada correctamente');
      }
    });
  }
}