import { Routes } from '@angular/router';

import { List } from './views/list/list';
import { AcercaDeNosotros } from './views/acerca-de-nosotros/acerca-de-nosotros';
import { PaginaNoEncontrada } from './views/pagina-no-encontrada/pagina-no-encontrada';
import { Login } from './views/login/login';

export const routes: Routes = [

    {
        path: 'list',
        component: List
    },
    {
        path: 'us',
        component: AcercaDeNosotros
    },
    {
        path: '',
        redirectTo: '/list',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PaginaNoEncontrada
    },
    {
        path: 'login',
        component: Login
    }

];