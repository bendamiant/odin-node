#! /usr/bin/env node

require('dotenv').config();

const { Client } = require("pg");

const SQL = `

CREATE TABLE IF NOT EXISTS typings (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 )
);

CREATE TABLE IF NOT EXISTS trainers (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 )
);

CREATE TABLE IF NOT EXISTS species (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ),
  type1 INTEGER NOT NULL REFERENCES typings(id) ON DELETE CASCADE,
  type2 INTEGER REFERENCES typings(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS pokemon (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  nickname VARCHAR ( 255 ),
  species_id INTEGER REFERENCES species(id) ON DELETE CASCADE,
  trainer_id INTEGER REFERENCES trainers(id) ON DELETE CASCADE
);

INSERT INTO typings (name) 
VALUES
  ('Grass'),
  ('Poison'),
  ('Fire'),
  ('Flying'),
  ('Water')
  ;

INSERT INTO species (name, type1, type2) 
VALUES
  ('Bulbasaur', 1, 2),
  ('Ivysaur', 1, 2),
  ('Venusaur', 1, 2),
  ('Charmander', 3, NULL),
  ('Charmeleon', 3, NULL),
  ('Charizard', 3, 4),
  ('Squirtle', 5, NULL),
  ('Wartortle', 5, NULL),
  ('Blastoise', 5, NULL)
  ;

INSERT INTO trainers (name) 
VALUES
  ('Ben'),
  ('John')
  ;

INSERT INTO pokemon (nickname, species_id, trainer_id) 
VALUES
  ('Venus', 1, 1),
  ('Shelly', 9, 1),
  ('Ash', 6, 1),
  ('Squire', 7, 2),
  ('Bulby', 1, 2),
  ('Mander', 4, 2)
  ;
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.ROLE_NAME}:${process.env.ROLE_PASSWORD}@localhost:5432/inv_app`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();