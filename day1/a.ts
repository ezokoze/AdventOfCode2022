import { readFileSync } from "fs";
import { join } from "path";

const input = readFileSync(join(__dirname, "input.txt"), "utf-8");

const inputLines = input.trim().split("\n");

const elfCalories: number[] = [];
let currentArray: number[] = [];

for (const line of inputLines) {
  if (line !== "\r") {
    const calories = parseInt(line);
    currentArray.push(calories);
    // This line is a blank line, so we're starting a new Elf's inventory
  } else {
    currentArray = [];
    continue;
  }

  // This line contains the sum of calories for an item, so add it to the current array
  elfCalories.push(currentArray.reduce((a: number, b: number) => a + b, 0));
}

const sortedArray = elfCalories.sort((a: number, b: number) => a - b);

const topThree = sortedArray
  .reverse()
  .slice(0, 3)
  .reduce((a: number, b: number) => a + b, 0);

console.log("topThree", topThree);
