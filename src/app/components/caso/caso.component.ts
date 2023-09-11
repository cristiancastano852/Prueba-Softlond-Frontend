import { Component } from '@angular/core';
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
      this.http
        .get(`http://localhost:4000/cases/ticket/${this.ticket}`)
        .subscribe((data: any) => {
          this.casoEncontrado = data.case_;
        });
    }
  }
}
