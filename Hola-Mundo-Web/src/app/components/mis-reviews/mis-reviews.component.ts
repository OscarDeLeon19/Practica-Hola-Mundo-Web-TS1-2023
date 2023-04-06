import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Review, User } from 'src/app/interfaces/Interfaces';
import { MaizServiceService } from 'src/app/services/maiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mis-reviews',
  templateUrl: './mis-reviews.component.html',
  styleUrls: ['./mis-reviews.component.css']
})
export class MisReviewsComponent implements OnInit {

  //Usuario de la aplicacion
  usuario: User | undefined;
  // Reviews de la pagina
  reviews: Review[] = [];

  /**
   * Constructor de la clase
   * @param fb Creador de formularios
   * @param maizService Servicio de la aplicacion
   * @param router Propiedad que maneja las rutas
   */
  constructor(private fb: FormBuilder, private maizService: MaizServiceService, private router: Router) { }

  /**
   * Obtiene el usuario del LocalStorage
   */
  ngOnInit(): void {
    let user = localStorage.getItem("user");
    if (!user) {
      this.router.navigate(["/login"]);
    } else {
      this.usuario = JSON.parse(user);
      this.obtenerReviews(this.usuario?.idUsuario);
    }
  }

  /**
   * Obtiene las reviews llamando al servicio
   * El resultado de la peticion se muestra en pantalla.
   * @param idUsuario El id del usuario
   */
  obtenerReviews(idUsuario: any) {
    this.maizService.verReviewsPorId(idUsuario)
      .subscribe((resultados: Review[]) => {
        this.reviews = resultados;
      });
  }

  /**
   * Guarda una review en el LocalStorage
   * Navega a la pagina para modificar una review
   * @param index El index de la review
   */
  modificar(index: number) {
    let review = this.reviews[index];
    let jsonReview = JSON.stringify(review);
    localStorage.setItem("review", jsonReview);
    this.router.navigate(['/modificarReview'])
  }

  /**
   * Obtiene una review del arreglo
   * Comprueba si se quiere eliminar la review
   * Llama al servicio para eliminar una review
   * @param index El index de la review
   */
  eliminar(index: number) {
    let review = this.reviews[index];
    Swal.fire({
      title: '¿Quieres eliminar esta review?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `No eliminar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.maizService.eliminarReviews(review.idReview)
          .subscribe((resultado: any) => {
            Swal.fire('Review eliminada', '', 'success');
            this.obtenerReviews(this.usuario?.idUsuario);
          });
      } else if (result.isDenied) {
        Swal.fire('La review no fue eliminada', '', 'info')
      }
    })
  }

}
