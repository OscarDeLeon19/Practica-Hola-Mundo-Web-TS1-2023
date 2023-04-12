import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Puntuacion, Review, User } from '../interfaces/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class MaizServiceService {
  // La base del url para realizar peticiones
  baseUrl: string = "http://localhost/Backend-Practica-TS1";

  /**
   * Constructor del servicio
   * @param http Propiedad para hacer peticiones http
   */
  constructor(private http: HttpClient) { }

  /**
   * Hace una peticion para obtener un usuario
   * @param username El username del usuario
   * @param password La contraseña del usuario
   * @returns El observable de la peticion
   */
  obtenerUsuario(username: string, password: string) {
    return this.http.get(`${this.baseUrl}/obtenerUsuario.php?username=${username}&pass=${password}`);
  }

  /**
   * Comprueba si un usuario realizando una peticion
   * @param username El username del usuario
   * @returns El observable de la peticion
   */
  comprobarUsuario(username: string) {
    return this.http.get(`${this.baseUrl}/comprobarUsuario.php?username=${username}`);
  }

  /**
   * Llama a la peticion para guardar un usuario
   * @param user La informacion del usuario
   * @returns El observable de la peticion
   */
  guardarUsuario(user: User) {
    return this.http.post(`${this.baseUrl}/agregarUsuario.php`, user);
  }

  /**
   * Llama a la peticion para modificar un usuario
   * @param user La informacion del usuario
   * @returns El observable de la peticion
   */
  actualizarUsuario(user: any) {
    return this.http.put(`${this.baseUrl}/actualizarUsuario.php`, user);
  }

  /**
   * Llama a la peticion para obtener los reviews
   * @returns El observable con la informacion de los reviews
   */
  verReviews() {
    return this.http.get<Review[]>(`${this.baseUrl}/verReviews.php`);
  }

  /**
   * Llama a la peticion para obtener los reviews de un usuario
   * @param idUsuaio El id del usuario
   * @returns El observable de la peticion
   */
  verReviewsPorId(idUsuaio: any) {
    return this.http.get<Review[]>(`${this.baseUrl}/verReviewsPorId.php?idUsuario=${idUsuaio}`);
  }

  /**
   * Llama la peticion para agregar una review a la base de datos
   * @param review La informacion de la review
   * @returns El observable de la peticion
   */
  agregarReview(review: any) {
    return this.http.post(`${this.baseUrl}/agregarReview.php`, review);
  }
  
  /**
   * Llama la peticion para eliminar una review
   * @param idReview El id de la review
   * @returns El observable de la peticion
   */
  eliminarReviews(idReview: any) {
    return this.http.delete(`${this.baseUrl}/eliminarReview.php?idReview=${idReview}`);
  }

  /**
   * Llama la peticion para modificar una review
   * @param review La informacion de la review
   * @returns El observable de la peticion
   */
  modificarReview(review: any) {
    return this.http.put(`${this.baseUrl}/modificarReview.php`, review);
  }

  verPuntuaciones(idUsuaio: any) {
    return this.http.get<Puntuacion[]>(`${this.baseUrl}/verPuntuaciones.php?idUsuario=${idUsuaio}`);
  }

  agregarPuntuacion(puntuacion: any) {
    return this.http.post(`${this.baseUrl}/agregarPuntuacion.php`, puntuacion);
  }
}
