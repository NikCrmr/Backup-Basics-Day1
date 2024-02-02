import { createServer } from "node:http";
import Chance from "chance";

export const server = createServer((request, response) => {
  const chance = new Chance();
  const name = chance.name();
  const age = chance.age();
  const character = chance.character();
  const string = chance.string({ length: 22 });

  const profession = chance.profession();

  // response.writeHead(200, { "Content-Type": "application/json" });
  // response.end(JSON.stringify({ name, age, profession, character, string }));
  response.end(
    `hello my name is ${name}, my age is ${age}, my profession: ${profession}, my favorite character is  ${character} and my password - Psst! Please keep it secret! ${string}}`
  );
});
