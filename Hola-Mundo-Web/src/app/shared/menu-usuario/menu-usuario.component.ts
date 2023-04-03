import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/Interfaces';

@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.css']
})
export class MenuUsuarioComponent implements OnInit {

  usuario: User | undefined;
  constructor(private router: Router) { }

  ngOnInit(): void {
    let user = localStorage.getItem("user");
    if (!user) {
      this.router.navigate(["/login"]);
    } else {
      this.usuario = JSON.parse(user);
    }
  }

  salir() {
    localStorage.removeItem("user");
    this.router.navigate(["/login"]);
  }

  modificar() {
    this.router.navigate(["/updateUser"]);
  }

}
