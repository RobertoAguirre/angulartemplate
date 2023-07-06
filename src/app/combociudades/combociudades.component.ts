import { Component } from '@angular/core';

@Component({
  selector: 'app-combociudades',
  templateUrl: './combociudades.component.html',
  styleUrls: ['./combociudades.component.css']
})
export class CombociudadesComponent {
  ciudades = [
    {'id':1,'ciudad':'cuu'},
    {'id':2,'ciudad':'mty'},
    {'id':3,'ciudad':'ags'},
    {'id':4,'ciudad':'tj'},
    {'id':5,'ciudad':'cdmz'},
  ];
}
