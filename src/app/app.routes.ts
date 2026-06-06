// Aaron Esteban Tellez Zamudio
// Archivo de rutas principales de la aplicación.
// Aquí se configura el LayoutComponent como contenedor principal
// y se conectan las páginas home, explore y settings.

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard], // Aquí se podrían agregar guards de autenticación
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'explore',
        component: ExploreComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
// Aaron Esteban Tellez Zamudio
