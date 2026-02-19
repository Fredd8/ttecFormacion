import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/inicio-sesion/inicio-sesion.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'iniciado', component: PaginaPrincipalComponent },
];
