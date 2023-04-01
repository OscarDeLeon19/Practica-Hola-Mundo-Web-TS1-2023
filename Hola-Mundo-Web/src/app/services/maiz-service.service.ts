import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class MaizServiceService {
  baseUrl: string = "http://localhost/Backend-Practica-TS1";

  constructor(private http: HttpClient) { }

  obtenerUsuario(username: string, password: string) {
    this.http.get(`${this.baseUrl}/obtenerUsuario.php?username=${username}&pass=${password}`)
      .subscribe((user: any) => {
        if (user == false) {
          console.log("Error");
        } else {
          let p: User = user;
          console.log(p.nombre);
        }
      });
  }
}
