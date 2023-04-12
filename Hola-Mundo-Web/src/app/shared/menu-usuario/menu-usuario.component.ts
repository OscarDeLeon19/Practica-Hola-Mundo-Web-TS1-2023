import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/Interfaces';

@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.css']
})
export class MenuUsuarioComponent implements OnInit {

  // El usuario de la aplicacion
  usuario: User | undefined;

  /**
   * Constructor de la clase
   * @param router Propiedad para navegar entre enlaces
   */
  constructor(private router: Router) { }

  /**
   * Obtiene un usuario del LocalStorage
   */
  ngOnInit(): void {
    let user = localStorage.getItem("user");
    if (!user) {
      this.router.navigate(["/login"]);
    } else {
      this.usuario = JSON.parse(user);
    }
  }

  /**
   * Elimina el usuario del localStorage
   */
  salir() {
    localStorage.removeItem("user");
    this.router.navigate(["/login"]);
  }

  /**
   * Navega a la pagina de actualizar usuario
   */
  modificar() {
    this.router.navigate(["/updateUser"]);
  }

  /**
   * Navega a la pagina de agregar Review
   */
  agregar(){
    this.router.navigate(["/agregarReview"]);
  }

  /**
   * Navega a la pagina de mis reviews
   */
  verMisReviews(){
    this.router.navigate(["/misReviews"]);
  }

  verPreguntas(){
    this.router.navigate(["/preguntas"]);
  }

}
