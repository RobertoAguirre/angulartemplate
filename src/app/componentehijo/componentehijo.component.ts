import { Component,Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-componentehijo',
  templateUrl: './componentehijo.component.html',
  styleUrls: ['./componentehijo.component.css']
})
export class ComponentehijoComponent {
  @Input() data;
  @Output() dataToParent  = new EventEmitter();

  sendDataToParent(){
    const data = 'Mensaje desde el componente hijo';
    this.dataToParent.emit(data);
  }
}
