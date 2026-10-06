import { Component } from '@angular/core';

import { Entree } from './entree/entree';
import { EntreeItem } from '../../shared/interfaces/entree-item'

@Component({
  imports: [Entree],
  selector: 'app-list',
  styleUrl: './list.css',
  templateUrl: './list.html',
})
export class List {

  public entryList: EntreeItem[] = [

    {
      title: 'Introducción a Angular',
      abstract: 'En esta lección realizaremos una pequeña introducción al mundo del desarrollo con Angular'
    },
    {
      title: 'TypeScript como lenguaje para Angular',
      abstract: 'Breve recorrido por el lenguaje de TypeScript como base para desarrollar en Angular'
    },
    {
      title: 'Componentes en Angular',
      abstract: 'Aprenderemos a usar los componentes en Angular y el porqué de su importancia'
    }
  ]

  public showTitle(title: string): void {
    alert(`Entrada seleccionada: ${title}`);
  }

}
