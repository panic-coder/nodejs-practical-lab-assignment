const testFolder = './';
const fs = require('fs');
const path = require('path');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    if (fs.lstatSync(path.resolve(testFolder, file)).isDirectory()) {
      console.log('DIR: ' + file);
    } else {
      console.log('FILE: ' + file);
    }
  });
});