// One Letter for Your Day — make.fun bounty entry.
// Writes exactly one letter, A–Z, to /output/entry.txt (no trailing newline:
// the gate requires the file to be exactly 1 character).
// Letter: "K" — for "knackered": the day left me wiped out, in the cheerful
// British sense. K is the sharp, uncommon initial for it — not the obvious
// pick (X for exhausted), and the hard K sound fits the word's punch.
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";

const LETTER = "K";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");

// Self-check: the gate demands exactly 1 character, A–Z, not whitespace.
// Check both the string and the raw byte length, so a stray newline or a
// multi-byte character can never slip through unnoticed.
const written = readFileSync("/output/entry.txt", "utf8");
const bytes = readFileSync("/output/entry.txt");
if (!/^[A-Z]$/.test(written) || bytes.length !== 1) {
  throw new Error(`invalid entry: expected exactly one letter A-Z (1 byte), got ${JSON.stringify(written)} (${bytes.length} bytes)`);
}
console.log(`wrote /output/entry.txt (1 char): ${written}`);
