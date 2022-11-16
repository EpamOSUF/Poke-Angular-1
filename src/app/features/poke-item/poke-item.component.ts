import { Component,Input, OnInit } from '@angular/core';
import { pokeInterface } from 'src/app/shared/interfaces/poke.interface';

@Component({
  selector: 'app-poke-item',
  templateUrl: './poke-item.component.html',
  styleUrls: ['./poke-item.component.css']
})
export class PokeItemComponent implements OnInit {
  @Input() pokeSelected = 0;
  @Input() pokemon: pokeInterface = {
    abilities: '',
    base_experience: 0,
    height: 0,
    id: 0,
    is_default: false,
    name: '',
    order: 0,
    past_types: [],
    species: {
      name: ''
    },
    sprites: {
      front_default: ''
    },
    stats: [],
    types: [],
    weight: 0
  };
  constructor() { }

  ngOnInit(): void {
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
