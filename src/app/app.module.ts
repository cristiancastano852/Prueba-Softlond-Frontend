import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from './app.component';
import { FormComponent } from '../app/components/form/form.component'; // Asegúrate de importar el componente FormComponent desde la ruta correcta
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CasoComponent } from './components/caso/caso.component';
import { LoginComponent } from './components/login/login.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from '../environments/environments';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavbarComponent,
    CasoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    AuthModule.forRoot({
      // domain: environment.auth0.domain,
      // clientId: environment.auth0.clientId,
      domain: 'dev-dx6e73unwecwen8d.us.auth0.com',
      clientId: 'bPfg8gg4YXoOJ85eAKJjFMTsJb9jlhMg',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
