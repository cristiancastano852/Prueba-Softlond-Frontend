import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from '../app/components/form/form.component';
import { CasoComponent } from '../app/components/caso/caso.component';
import { LoginComponent } from '../app/components/login/login.component';
// import { ConsultarCasoComponent } from './consultar-caso/consultar-caso.component';
// import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'crear-caso', component: FormComponent },
  { path: 'consultar-caso', component: CasoComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/crear-caso', pathMatch: 'full' }, // Ruta predeterminada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
