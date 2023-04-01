import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/Interfaces';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {

  usuario:User | undefined;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    let user = localStorage.getItem("user");
    if (!user) {
      this.router.navigate(["/login"]);
    } else {
      this.usuario  = JSON.parse(user);
      console.log(this.usuario);
    }
  }

  salir(){
    console.log('g');
    localStorage.removeItem("user");
    this.router.navigate(["/login"]);
  }

}