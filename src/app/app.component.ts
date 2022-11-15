import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
const mockPokeData = require('../assets/mockData/mockPokeData.json')

interface pokeType{
  slot: number,
  type: { name: string }
}

interface pokeInterface{
  abilities: string;
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  name: string;
  order: number;
  past_types: [];
  species: { name: string };
  sprites: { front_default: string };
  stats: any[];
  types: pokeType[]
  weight: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poke-app';

  pokeData: pokeInterface[] = [];
  pokeSelected: number = 0;

  constructor() { }

  ngOnInit() {
    this.pokeData = mockPokeData;
  }

  handleDetailsPoke(idPoke: number) {
    this.pokeSelected = idPoke;
  }

  handleBGColor(type: string): string {
    switch (type) {
      case 'grass':
        return 'bgc-green';
      case 'poison':
        return 'bgc-purple';
      case 'fire':
        return 'bgc-red';
      case 'water':
        return 'bgc-aqua';
      case 'bug':
        return 'bgc-green-light';
      case 'normal':
        return 'bgc-gray';
      case 'electric':
        return 'bgc-yellow';
      case 'rock':
        return 'bgc-brown';
      default:
        return 'bgc-default'
    }
  }
}
