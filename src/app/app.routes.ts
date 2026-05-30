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

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
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
