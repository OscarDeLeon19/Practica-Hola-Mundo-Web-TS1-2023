import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/interfaces/Interfaces';
import { MaizServiceService } from 'src/app/services/maiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-review',
  templateUrl: './agregar-review.component.html',
  styleUrls: ['./agregar-review.component.css']
})
export class AgregarReviewComponent implements OnInit {

  // Variable del usuario de la aplicacion
  usuario: User | undefined;
  
  // Formulario para ingresar datos
  miFormulario: FormGroup = this.fb.group({
    titulo: ["", [Validators.required, Validators.maxLength(50)]],
    texto: ["", [Validators.required]]
  })

  /**
   * 
   * @param fb Creador de formularis
   * @param maizService Servicio de la aplicacion
   * @param router Realiza acciones con los enlaces
   */
  constructor(private fb: FormBuilder, private maizService: MaizServiceService, private router: Router) { }

  /**
   * Metodo ngOnInit
   * Obtiene el usuario del localStorage
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
   * Comprueba que un campo sea valido
   * @param campo El campo del formualrio
   * @returns Si hay errores en el campo
   */
  campoValido(campo: string) {
    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched
  }

  /**
   * Guarda la informacion de la review llamando al sevicio
   * Si es invalido marca todos los campos
   * @returns 
   */
  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    } else {
      let titulo = this.miFormulario.value.titulo;
      let texto = this.miFormulario.value.texto;
      let objReview = {
        idUsuario: this.usuario?.idUsuario,
        titulo,
        texto
      }
      this.maizService.agregarReview(objReview)
        .subscribe((resultado: any) => {
          if (resultado.resultado == true) {
            Swal.fire({
              icon: 'success',
              title: 'Exito',
              text: 'Tu review se guardo con exito'
            })
            this.miFormulario.reset();
            this.router.navigate(['/actividad']);
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: resultado.error
            })
          }
        });
    }
  }

  /**
   * Regresa a la pagina de actividad
   */
  volver() {
    this.router.navigate(['/actividad']);
  }
}
