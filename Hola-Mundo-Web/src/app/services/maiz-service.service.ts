import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review, User } from '../interfaces/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class MaizServiceService {
  baseUrl: string = "http://localhost/Backend-Practica-TS1";

  constructor(private http: HttpClient) { }

  obtenerUsuario(username: string, password: string) {
    return this.http.get(`${this.baseUrl}/obtenerUsuario.php?username=${username}&pass=${password}`);
  }

  comprobarUsuario(username: string) {
    return this.http.get(`${this.baseUrl}/comprobarUsuario.php?username=${username}`);
  }

  guardarUsuario(user: User) {
    return this.http.post(`${this.baseUrl}/agregarUsuario.php`, user);
  }

  actualizarUsuario(user: any) {
    return this.http.put(`${this.baseUrl}/actualizarUsuario.php`, user);
  }

  verReviews(){
    return this.http.get<Review[]>(`${this.baseUrl}/verReviews.php`);
  }
}
