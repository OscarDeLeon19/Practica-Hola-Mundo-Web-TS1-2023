import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaizServiceService } from 'src/app/services/maiz-service.service';

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

  constructor(private fb:FormBuilder, private maizService: MaizServiceService) { }

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
      this.maizService.obtenerUsuario(username, pass);
    }
  }

}
