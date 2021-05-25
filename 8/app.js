const fs = require('fs')

fs.readFile('./input.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  } else {
    // console.log(data);
    var array = data.split(' ');
    var sum = 0;
    array.forEach(element => {
      sum+=Number(element);
    });
    console.log(sum);
    fs.writeFile('./output.txt', sum.toString(), err => {
      if (err) {
        console.error(err)
        return
      }
      console.log('Value of sum saved in the file');
    })
  }
})