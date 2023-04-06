import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Review, User } from 'src/app/interfaces/Interfaces';
import { MaizServiceService } from 'src/app/services/maiz-service.service';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {

  // Usuario de la aplicacion
  usuario: User | undefined;

  // Reviews de la aplicacion
  reviews: Review[] = [];

  constructor(private router: Router, private maizService: MaizServiceService) { }

  /**
   * Obtiene el usuario del LocalStorage
   */
  ngOnInit(): void {
    let user = localStorage.getItem("user");
    if (!user) {
      this.router.navigate(["/login"]);
    } else {
      this.usuario = JSON.parse(user);
      this.maizService.comprobarUsuario(this.usuario!.username)
        .subscribe((resultado: any) => {
          if (resultado == false) {

            localStorage.clear();
            this.router.navigate(['/login'])
          } else {
            this.verReviews();
          }
        });
    }
  }

  /**
   * Obtiene las reviews del servicio de la aplicacion
   */
  verReviews() {
    this.maizService.verReviews()
      .subscribe((valores: Review[]) => {
        this.reviews = valores;
      })
  }

  /**
   * Elimina el usuario de la aplicacion
   */
  salir() {
    localStorage.removeItem("user");
    this.router.navigate(["/login"]);
  }

  /**
   * Navega a la ventana de actualizar usuario
   */
  modificar() {
    this.router.navigate(["/updateUser"]);
  }
}
