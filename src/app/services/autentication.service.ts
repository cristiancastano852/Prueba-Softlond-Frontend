import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AutenticationService {
  constructor() {}
  private _user: any = {};

  getUser(): any {
    return this._user;
  }

  setUser(value: any) {
    this._user = value;
  }
}
