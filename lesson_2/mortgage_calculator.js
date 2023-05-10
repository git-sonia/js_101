const readline = require('readline-sync');
const MONTHS_IN_YEAR = 12;

function prompt(message) {
  console.log(`=> ${message}`);
}

function askQuestions() {
  prompt('What is your loan amount?');
  let loanAmount = readline.question();

  prompt('What is your loan duration in years?');
  let loanDuration = readline.question();

  prompt('What is your APR?');
  let annualPercentageRate = readline.question();
  return [loanAmount, loanDurationYears, annualPercentageRate];
}

function convertToMonths(time) {
  return time * MONTHS_IN_YEAR;
}

let [loanAmount, loanDurationYears, annualPercentageRate] = askQuestions();

let loanDurationMonths = convertToMonths(loanDurationYears);


