const fs = require('fs')

fs.readFile('./test.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  var array = data.split(' ');
  console.log(array);
  var matches = array.filter(s => s.includes(process.argv[2]))
  // console.log(matches)
  var count = 0;
  matches.forEach(element => {
    if(element === process.argv[2]) {
      count++
    }
  });
  console.log(count);
})