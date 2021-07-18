// call/bind and apply examples

const person = {
  first: "Avi",
  last: "Cohen",
  getFullName: function () {
    const fullName = this.first + " " + this.last;
    return fullName;
  },
};

console.log(person.getFullName());

const logName = function (language, location) {
  console.log("LOGGED: " + this.getFullName());
  console.log(language + " " + location + "\n");
};

const logPersonName = logName.bind(person);

logPersonName("Hebrew", "Bat Yam");

const listOfArgs = ["English", "London"];
logPersonName.call(person, "arg1", "arg2");
logPersonName.apply(person, listOfArgs);

// using IIFE
const logName2 = function (language, location) {
  console.log("LOGGED: " + this.getFullName());
  console.log(language + " " + location + "\n");
}.apply(person, [1, 2]);

// Function Borrowing
const person2 = {
    first: 'Wes',
    last: 'Boss'
}

console.log(person.getFullName());
console.log(person.getFullName.apply(person2));

// Function Currying

function multiply (num1, num2) {
    console.log(num1,num2);
    return num1*num2
}

const multiplybyTwo = multiply.bind(this,2)
const multiplybyThree = multiply.bind(this,3)
const multiplybySix = multiply.bind(this,6)

console.log(multiplybyTwo(4));
console.log(multiplybyThree(5));
console.log(multiplybySix(10));
