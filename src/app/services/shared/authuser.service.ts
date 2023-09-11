import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthuserService {
  private userEmailSubject: BehaviorSubject<string | null> =
    new BehaviorSubject<string | null>(null);
  public userEmail$: Observable<string | null> =
    this.userEmailSubject.asObservable();

  constructor() {}

  setUserEmail(email: string | null) {
    this.userEmailSubject.next(email);
  }

  getUserEmail(): string | null {
    return this.userEmailSubject.value;
  }
}
