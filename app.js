const game = {
  party: [],
  gyms: [
    { location: 'Pewter City', completed: false, difficulty: 1 },
    { location: 'Cerulean City', completed: false, difficulty: 2 },
    { location: 'Vermilion City', completed: false, difficulty: 3 },
    { location: 'Celadon City', completed: false, difficulty: 4 },
    { location: 'Fuchsia City', completed: false, difficulty: 5 },
    { location: 'Saffron City', completed: false, difficulty: 6 },
    { location: 'Cinnabar Island', completed: false, difficulty: 7 },
    { location: 'Viridian City', completed: false, difficulty: 8 }
  ],
  items: [
    { name: 'potion', quantity: 4 },
    { name: 'pokeball', quantity: 8 },
    { name: 'rare candy', quantity: 99 }
  ]
}
// console.dir(pokemon, { maxArrayLength: null })
// we can display every item in the array. This specific option isn't available with console.log(), making console.dir() the necessary choice for the full visibility needed in this lab.

const pokemonOne = pokemon[58]
console.log(pokemonOne.name)

// console.log(game)

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
game.difficulty = 'hard'
console.log(game)

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/
const pokemonTwo = pokemon[0]
console.log(pokemonTwo.starter)
game.party = pokemonTwo
console.log(game)

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/
const pokemons = pokemon.find((pokemon) => pokemon.type === 'water')
game.party = pokemons
console.log(game)
const pokemonss = pokemon.find((pokemon) => pokemon.type === 'fire')
game.party = pokemonss
console.log(game)
const pokemonsss = pokemon.find((pokemon) => pokemon.type === 'bug')
game.party = pokemonsss
console.log(game)
