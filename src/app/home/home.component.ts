import { Component, Sanitizer } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { DomSanitizer,SafeUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //quitar y poner los tipos
  nombre:string;
  numero:number;



  mensaje = "mensaje";
  arreglo = [
    {'id':1,'producto':'producto prueba 1', 'cantidad':100},
    {'id':2,'producto':'producto prueba 2', 'cantidad':200},
    {'id':3,'producto':'producto prueba 3', 'cantidad':300},
    {'id':4,'producto':'producto prueba 4', 'cantidad':400},
    {'id':5,'producto':'producto prueba 5', 'cantidad':500},
  ];

  pokemones = [];
  pokemon;
  infopokemon;
  tipos = [];

  constructor(private router:Router, 
              private http:HttpClient,
              private poke:PokemonService,
              private sanitizer:DomSanitizer,
              ){
    // this.numero = "UNO";
    // this.nombre = 2;
    
  }

  irALista(){
    this.router.navigate(['lista']);
  }

  traerUno(){
    this.poke.traepokemon(this.pokemon).subscribe((response)=>{
      let _response;
      _response = response;
      this.infopokemon = _response;
      this.tipos = this.infopokemon.types;
    })
  }

  downloadAndOpenPdf() {
    //const pdfUrl = 'https://example.com/path/to/your/pdf.pdf'; // Replace with your PDF URL
    const pdfUrl = 'https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf';

    this.http.get(pdfUrl, { responseType: 'arraybuffer' }).subscribe((response: ArrayBuffer) => {
      const blob = new Blob([response], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const sanitizedUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
      window.open(sanitizedUrl.toString(), '_blank');
    });
  }

}
