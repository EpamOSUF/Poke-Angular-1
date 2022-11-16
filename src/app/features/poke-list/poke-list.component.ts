import { Component, OnInit } from '@angular/core';

const mockPokeData = require('../../../assets/mockData/mockPokeData.json')

import { pokeInterface } from 'src/app/shared/interfaces/poke.interface';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})

export class PokeListComponent implements OnInit {
  pokeSelected = 0;
  pokeData: pokeInterface[] = [];

  constructor() { }

  ngOnInit(): void {
    this.pokeData = mockPokeData;
  }

  handleDetailsPoke(idPoke: number) {
    this.pokeSelected = idPoke;
  }

}
