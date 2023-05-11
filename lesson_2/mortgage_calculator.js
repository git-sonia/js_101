const readline = require('readline-sync');
const MONTHS_IN_YEAR = 12;

function prompt(message) {
  console.log(`=> ${message}`);
}

function askQuestions() {
  prompt('What is your loan amount?');
  let loanAmount = readline.question();

  prompt('What is your loan duration in years?');
  let loanDurationYears = readline.question();

  prompt('What is your APR as a decimal?');
  let annualPercentageRate = readline.question();
  return [loanAmount, loanDurationYears, annualPercentageRate];
}

function calculateMonthlyInterestRate(loanAmount, loanDurationMonths,
  monthlyInterestRate) {
  let monthlyPayment = loanAmount *
    (monthlyInterestRate / (1 - Math.pow((1 +
      monthlyInterestRate), (-loanDurationMonths))));

  return monthlyPayment.toFixed(2);
}

let [loanAmount, loanDurationYears, annualPercentageRate] = askQuestions();

let loanDurationMonths = MONTHS_IN_YEAR * loanDurationYears;

let monthlyInterestRate = annualPercentageRate / MONTHS_IN_YEAR;

let mortgage = calculateMonthlyInterestRate(loanAmount, loanDurationMonths,
  monthlyInterestRate);

console.log(`Your mortgage is ${mortgage}`);