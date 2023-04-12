import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Puntuacion, User } from 'src/app/interfaces/Interfaces';
import { MaizServiceService } from 'src/app/services/maiz-service.service';

@Component({
  selector: 'app-tabla-puntuacion',
  templateUrl: './tabla-puntuacion.component.html',
  styleUrls: ['./tabla-puntuacion.component.css']
})
export class TablaPuntuacionComponent implements OnInit {

  // El usuario de la aplicacion
  usuario: User | undefined;

  puntuaciones:Puntuacion[] = []
  
  constructor(private router: Router, private maizService: MaizServiceService) { }

  ngOnInit(): void {
    let user = localStorage.getItem("user");
    if (!user) {
      this.router.navigate(["/login"]);
    } else {
      this.usuario = JSON.parse(user);
      this.obtenerPuntuaciones(this.usuario?.idUsuario);
    }
  }

  obtenerPuntuaciones(idUsuario: any){
    this.maizService.verPuntuaciones(idUsuario)
      .subscribe((resultados: Puntuacion[]) => {
        this.puntuaciones = resultados;
      });
  }

}
