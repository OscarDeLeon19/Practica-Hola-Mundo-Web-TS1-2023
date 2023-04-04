import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Review } from 'src/app/interfaces/Interfaces';
import { MaizServiceService } from 'src/app/services/maiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-review',
  templateUrl: './modificar-review.component.html',
  styleUrls: ['./modificar-review.component.css']
})
export class ModificarReviewComponent implements OnInit {

  review?: Review;

  miFormulario: FormGroup = this.fb.group({
    titulo: ["", [Validators.required]],
    texto: ["", [Validators.required]]
  })
  constructor(private fb: FormBuilder, private maizService: MaizServiceService, private router: Router) { }

  ngOnInit(): void {
    let review = localStorage.getItem("review");
    if (!review) {
      this.router.navigate(["/misReviews"]);
    } else {
      this.review = JSON.parse(review);
      this.miFormulario.setValue({ titulo: this.review?.titulo, texto: this.review?.texto });
    }
  }

  campoValido(campo: string) {
    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    } else {
      let titulo = this.miFormulario.value.titulo;
      let texto = this.miFormulario.value.texto;
      let body = {
        titulo,
        texto,
        idReview: this.review?.idReview
      }
      this.maizService.modificarReview(body)
        .subscribe((resultado: any) => {
          if (resultado.resultado == true) {
            Swal.fire({
              icon: 'success',
              title: 'Exito',
              text: 'La review fue modificada'
            });
            this.miFormulario.reset();
            localStorage.removeItem("review");
            this.router.navigate(['/misReviews'])
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: resultado.error
            });
          }
        });
    }
  }

  regresar() {
    this.router.navigate(['/misReviews'])
  }

}
