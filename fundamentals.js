// 1. What are the results of these expressions? (answer first, then use console.log() to check)

console.log("" + 1 + 0);          
console.log("" - 1 + 0);          
console.log(true + false);        
console.log(!true);               
console.log(6 / "3");            
console.log("2" * "3");          
console.log(4 + 5 + "px");       
console.log("$" + 4 + 5);        
console.log("4" - 2);             
console.log("4px" - 2);           
console.log(" -9 " + 5);         
console.log(" -9 " - 5);         
console.log(null + 1);            
console.log(undefined + 1);       
console.log(undefined == null);   
console.log(undefined === null);  
console.log(" \t \n" - 2);  

// 2. Which of the below are not giving the right answer? Why are they not correct? How can we fix them?

let three = "3"
let four = "4"
let thirty = "30"

let addition = three + four // "34"
let multiplication = three * four //NaN (Not-a-Number)
let division = three / four // //NaN (Not-a-Number) because of they are Strings
let subtraction = three - four // "-1"
let lessThan1 = three < four //  "4"  correct
let lessThan2 = thirty < four // "4"  correct



// 3. Which of the following console.log messages will print? Why?
if (0) console.log('#1 zero is true') // will not print due to 0
if ("0") console.log('#2 zero is true') // this one
if (null) console.log('null is true')// will not print due to 0
if (-1) console.log('negative is true') // will not print due to undeclared variable
if (1) console.log('positive is true') // will not print due to undeclared variable


//4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?

let a = 2, b = 3;
let result = `${a} + ${b} is ` + (a + b < 10 ? 'less than 10' : 'greater than 10');



//5.Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same. 

// fucntion Expression syntax
const getGreeting = function(name) {
    return 'Hello ' + name + '!';
  };
  
  console.log(getGreeting('John')); // Output: Hello John!

 // Arrow function syntax 
  const getGreetings = (name) => 'Hello ' + name + '!';

  console.log(getGreetings('John')); // Output: Hello John!
  



//6. a) Complete the inigo object by adding a lastName property and including it in the greeting. b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead prints his famous catch phrase to the console.

const westley = {
    name: 'Westley',
    numFingers: 5
  };
  
  const rugen = {
    name: 'Count Rugen',
    numFingers: 6
  };
  
  const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya', // Added lastName property
    greeting(person) {
      let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
      console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {
      return 'Nice to meet you.';
    }
  };
  
  inigo.greeting(westley);
  inigo.greeting(rugen);

  //b

  const inigos = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
      let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
      console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {
      return person.numFingers === 6 ? "Hello. My name is Inigo Montoya. You killed my father. Prepare to die." : 'Nice to meet you.';
    }
  };
  
  inigo.greeting(westley);
  inigo.greeting(rugen);

  
  //c

  const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
      let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
      console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase: (person) =>
      person.numFingers === 6
        ? "Hello. My name is Inigo Montoya. You killed my father. Prepare to die."
        : 'Nice to meet you.'
  };
  
  inigo.greeting(westley);
  inigo.greeting(rugen);
  


  //7.
  const basketballGame = {
    score: 0,
    fouls: 0,
    freeThrow() {
      this.score++;
      return this;
    },
    basket() {
      this.score += 2;
      return this;
    },
    threePointer() {
      this.score += 3;
      return this;
    },
    halfTime() {
      console.log('Halftime score is ' + this.score + ' with ' + this.fouls + ' fouls.');
      return this;
    },
    fullTime() {
      console.log('Full-time score is ' + this.score + ' with ' + this.fouls + ' fouls.');
      return this;
    },
    incrementFoul() {
      this.fouls++;
      return this;
    }
  };
  
  
//8 The object below represents a single city. a) Write a function that takes an object as an argument and uses a for...in loop to acces and print to the console each of those object properties and their values. Test it using the sydney object below. b) Create a new object for a different city with different properties and call your function again with the new object.

function printObjectProperties(obj) {
    for (const property in obj) {
      if (obj.hasOwnProperty(property)) {
        console.log(`${property}: ${obj[property]}`);
      }
    }
  }
  
  const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney',
  };
  
  printObjectProperties(sydney);

  //b

  const melbourne = {
    name: 'Melbourne',
    population: 4_967_733,
    state: 'Victoria',
    founded: '30 August 1835',
    timezone: 'Australia/Melbourne',
  };
  
  printObjectProperties(melbourne);

  

  //9 

  let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let moreSports = teamSports.slice(); // Create a copy
moreSports.push('Soccer'); // Add a new sport at the end
moreSports.unshift('Basketball'); // Add a new sport at the beginning

console.log(teamSports); // Original teamSports remains unchanged
console.log(moreSports); // moreSports contains the new values


let dog1 = 'Bingo';
let dog2 = 'Fido'; // Create a new variable with a new value

console.log(dog1); // dog1 remains unchanged
console.log(dog2); // dog2 has the new value

let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let cat2 = { ...cat1 }; // Create a copy
cat2.name = 'Whiskers'; // Change the name property of the copy

console.log(cat1); // Original cat1 remains unchanged
console.log(cat2); // cat2 has the modified name property




//10
class PersonClass {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.human = true;
    }
  
    canDrive() {
      return this.age >= 16; // Adjust the age requirement as needed
    }
  }
  
  const person3 = new PersonClass('Charlie', 18);
  console.log(person3.canDrive()); // Check if Charlie can drive
  

  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = function () {
      return this.age >= 16; // Adjust the age requirement as needed
    };
  }
  
  const person1 = new Person('Alice', 25);
  console.log(person1.canDrive()); // Check if Alice can drive

  
 
  