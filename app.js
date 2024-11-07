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
const starterPokemon = pokemon.filter((pokemon) => pokemon.starter)[0]
game.party.push(starterPokemon)
// const pokemonTwo = pokemon[0]
// console.log(pokemonTwo.starter)
// game.party = pokemonTwo
// console.log(game)

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

// this is me at 00:40 finding out that ex5 was done VERY INCORREctly. so I decided on the sliiice approach hehehe . yes yes we didnt cover it in class but wallah it works

const startPokemon = pokemon.find((pokemon) => pokemon.starter)

const newPokemon = pokemon
  .filter((pokemon) => pokemon.hp > startPokemon.hp)
  .sort((a, b) => b.hp - a.hp)
  .slice(0, 3)

game.party.push(starterPokemon, ...newPokemon)

// const pokemons = pokemon.find((pokemon) => pokemon.type === 'water')
// game.party = pokemons
// console.log(game)
// const pokemonss = pokemon.find((pokemon) => pokemon.type === 'fire')
// game.party = pokemonss
// console.log(game)
// const pokemonsss = pokemon.find((pokemon) => pokemon.type === 'bug')
// game.party = pokemonsss
// console.log(game)

// honestly I HAD no idea how to do it anyother way. just used the easiest way out ;)

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

game.gyms.forEach((gym) => {
  if (gym.difficulty < 3) {
    gym.completed = true
  }
})
console.log(game.gyms)

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/
// Find the index of the starter Pokémon in the party
const starterIndex = game.party.findIndex((pokemon) => pokemon.starter)

const newForm = {
  1: pokemon[1],
  4: pokemon[4],
  7: pokemon[7],
  25: pokemon[25]
}
game.party.splice(starterIndex, 1, newForm[game.party[starterIndex].number])
console.log(game.party)

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/
game.party.forEach((pokemon) => {
  console.log(pokemon.name)
})

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/
const startersPokemon = pokemon.filter((pokemon) => pokemon.starter)
//love this filter very handy
startersPokemon.forEach((pokemon) => {
  console.log(pokemon.name)
})

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/
game.catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj)
}
const thePokemon = pokemon[5]
game.catchPokemon(thePokemon)
console.log(game.party)
