// import { Injectable } from '@angular/core';
// import { CanActivate } from '@angular/router';
// import { AuthService } from '@auth0/auth0-angular';
// import { Observable } from 'rxjs'; // Importa Observable desde rxjs

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
//   constructor(private auth: AuthService) {}

//   canActivate(): Observable<boolean> {
//     // Utiliza el operador map para transformar el Observable en un booleano
//     return this.auth.isAuthenticated$.pipe(
//       map((isAuthenticated) => {
//         if (isAuthenticated) {
//           return true; // Permitir acceso si está autenticado
//         } else {
//           // Redirigir al inicio de sesión o manejar de otra manera si no está autenticado
//           // Puedes redirigir o mostrar un mensaje de error aquí
//           return false;
//         }
//       })
//     );
//   }
// }
