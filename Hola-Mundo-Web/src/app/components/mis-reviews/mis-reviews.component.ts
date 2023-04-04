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

  usuario: User | undefined;
  reviews: Review[] = [];

  constructor(private fb: FormBuilder, private maizService: MaizServiceService, private router: Router) { }

  ngOnInit(): void {
    let user = localStorage.getItem("user");
    if (!user) {
      this.router.navigate(["/login"]);
    } else {
      this.usuario = JSON.parse(user);
      this.obtenerReviews(this.usuario?.idUsuario);
    }
  }

  obtenerReviews(idUsuario: any) {
    this.maizService.verReviewsPorId(idUsuario)
      .subscribe((resultados: Review[]) => {
        this.reviews = resultados;
      });
  }

  modificar(index: number) {
    let review = this.reviews[index];
    let jsonReview = JSON.stringify(review);
    localStorage.setItem("review", jsonReview);
    this.router.navigate(['/modificarReview'])
  }

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
