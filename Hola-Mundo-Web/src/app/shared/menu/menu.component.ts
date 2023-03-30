import { Component, OnInit } from '@angular/core';

interface Ruta{
  nombre: string,
  ruta: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rutas: Ruta[] = [
    {
      nombre: "Inicio",
      ruta: ''
    },
    {
      nombre: "Maiz en Guatemala",
      ruta: '/maizGuatemala'
    },
    {
      nombre: "Valor cultural",
      ruta: '/culturaMaiz'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
