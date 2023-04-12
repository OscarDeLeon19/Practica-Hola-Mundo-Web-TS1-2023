/**
 * Interfaz del usuario
 */
export interface User {
  idUsuario: number
  nombre: string;
  correo: string;
  username: string;
  password: string
}

/**
 * Interfaz de una review
 */
export interface Review {
  idReview: number
  idUsuario: string;
  titulo: string;
  texto: string;
  fecha: string;
}
/**
 * Interfaz de una Puntuacion
 */
export interface Puntuacion {
  idPuntuacion: number
  idUsuario: string;
  puntos: number;
  fecha: string;
}