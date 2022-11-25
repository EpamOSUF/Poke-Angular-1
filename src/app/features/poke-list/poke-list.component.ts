import { Component, OnInit } from '@angular/core';

const mockPokeData = require('../../../assets/mockData/mockPokeData.json');

import { PokeService } from 'src/app/shared/services/poke.service';
import { pokeInterface } from 'src/app/shared/interfaces/poke.interface';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})

export class PokeListComponent implements OnInit {
  POKES_PAGE_COUNT = 10;
  pokeSelected = 0;
  pokeData: pokeInterface[] = [];

  constructor(private pokeService: PokeService) { }

  ngOnInit(): void {
    this.getPokeData();
    this.pokeData = this.pokeData.sort(poke => poke.id);
  }

  getPokeData = () => {

  for (let iterator = 0; iterator < 10; iterator++) {
      this.pokeService.getPokemonDetails(iterator).subscribe(poke => {
        this.pokeData.push(poke)
      });
  }
  }
  handleDetailsPoke(idPoke: number) {
    this.pokeSelected = idPoke;
  }

}
