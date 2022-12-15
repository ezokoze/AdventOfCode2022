import { readFileSync } from "fs";
import { join } from "path";

const rucksacks = readFileSync(join(__dirname, "input.txt"), "utf-8").split(
  /\r?\n/
);

const aZ = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let total = 0;

const chunckArray: any = [];

// create chunks of 3
const chunkSize = 3;
for (let i = 0; i < rucksacks.length; i += chunkSize) {
  const chunck = rucksacks.slice(i, i + chunkSize);
  chunckArray.push(chunck);
}

chunckArray.forEach((rucksacks: any, index: number) => {
  const rucksack1 = rucksacks[0];
  const rucksack2 = rucksacks[1];
  const rucksack3 = rucksacks[2];

  for (let i = 0; i < rucksack1.length; i++) {
    if (rucksack2.includes(rucksack1[i]) && rucksack3.includes(rucksack1[i])) {
      const index = aZ.findIndex((letter) => letter === rucksack1[i]) + 1;
      total += index;
      break;
    }
  }
});

console.log(total);
