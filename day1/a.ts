import { readFileSync } from "fs";
import { join } from "path";

const input = readFileSync(join(__dirname, "input.txt"), "utf-8");

const inputLines = input.trim().split("\n");

let elfCalories: any = [];
let currentArray: any = [];

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
  elfCalories.push(currentArray.reduce((a: any, b: any) => a + b, 0));
}

let sortedArray = elfCalories.sort((a: number, b: number) => a - b);

let topThree = sortedArray
  .reverse()
  .slice(0, 3)
  .reduce((a: any, b: any) => a + b, 0);

console.log("topThree", topThree);
