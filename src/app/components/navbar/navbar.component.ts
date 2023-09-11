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
        this.router.navigate(['/crear-caso']);
      } else {
        this.router.navigate(['']);
      }
    });
    // console.log('Iniciando sesion');
    // this.auth.user$.subscribe((user) => {
    //   this.usuarioAutenticado = user;
    //   this.DatosUser = {
    //     name: this.usuarioAutenticado.name,
    //     email: this.usuarioAutenticado.email,
    //   };
    //   // console.log('Datos del usuario autenticado:', this.usuarioAutenticado);
    //   this.user = this.http
    //     .post('http://localhost:4000/users', this.DatosUser)
    //     .subscribe((data) => {
    //       // console.log('Datos del usuario creadoAAA:', data);
    //       this.user = data;
    //     });
    //   this.autenticationService.setUser(this.user);
    // console.log('Datos del usuario creado:', this.user);
    // });
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
