export interface User {
  idUsuario: number
  nombre: string;
  correo: string;
  username: string;
  password: string
}

export interface Review {
  idReview: number
  idUsuario: string;
  titulo: string;
  texto: string;
  fecha: string;
}