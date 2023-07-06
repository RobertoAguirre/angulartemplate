import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  constructor(private router:Router){

  }


  productos = [
    {'id':1,'nombre_producto':'producto prueba 1', 'cantidad':100},
    {'id':2,'nombre_producto':'producto prueba 2', 'cantidad':200},
    {'id':3,'nombre_producto':'producto prueba 3', 'cantidad':300},
    {'id':4,'nombre_producto':'producto prueba 4', 'cantidad':400},
    {'id':5,'nombre_producto':'producto prueba 5', 'cantidad':500},
  ];

  seleccionarProducto(producto){
    this.router.navigate(['/detalle', JSON.stringify(producto)]);
  }
}
