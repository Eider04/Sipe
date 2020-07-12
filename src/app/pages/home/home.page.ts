import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public modulos = [
    {
      id: 1,
      descripcion: 'Usuarios',
      icon: 'person-outline'
    },
    {
      id: 2,
      descripcion: 'Usuarios',
      icon: 'person-outline'
    },
    {
      id: 3,
      descripcion: 'Usuarios',
      icon: 'person-outline'
    },
    {
      id: 4,
      descripcion: 'Usuarios',
      icon: 'person-outline'
    },
    {
      id: 5,
      descripcion: 'Usuarios',
      icon: 'person-outline'
    },
    {
      id: 6,
      descripcion: 'Usuarios',
      icon: 'person-outline'
    },
    {
      id: 7,
      descripcion: 'Usuarios',
      icon: 'person-outline'
    },
    {
      id: 8,
      descripcion: 'Usuarios',
      icon: 'person-outline'
    }

  ]

  constructor( private route: Router ) {
  }



  public cargarModulo(item: any): void {
    this.route.navigateByUrl('usuarios');
  }

  public salir(): void{
      this.route.navigateByUrl('login');
  }
  ngOnInit() {

  }


}
