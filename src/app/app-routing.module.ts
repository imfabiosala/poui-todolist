import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskRoutes } from './tasks';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/tasks/list',
    pathMatch: 'full'
  },
  ...TaskRoutes // Concat arrays: app.routing + tasks.routing
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }