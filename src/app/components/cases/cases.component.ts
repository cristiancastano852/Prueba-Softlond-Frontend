import { Component, Input, OnInit } from '@angular/core';
import { Case } from '../../modelos/case';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css'],
})
export class CasesComponent {
  casosUsuario: Case[] = [];
  userEmail: string | null | undefined = null;
  user: any;

  @Input() casoEncontrado: Case | undefined;

  constructor(private http: HttpClient, private auth: AuthService) {}

  ngOnInit() {
    this.auth.user$.subscribe((user) => {
      if (user) {
        // El usuario está autenticado, user contiene la información del usuario
        this.userEmail = user.email; // Acceder al email del usuario
        this.http
          .get<{ cases: Case[] }>(
            `http://localhost:4000/cases/user/email/${this.userEmail}`
          )
          .subscribe((casos) => {
            this.casosUsuario = casos.cases;
          });
      }
    });
  }
}
