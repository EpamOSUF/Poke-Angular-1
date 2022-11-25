import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { pokeInterface } from '../interfaces/poke.interface';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private http: HttpClient) { }

  getPokemonDetails(pokeId: number): Observable<pokeInterface> {
    return this.http.get<pokeInterface>(environment.pokemonApi + 'pokemon/' + pokeId);
  }
}


