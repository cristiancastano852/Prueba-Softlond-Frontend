import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Case, CaseType } from '../../modelos/case';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(private http: HttpClient, private auth: AuthService) {}
  usuarioAutenticado: any;
  DatosUser: any;
  user: any;
  user1: any;
  case: Case = new Case();
  caseTypes = Object.values(CaseType);
  ticketNumber: string = '';
  userName: string = '';
  asesorName: string = '';
  asesorId: string = '';
  userEmail: string | null | undefined = null;

  ngOnInit(): void {
    this.auth.user$.subscribe((user) => {
      this.usuarioAutenticado = user;
      this.userName = this.usuarioAutenticado.name;
    });
  }

  async onSubmit() {
    try {
      this.auth.user$
        .pipe(
          switchMap((user) => {
            this.usuarioAutenticado = user;
            this.userEmail = this.usuarioAutenticado.email;
            // BUSCAR EL USUARIO EN LA BASE DE DATOS CON ESE CORREO
            return this.http.get(
              `http://localhost:4000/users/${this.userEmail}`
            );
          }),
          switchMap((user) => {
            this.user = user;
            this.case.authorId = this.user.user.id;
            // CREAR EL CASO
            return this.createCase(this.case);
          }),
          switchMap((data: any) => {
            this.ticketNumber = data.case_.ticket;
            this.asesorId = data.assignee.userId;
            // OBTENER EL NOMBRE DEL ASESOR POR SU ID
            return this.http.get(
              `http://localhost:4000/user/id/${this.asesorId}`
            );
          })
        )
        .subscribe((asesorData: any) => {
          this.asesorName = asesorData.user.name;
        });
    } catch (error) {}
  }

  createCase(data: Case) {
    const dataCase = {
      title: data.title,
      description: data.description,
      type: data.type,
      authorId: data.authorId,
    };
    return this.http.post('http://localhost:4000/cases', dataCase);
  }
}
