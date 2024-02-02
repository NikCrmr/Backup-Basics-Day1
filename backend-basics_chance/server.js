import { createServer } from "node:http";
import Chance from "chance";

export const server = createServer((request, response) => {
  const chance = new Chance();
  const name = chance.name();
  const age = chance.age();
  const profession = chance.profession();

  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify({ name, age, profession }));
});
