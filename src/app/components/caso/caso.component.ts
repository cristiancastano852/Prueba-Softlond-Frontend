import { Component } from '@angular/core';
import { Case, CaseStatus, CaseType } from '../../modelos/case';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-caso',
  templateUrl: './caso.component.html',
  styleUrls: ['./caso.component.css'],
})
export class CasoComponent {
  ticket: string = '';
  casoEncontrado: any;

  constructor(private http: HttpClient) {}

  buscarCaso() {
    if (this.ticket) {
      // Realizar la solicitud GET a la API
      this.http
        .get(`http://localhost:4000/cases/ticket/${this.ticket}`)
        .subscribe((data: any) => {
          // Al recibir la respuesta, asignarla a la variable casoEncontrado
          this.casoEncontrado = data.case_;
          console.log('Caso encontrado:', this.casoEncontrado);
        });
    }
  }
}
