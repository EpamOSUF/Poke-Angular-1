
interface pokeType{
  slot: number,
  type: { name: string }
}

export interface pokeInterface{
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
