import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { Contato } from './pages/contato/contato';
import { Entrada } from './pages/entrada/entrada';
import { Localizacao } from './pages/localizacao/localizacao';
import { Login } from './pages/login/login';
import { Treinos } from './pages/treinos/treinos';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'entrada' },
	{ path: 'login', component: Login },
	{ path: 'entrada', component: Entrada, canActivate: [authGuard] },
	{ path: 'contato', component: Contato, canActivate: [authGuard] },
	{ path: 'localizacao', component: Localizacao, canActivate: [authGuard] },
	{ path: 'treinos', component: Treinos, canActivate: [authGuard] },
	{ path: '**', redirectTo: 'entrada' },
];
