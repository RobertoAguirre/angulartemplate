import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-componentepadre',
  templateUrl: './componentepadre.component.html',
  styleUrls: ['./componentepadre.component.css']
})
export class ComponentepadreComponent {
  hijoData;
  padreData="mensaje desde el componente padre";

  receiveDataFromChild(data){
    this.hijoData = data;
  }
  

}
