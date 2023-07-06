import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url="https://pokeapi.co/api/v2/";

  constructor(private http:HttpClient) { }

  public traepokemon(pokemon) {
    return this.http.get(`${this.url}pokemon/${pokemon}`);
  }
}
