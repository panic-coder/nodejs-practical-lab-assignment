var fs = require('fs');

fs.readFile('./input.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  } else {
    var array = data.split(' ');
    console.log(array);
  }
})

