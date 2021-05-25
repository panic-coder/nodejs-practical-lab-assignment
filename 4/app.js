const fs = require('fs')

const content = process.argv[2];

fs.writeFile('./test.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  console.log('The file was saved');
})