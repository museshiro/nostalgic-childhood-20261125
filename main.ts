import { mkdirSync, writeFileSync } from "node:fs";

const partA = "Every Friday after swimming lessons, Dad bought me a 25-cent cherry ice pop from the pool vending machine, and I ate it in the back seat with the windows up, ";
const partB = "my swimsuit cold against the vinyl and my tongue stinging red.";
const line = partA + partB;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
