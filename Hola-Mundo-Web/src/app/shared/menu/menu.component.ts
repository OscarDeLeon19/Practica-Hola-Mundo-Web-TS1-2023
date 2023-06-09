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

  // Arrego de rutas y nombres para el indice
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
    },
    {
      nombre: "Actividad",
      ruta: '/actividad'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
