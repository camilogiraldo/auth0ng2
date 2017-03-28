import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolbarComponent } from './components/toolbar.component';


export const router: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: ToolbarComponent },
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
