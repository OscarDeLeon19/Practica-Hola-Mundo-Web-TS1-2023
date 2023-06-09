import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/Interfaces';
import { MaizServiceService } from 'src/app/services/maiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  // Formulario para ingresar los datos requeridos
  miFormulario: FormGroup = this.fb.group({
    nombre: ["", [Validators.required, Validators.maxLength(50)]],
    correo: ["", [Validators.required, Validators.maxLength(100), Validators.email]],
    username: ["", [Validators.required]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    confirm: ["", [Validators.required, Validators.minLength(6),]]
  })

  /**
   * Constructor de la clase
   * @param fb Creador de formularios
   * @param maizService Servicio de la aplicacion
   * @param router Propiedad que maneja rutas
   */
  constructor(private fb: FormBuilder, private maizService: MaizServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Comprueba si un campo tiene errores
   * @param campo El campo del formulario
   * @returns Si hay errores en el campo
   */
  campoValido(campo: string) {
    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched
  }

  /**
   * Metodo que comprueba si los campos de contraseña son iguales
   * @returns Si los campos son iguales
   */
  confirmarPassword() {
    return !(this.miFormulario.value.password === this.miFormulario.value.confirm)
  }

  /**
   * Obtiene las variables de los campos y llama al servicio para guardar un usuario
   * @returns 
   */
  guardar() {
    if (this.miFormulario.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: "No has llenado bien todos los campos",
      });
      this.miFormulario.markAllAsTouched();
      return;
    } else {
      let nombre = this.miFormulario.value.nombre;
      let correo = this.miFormulario.value.correo;
      let username = this.miFormulario.value.username;
      let pass = this.miFormulario.value.password;
      let confirm = this.miFormulario.value.confirm;

      if (confirm === pass) {
        let user: User = {
          idUsuario: 0,
          nombre,
          correo,
          username,
          password: confirm
        }
        this.maizService.comprobarUsuario(username)
          .subscribe((result) => {
            if (result == false) {
              this.maizService.guardarUsuario(user)
                .subscribe((result: any) => {
                  if (result.resultado == true) {
                    this.miFormulario.reset();
                    Swal.fire({
                      icon: 'success',
                      title: 'Exito',
                      text: 'Tu usuario ha sido creado',
                    });
                    this.router.navigate(["/login"]);
                  } else {
                    Swal.fire({
                      icon: 'error',
                      title: 'Error',
                      text: result.error,
                    });
                  }
                });

            } else {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El username esta repetido. Prueba con otro',
              })
            }
          });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Las contraseñas no coinciden',
        })
      }
    }
  }
}
