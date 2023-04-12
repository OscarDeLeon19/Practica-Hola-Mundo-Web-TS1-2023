import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/Interfaces';
import { MaizServiceService } from 'src/app/services/maiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  // Variable del usuario de la aplicacion
  usuario: User | undefined;
  miFormulario: FormGroup = this.fb.group({
    pr1: ["", Validators.required],
    pr2: ["", Validators.required],
    pr3: ["", Validators.required],
    pr4: ["", Validators.required],
    pr5: ["", Validators.required],
    pr6: ["", Validators.required],
    pr7: ["", Validators.required],
    pr8: ["", Validators.required],
    pr9: ["", Validators.required],
    pr10: ["", Validators.required]
  })

  constructor(private fb: FormBuilder, private maizService: MaizServiceService, private router: Router) { }


  ngOnInit(): void {
    let user = localStorage.getItem("user");
    if (!user) {
      this.router.navigate(["/login"]);
    } else {
      this.usuario = JSON.parse(user);
    }
  }

  guardar() {
    if (this.miFormulario.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No has ingresado todas las respuestas: '
      });
    } else {
      const respuetas = ["1", "3", "4", "3", "2", "4", "1", "4", "2", "1"];
      const valores = [this.miFormulario.value.pr1, this.miFormulario.value.pr2, this.miFormulario.value.pr3,
      this.miFormulario.value.pr4, this.miFormulario.value.pr5, this.miFormulario.value.pr6, this.miFormulario.value.pr7,
      this.miFormulario.value.pr8, this.miFormulario.value.pr9, this.miFormulario.value.pr10]
      let punteo = 0;
      for (let index = 0; index < respuetas.length; index++) {
        if(valores[index] == respuetas[index]){
          punteo++;
        }
      }
      Swal.fire({
        icon: 'success',
        title: 'Exito',
        text: `Gracias por responder \n Tu puntuacion es de ${punteo}/10`
      });
      let puntuacion = {
        idUsuario: this.usuario?.idUsuario,
        puntos: punteo
      }
      this.maizService.agregarPuntuacion(puntuacion)
        .subscribe(result=> console.log(result));
      console.log(puntuacion);
      this.router.navigate(['/tablaPuntuacion']);
    }
  }
}
