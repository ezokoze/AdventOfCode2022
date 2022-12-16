import { readFileSync } from "fs";
import { join } from "path";

const startTime = performance.now();

const endTime = performance.now();
const perf = endTime - startTime;

// console.log(`total is ${total} in ${perf.toFixed(2)} ms`); // total is 513 in 1.73ms
