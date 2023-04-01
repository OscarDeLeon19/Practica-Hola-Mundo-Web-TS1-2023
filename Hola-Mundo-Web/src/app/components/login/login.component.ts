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

  miFormulario: FormGroup = this.fb.group({
    username: ["", [Validators.required]],
    password: ["", [Validators.required]]
  })

  constructor(private fb: FormBuilder, private maizService: MaizServiceService, private router:Router) { }

  ngOnInit(): void {
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
