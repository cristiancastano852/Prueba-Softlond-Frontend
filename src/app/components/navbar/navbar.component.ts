import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    public auth: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}
  usuarioAutenticado: any;
  DatosUser: any;
  user: any;

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuth = isAuthenticated;
      if (isAuthenticated) {
        this.router.navigate(['/home']);
        this.auth.user$.subscribe(async (user) => {
          this.usuarioAutenticado = user;
          this.DatosUser = {
            name: this.usuarioAutenticado.name,
            email: this.usuarioAutenticado.email,
          };
          this.user = await this.http
            .post('http://localhost:4000/users', this.DatosUser)
            .toPromise();
        });
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
    this.auth.logout({ logoutParams: { returnTo: document.location.origin } }); // Cerrar sesión de Auth0
  }
}
