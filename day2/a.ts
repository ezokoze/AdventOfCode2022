import { readFileSync } from "fs";
import { join } from "path";

enum Choice {
  Rock = 1,
  Paper = 2,
  Scissors = 3,
}

const input = readFileSync(join(__dirname, "input.txt"), "utf-8").split(
  /\r?\n/
);

const inputArray: number[] = [];

// method to convert letter into number
const decodeLetter = (l: string) => {
  if (l == "A" || l == "X") return 1;
  if (l == "B" || l == "Y") return 2;
  if (l == "C" || l == "Z") return 3;
};

// method to get final score
const processTotalScore = (input: number[]): number => {
  let total = 0;

  input.forEach((round: number) => {
    const opponent = round[0];
    const myChoice = round[1];

    total += myChoice;

    switch (opponent) {
      case Choice.Rock:
        if (myChoice === Choice.Rock) total += 3; // we draw
        else if (myChoice === Choice.Paper) total += 6; // we win
        else if (myChoice === Choice.Scissors) total += 0; // we lose
        break;
      case Choice.Paper:
        if (myChoice === Choice.Rock) total += 0; // we lose
        else if (myChoice === Choice.Paper) total += 3; // we draw
        else if (myChoice === Choice.Scissors) total += 6; // we win
        break;
      case Choice.Scissors:
        if (myChoice === Choice.Rock) total += 6; // we win
        else if (myChoice === Choice.Paper) total += 0; // we lose
        else if (myChoice === Choice.Scissors) total += 3; // we draw
        break;
    }
  });

  return total;
};

// split the input into arrays
input.map((x: any) => {
  x = x.split(" ");
  inputArray.push(x);
});

// decode the letters
inputArray.map((x: any) => {
  x[0] = decodeLetter(x[0]);
  x[1] = decodeLetter(x[1]);
});

const total = processTotalScore(inputArray);
console.log(total);
