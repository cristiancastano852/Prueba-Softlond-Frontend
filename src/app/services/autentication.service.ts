import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AutenticationService {
  constructor() {}
  private _user: any = {}; // Propiedad privada

  getUser(): any {
    return this._user; // Getter
  }

  setUser(value: any) {
    this._user = value; // Setter
  }
}
