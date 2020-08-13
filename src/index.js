
// import { getData } from "./io.js";
import { sum100k } from "./process/sum100k.js";
import { sum10k } from "./process/sum10k.js";
import { sum1k } from "./process/sum1k.js";
import { sum100 } from "./process/sum100.js";

const main = async () => {
  await sum10k();
  await sum1k();
  await sum100();
  await sum100k();
}

main();
