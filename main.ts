import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, 166 characters. Setup: the power cut and the lamp.
// Turn (the ache): dinner in the lamp's yellow circle, the house suddenly small.
const setup =
  "When the lights went out, my father lit the kerosene lamp on the kitchen table, and we ate dinner in its yellow circle, ";
const turn = "the whole house suddenly small enough to hold.";
const line = setup + turn;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
