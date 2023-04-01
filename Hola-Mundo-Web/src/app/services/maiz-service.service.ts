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
    return this.http.get(`${this.baseUrl}/obtenerUsuario.php?username=${username}&pass=${password}`);
  }
}