import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Review, User } from 'src/app/interfaces/Interfaces';
import { MaizServiceService } from 'src/app/services/maiz-service.service';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {

  usuario: User | undefined;
  reviews: Review[] = [];

  constructor(private router: Router, private maizService: MaizServiceService) { }

  ngOnInit(): void {
    let user = localStorage.getItem("user");
    if (!user) {
      this.router.navigate(["/login"]);
    } else {
      this.usuario = JSON.parse(user);
      this.verReviews();
    }
  }

  verReviews() {
    this.maizService.verReviews()
      .subscribe((valores:Review[]) => {
        this.reviews = valores;
      })
  }

  salir() {
    localStorage.removeItem("user");
    this.router.navigate(["/login"]);
  }

  modificar() {
    this.router.navigate(["/updateUser"]);
  }
}
