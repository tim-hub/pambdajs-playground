import { cpus } from 'os';
import pambda from 'pambdajs';
import { arrayLengths } from "./arrayLength.js";
import ObjectsToCsv from 'objects-to-csv';

const cb = (x) => {
  // this is a heavy work
  let sum = 0;
  for (let i = 0; i < 100; i++) {
    sum += i;
  }
  return sum;
}


export const sum100 = async () => {
  const processCount = cpus().length * 2;
  const results = [];
  for (let length of arrayLengths) {
    const result = {
      id: length
    }
    console.log('array length ' + length);
    const data = Array.from({length: length}, (x, i) => i);
    const t0 = new Date().getTime();
    const r = data.map(cb)
    const t1 = new Date().getTime();
    result['Process Single'] = t1 - t0;

    for (let i = 1; i <= processCount; i++) {
      const p = await pambda.init(i)
      const t0 = new Date().getTime();
      const pr = await p.map(cb, data)
      const t1 = new Date().getTime();
      result[`Process Count ${i}`] = t1 - t0;
    }
    results.push(result);
  }
  const csv = new ObjectsToCsv(results);
  await csv.toDisk('./100.csv');
}
