import fs from 'fs';

export const getData = (filePath) => {
  let thePath = '';
  if (filePath) {
    thePath = filePath
  } else {
    thePath = 'src/data/5000lines.json'
  }
  const data = JSON.parse(fs.readFileSync(thePath, 'utf8'))
  return data
}
