const moment = require('moment');
const sumService = require('./operations/sum');
const multiplicationService = require('./operations/multiplication');
const subtractionService = require('./operations/subtraction');
const divisionService = require('./operations/division');
console.log(moment().format('dddd, MMM Do YYYY, HH:mm:ss a'));
console.log(`The sum of 3 & 7 is: ${sumService.sum(3, 7)}`);
console.log(`The multiplication of 3 & 7 is: ${multiplicationService.multiplication(3, 7)}`);
console.log(`The subtraction of 3 & 7 is: ${subtractionService.subtraction(3, 7)}`);
console.log(`The division of 3 & 7 is: ${divisionService.division(3, 7)}`);