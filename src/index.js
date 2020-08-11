import pambda from 'pambdajs';
// import { getData } from "./io.js";

const main = async () => {
  const data = Array.from({length: 100000}, (x, i) => i);
  const p = pambda.init(4)
  console.log(p.processCount, 'processes')


  const cb = (x) => {
    // this is a heavy work
    let sum = 0
    for (let i = 0; i < 100000; i++) {
      sum += i + x;
    }
    return sum;
  }


  console.time('multi process')
  const pr = await p.map(cb, data)
  console.timeEnd('multi process')


  console.time('single process')
  const r = data.map(cb)
  console.timeEnd('single process')

}

main();
