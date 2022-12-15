import { readFileSync } from "fs";
import { join } from "path";

const rucksacks = readFileSync(join(__dirname, "input.txt"), "utf-8").split(
  /\r?\n/
);

const aZ = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let total = 0;

rucksacks.forEach((rucksack) => {
  const stringLength = rucksack.length;
  // split the string in two
  const firstCompartment = rucksack.substring(0, stringLength / 2);
  const secondCompartment = rucksack.substring(stringLength / 2, stringLength);

  for (let i = 0; i < firstCompartment.length; i++) {
    if (secondCompartment.includes(firstCompartment[i])) {
      const index =
        aZ.findIndex((letter) => letter === firstCompartment[i]) + 1;
      total += index;
      break;
    }
  }
});

console.log(total);
