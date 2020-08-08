import pambda from 'pambdajs';


const main = async () => {
  const p = pambda.init()

  const data = [1, 2, 3]
  await p.map((x) => {
    console.log(x)
  }, data)

  data.map(d => {
    console.log(d)
  })
}

main();
