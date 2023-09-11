import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { AutenticationService } from '../../services/autentication.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    public auth: AuthService,
    private router: Router,
    private http: HttpClient,
    private autenticationService: AutenticationService
  ) {}
  usuarioAutenticado: any;
  DatosUser: any;
  user: any;
  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      console.log('Estado de autenticación:', isAuthenticated);
      this.isAuth = isAuthenticated;
      if (isAuthenticated) {
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['']);
      }
    });
  }

  isAuth: boolean = false;

  login(): void {
    this.auth.loginWithRedirect(); // Redirigir al inicio de sesión de Auth0
  }

  logout(): void {
    console.log('Cerrando sesión');
    this.auth.logout({ logoutParams: { returnTo: document.location.origin } }); // Cerrar sesión de Auth0
  }
}
