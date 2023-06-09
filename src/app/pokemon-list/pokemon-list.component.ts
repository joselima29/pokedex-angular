import { Component } from '@angular/core';
import { Pokemon } from '../../_model/Pokemon';
import { Type } from '../../_model/Type';
import { PokemonService } from '../../_services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent {
  /*public pokemons: Pokemon[] = [
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
      number: 1,
      name: 'Bulbassaur',
      types: [
        Type.Grass,
        Type.Poison
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
      number: 2,
      name: 'Ivysaur',
      types: [
        Type.Grass,
        Type.Poison
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
      number: 3,
      name: 'Venusaur',
      types: [
        Type.Grass,
        Type.Poison
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
      number: 4,
      name: 'Charmander',
      types: [
        Type.Fire,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png',
      number: 5,
      name: 'Charmeleon',
      types: [
        Type.Fire,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
      number: 5,
      name: 'Charizard',
      types: [
        Type.Fire,
        Type.Flying
      ],
    },
  ];*/

  constructor(
    public pokemonService: PokemonService,
  )  {
  }
}