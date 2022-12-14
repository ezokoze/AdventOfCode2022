import { readFileSync } from "fs";
import { join } from "path";

enum Choice {
  Rock = 1,
  Paper = 2,
  Scissors = 3,
}

enum EncryptedChoice {
  LOSE = 1,
  DRAW = 2,
  WIN = 3,
}

enum Result {
  LOSE = 0,
  DRAW = 3,
  WIN = 6,
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
const processTotalScore = (input: any): number => {
  let total = 0;

  input.forEach((round: any) => {
    const opponent = round[0];
    const me = round[1];

    total += me;

    switch (opponent) {
      case Choice.Rock:
        if (me === Choice.Rock) total += Result.DRAW;
        else if (me === Choice.Paper) total += Result.WIN;
        else if (me === Choice.Scissors) total += Result.LOSE;
        break;
      case Choice.Paper:
        if (me === Choice.Rock) total += Result.LOSE;
        else if (me === Choice.Paper) total += Result.DRAW;
        else if (me === Choice.Scissors) total += Result.WIN;
        break;
      case Choice.Scissors:
        if (me === Choice.Rock) total += Result.WIN;
        else if (me === Choice.Paper) total += Result.LOSE;
        else if (me === Choice.Scissors) total += Result.DRAW;
        break;
    }
  });

  return total;
};

const changeChoiceAccordingToStrategy = (input: any): any => {
  input.map((x: any) => {
    if (x[1] === EncryptedChoice.LOSE) {
      switch (x[0]) {
        case Choice.Rock:
          x[1] = Choice.Scissors;
          break;
        case Choice.Paper:
          x[1] = Choice.Rock;
          break;
        case Choice.Scissors:
          x[1] = Choice.Paper;
          break;
        default:
          break;
      }
    } else if (x[1] === EncryptedChoice.DRAW) {
      switch (x[0]) {
        case Choice.Rock:
          x[1] = Choice.Rock;
          break;
        case Choice.Paper:
          x[1] = Choice.Paper;
          break;
        case Choice.Scissors:
          x[1] = Choice.Scissors;
          break;
        default:
          break;
      }
    } else if (x[1] === EncryptedChoice.WIN) {
      switch (x[0]) {
        case Choice.Rock:
          x[1] = Choice.Paper;
          break;
        case Choice.Paper:
          x[1] = Choice.Scissors;
          break;
        case Choice.Scissors:
          x[1] = Choice.Rock;
          break;
        default:
          break;
      }
    }
  });
  return input;
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

const total = processTotalScore(changeChoiceAccordingToStrategy(inputArray));
console.log(total);
