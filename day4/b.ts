import { readFileSync } from "fs";
import { join } from "path";

// perf
const startTime = performance.now();

const assignments = readFileSync(join(__dirname, "input.txt"), "utf-8").split(
  /\r?\n/
);

const formattedAssignments = assignments.map((assignment) =>
  assignment.split(",")
);

let total = 0;

console.log("formattedAssignments", formattedAssignments);

export const processTotal = formattedAssignments.forEach((assignment) => {
  const firstAssignment = assignment[0];
  const secondAssignment = assignment[1];

  const aL = parseInt(firstAssignment.split("-")[0]); // 28
  const aH = parseInt(firstAssignment.split("-")[1]); // 88
  const bL = parseInt(secondAssignment.split("-")[0]); // 85
  const bH = parseInt(secondAssignment.split("-")[1]); // 88

  // if (aL <= bL && aH >= bH) {
  //   total += 1;
  // } else if (bL <= aL && bH >= aH) {
  //   total += 1;
  // }

  if ((bL >= aL && bL <= aH) || (bH >= aL && bH <= aH)) {
    total += 1;
  } else if ((aH >= bL && aH <= bH) || (aL >= bL && aL <= bH)) {
    total += 1;
  }
});

// perf
const endTime = performance.now();
const perf = endTime - startTime;

console.log(`total is ${total} in ${perf.toFixed(2)} ms`); // total is 878 in 8.08 ms
