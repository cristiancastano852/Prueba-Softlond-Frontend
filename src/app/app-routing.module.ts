import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from '../app/components/form/form.component';
import { CasoComponent } from '../app/components/caso/caso.component';
import { HomeComponent } from '../app/components/home/home.component';
import { AuthGuard } from '../guards/auth.guard';
const routes: Routes = [
  { path: 'crear-caso', component: FormComponent, canActivate: [AuthGuard] },
  {
    path: 'consultar-caso',
    component: CasoComponent,
    canActivate: [AuthGuard],
  },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta predeterminada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
