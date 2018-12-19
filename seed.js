'use strict'

const db = require('./server/db');
const { Trainer, Pokemon } = require('./server/db/models');

//helper functions
const randomNum = (n) => Math.floor(Math.random() * n) + 1;

const seedTrainer = () => {
  return Promise.all([
    Trainer.create({name: 'ash', username: 'ash123'}),
    Trainer.create({name: 'brock', username: 'brock31'}),
    Trainer.create({name: 'misty', username: 'misty89'}),
    Trainer.create({name: 'team-rocket', username: 'teamR2'}),
  ]);
};

const seedPokemon = () => {
  return Promise.all([
    Pokemon.create({name: 'pikachu', type: 'thunder', attack: ['growl', 'thunder', 'tackle'], level: randomNum(15), masterId: randomNum(4)}),
    Pokemon.create({name: 'charizard', type: 'fire', attack: ['fire blast', 'bite', 'fly'], level: randomNum(58), masterId: randomNum(4)}),
    Pokemon.create({name: 'meowth', type: 'normal', attack: ['scratch', 'run', 'payday'], level: randomNum(21), masterId: randomNum(4)}),
    Pokemon.create({name: 'darkrai', type: 'dark', attack: ['dream eater', 'torment', 'dark pulse'], level: randomNum(65), masterId: randomNum(4)}),
    Pokemon.create({name: 'eve', type: 'normal', attack: ['jump', 'sleep', 'play'], level: randomNum(10), masterId: randomNum(4)}),
  ]);
};

// actual seeding/modifying of the db
async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const trainers = await seedTrainer();
  console.log(`Seeded ${trainers.length} trainers.`);
  const pokemons = await seedPokemon();
  console.log(`Seeded ${pokemons.length} pokemons.`);

  console.log(`seeded successfully`)
};

// monitor seeding process of any errors
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

// export the seed function for testing purposes
module.exports = seed
