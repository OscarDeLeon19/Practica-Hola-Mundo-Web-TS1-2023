import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MaizServiceService } from 'src/app/services/maiz-service.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Formulario del grupo
  miFormulario: FormGroup = this.fb.group({
    username: ["", [Validators.required]],
    password: ["", [Validators.required]]
  })

  /**
   * Constructor de la clase
   * @param fb Creador de formularios
   * @param maizService Servicio de la aplicacion
   * @param router Propiedad que maneja las rutas
   */
  constructor(private fb: FormBuilder, private maizService: MaizServiceService, private router:Router) { }

  ngOnInit(): void {
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
   * Obtiene los datos del formulario y llama al servicio para obtener un usuario.
   * Si encuentra un usuario, lo guarda en el LocalStorage
   * @returns 
   */
  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    } else {
      let username = this.miFormulario.value.username;
      let pass = this.miFormulario.value.password;
      this.miFormulario.reset();
      this.maizService.obtenerUsuario(username, pass)
        .subscribe((user) => {
          if (user == false) {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Usuario o contraseña incorrecta'
            })
          } else {
            let jsonUser = JSON.stringify(user);
            localStorage.setItem("user", jsonUser);
            this.router.navigate(["/actividad"]);
          }
        });
    }
  }

}
