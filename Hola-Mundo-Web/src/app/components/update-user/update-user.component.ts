import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/Interfaces';
import { MaizServiceService } from 'src/app/services/maiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  // Usuario que se modificara
  usuario?: User;

  // Formulario de la aplicacion
  miFormulario: FormGroup = this.fb.group({
    nombre: ["", [Validators.required, Validators.maxLength(50)]],
    correo: ["", [Validators.required, Validators.maxLength(100), Validators.email]]
  })

  /**
   * Constructor de la clase
   * @param fb Creador de formularios
   * @param maizService Servicio de la aplicacion
   * @param router Propiedad que maneja las rutas
   */
  constructor(private fb: FormBuilder, private maizService: MaizServiceService, private router: Router,) {

  }

  /**
   * Obtiene el usuario del LocalStorage
   */
  ngOnInit(): void {
    let user = localStorage.getItem("user");
    if (!user) {
      this.router.navigate(["/login"]);
    } else {
      this.usuario = JSON.parse(user);
      this.miFormulario.setValue({ nombre: this.usuario?.nombre, correo: this.usuario?.correo });
    }
  }

  /**
   * Comprueba si un campo tiene errores
   * @param campo El campo del formulario
   * @returns Si hay errores
   */
  campoValido(campo: string) {
    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched
  }

  /**
   * Obtiene los datos del formulario.
   * Llama al servicio para modificar un usuario
   * @returns 
   */
  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    } else {
      let nombre = this.miFormulario.value.nombre;
      let correo = this.miFormulario.value.correo;
      this.usuario!.nombre = nombre;
      this.usuario!.correo = correo;
      this.maizService.actualizarUsuario({
        nombre,
        correo,
        id: this.usuario?.idUsuario
      }).subscribe((result: any) => {
        if (result.resultado == true) {
          Swal.fire({
            icon: 'success',
            title: 'Exito',
            text: 'Los datos han sido modificados'
          });
          let jsonUser = JSON.stringify(this.usuario);
          localStorage.setItem("user", jsonUser);
          this.router.navigate(["/actividad"]);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se modificaron los datos: ' + result.error
          });
        }
      });
    }
  }

  /**
   * Regresa a la pagina de actividad
   */
  salir(){
    this.router.navigate(["/actividad"]);
  }

}
