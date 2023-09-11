import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Case, CaseType } from '../../modelos/case';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutenticationService } from '../../services/autentication.service';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private autenticationService: AutenticationService
  ) {}
  usuarioAutenticado: any;
  DatosUser: any;
  user: any;
  user1: any;
  case: Case = new Case();
  caseTypes = Object.values(CaseType);
  ticketNumber: string = '';
  userName: string = '';
  asesorId: string = '';

  ngOnInit(): void {
    this.auth.user$.subscribe((user) => {
      this.usuarioAutenticado = user;
    });
    // this.autenticationService.getUser().subscribe((data: any) => {
    //   console.log('Datos del usuario creadoAAAA:', data);
    // });
  }

  async onSubmit() {
    try {
      console.log('Iniciando sesioaaan');
      this.auth.user$.subscribe(async (user) => {
        this.usuarioAutenticado = user;
        this.DatosUser = {
          name: this.usuarioAutenticado.name,
          email: this.usuarioAutenticado.email,
        };
        this.user = await this.http
          .post('http://localhost:4000/users', this.DatosUser)
          .toPromise();
        this.case.authorId = this.user.user.id;
        this.userName = this.user.user.name;
        const data: any = await this.createCase(this.case).toPromise();
        this.ticketNumber = data.case_.ticket;
        this.asesorId = data.case_.authorId;
      });
    } catch (error) {
      console.log('Error:', error);
    }
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
