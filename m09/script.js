let trainer = {
    Name: 'Ash',
    Age: 21,
    Pokemon: [],
    Friends: {
        Nobita: ['Charizard', 'Snorlax'],
        Shizuka: ['Eeve', 'Piplup']
    },
    talk: function() {
        console.log("Let's conquer the world Pikachu!\n");
        document.getElementById('talkResponse').textContent = "Let's conquer the world Pikachu!";
    }
};

function talk() {
    trainer.talk();
}

document.getElementById('trainerName').textContent = `The trainer's name is: ${trainer.Name}`;
document.getElementById('trainerAge').textContent = `The trainer's age is: ${trainer.Age}`;

console.log(`The trainer's name is: ${trainer.Name}`);  // Dot notation
console.log(`The trainer's age is: ${trainer['Age']}\n`);  // Bracket notation

console.log(`Result of Talk Method:`)

function Pokemon(name, level) {
    this.name = name;
    this.level = level;
    this.health = level * 13;
    this.attack = level * 3;

    this.tackle = function(targetPokemon) {
        targetPokemon.health -= this.attack;
        console.log(`${this.name} tackled ${targetPokemon.name}`);
        console.log(`${targetPokemon.name}'s health is now ${targetPokemon.health}`);
        document.getElementById('tackleResponse').textContent = `${this.name} tackled ${targetPokemon.name}. ${targetPokemon.name}'s health is now ${targetPokemon.health}.`;

        //if Pokemon's health reaches 0, call faint.
        if (targetPokemon.health <= 0) {
            this.faint(targetPokemon);
        }
        console.log(targetPokemon);
    };

    this.faint = function(targetPokemon) {
        console.log(`${targetPokemon.name} has fainted.`);
        document.getElementById('faintResponse').textContent = `${targetPokemon.name} has fainted.`;
    };
}

//Create pokemons
let pikachu = new Pokemon("Pikachu", 500);
let bulbasaur = new Pokemon("Bulbasaur", 7);
let charmander = new Pokemon("Charmander", 6);

// Add pokemons to the trainer
trainer.Pokemon.push(pikachu, bulbasaur, charmander);

let targetPokemon;

function setTargetPokemon() {
    let name = document.getElementById('pokemonName').value;
    let foundPokemon = trainer.Pokemon.find(pokemon => pokemon.name === name);
    if (foundPokemon) {
        targetPokemon = foundPokemon;
        document.getElementById('createPokemonResponse').textContent = `Set ${name} as target Pokemon.`;
    } else {
        document.getElementById('createPokemonResponse').textContent = `${name} not found in trainer's Pokemon.`;
    }
}

function tackle() {
    // The first Pokemon in the trainer's list is the one tackling
    if (trainer.Pokemon.length > 0 && targetPokemon) {
        trainer.Pokemon[0].tackle(targetPokemon);
    } else {
        console.log('Tackle cannot be performed!');
    }
}
