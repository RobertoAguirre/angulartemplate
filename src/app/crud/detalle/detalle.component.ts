import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  producto;


  constructor(private route:ActivatedRoute){
    
  }

  ngOnInit() {
    const data = this.route.snapshot.paramMap.get('data');
    this.producto = JSON.parse(data);
  }

}
