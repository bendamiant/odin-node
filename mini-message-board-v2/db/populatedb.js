#! /usr/bin/env node

require('dotenv').config();

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 255 ),
  author VARCHAR ( 255 ),
  added DATE
);

INSERT INTO messages (text, author, added) 
VALUES
  ('foo', 'Bryan', '2002-02-12'),
  ('bar', 'Odin', '2021-01-01'),
  ('hello', 'Damon', '1983-03-04');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.ROLE_NAME}:${process.env.ROLE_PASSWORD}@localhost:5432/messages_v2`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();