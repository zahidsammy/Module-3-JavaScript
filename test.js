// Create a function that takes a string as a parameter and returns the string with the first character of each word changed into a capital letter, as in the example below. Test it with different strings.

function ucFirstLetters(inputString) {
    
    const words = inputString.split(' ');
  
   
    const capitalizedWords = words.map(word => {
     
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  
    
    const resultString = capitalizedWords.join(' ');
  
   
    return resultString;
  }
  
  
  const inputString = "los angeles";
  
  
  const result = ucFirstLetters(inputString);
  
  
  console.log(result); 
  


  // Create a function truncate(str, max) that truncates a given string of text if its total length is greater than the max length. It should return either the truncated text, with an ellipsis (...) added to the end if it was too long, or the original text otherwise. b) Write another variant of the truncate function that uses a conditional operator.

function truncate(str, max) {
    return str.length <= max ? str : str.slice(0, max) + '...';
  }
  
  console.log(truncate('This text will be truncated if it is too long', 25));
  
  
  
  
  //Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue

  function replaceMiddleAnimal(newValue){
    const animal = ["liger", "Lezard", "Spider", "donkey"];

    const middleAnimal = Math.floor(animal.length / 2);

    if (animal.length % 2 !== 0){
        animal[middleAnimal] = newValue;
    }

    else {
        animal[middleAnimal - 1] = newValue;
    }

    return animal;


  }

  console.log(replaceMiddleAnimal("newAnimal"));
  


  // Write a function findMatchingAnimals(beginsWith) that returns a new array containing all the animals that begin with the beginsWith string. Try to make it work regardless of upper/lower case.

  function findMatchingAnimals(beginsWith, animal) {
    beginsWith = beginsWith.toLowerCase();

    const matchingAnimals = animals.filter(animal => {
        const animalLowerCase = animal.toLowerCase();
        return animalLowerCase.startsWith(beginsWith);
    });

    return matchingAnimals;
}

const animals = ["Liger", "Lezard", "Spider", "Donkey"];
const beginsWith = "s";

const matchingAnimals = findMatchingAnimals(beginsWith, animals);
console.log(matchingAnimals);


// Write a function camelCase(cssProp) that changes dash-separated CSS properties like 'margin-left' into camel-cased 'marginLeft'. The function should remove all dashes, and uppercase the first letter of each word after a dash.

function camelCase(cssProp) {
  const word = cssProp.split('-');

  const camelCased = word.map((marginLeft, index) => (index === 0 ? marginLeft : marginLeft[0].toUpperCase() + marginLeft.slice(1))).join('');

  return camelCased;
}

const cssProp = "margin-left";

const camelCaseProp = camelCase(cssProp);

console.log(camelCaseProp); // "marginLeft"


// Create variants of the camelCase function that use different types of for loops, and with and without the conditional operator.

function camelCased(CssProp) {

  const words = CssProp.split("-");

  let camelCased = words[0];

  for (let i= 1; i < words.length; i++) {
    if(words[i] !== '') {
      camelCased += words[i][0].toUpperCase() + words[i].slice(1);
    }
  }
   
  return camelCased;

}

console.log(camelCased("margin-left"));
console.log(camelCased("background-image"));
console.log(camelCased("display"));


// part 5
// A:  ToFix function return a string with two dicemal places but adding a + it changes from numerical addition to a concatenation wich gives a wrong answer
// B: 

function currencyAddition(float1 , flaot2){
  const result = parseFloat(float1) + parseFloat(flaot2);

  return parseFloat(result.toFixed(2));

}

console.log(currencyAddition(0.1, 0.2));


// C:

function currencyOperation(num1, num2, operation) {
  const parsedNum1 = parseFloat(num1);
  const parsedNum2 = parseFloat(num2);

  switch (operation) {
    case '+':
      return parseFloat((parsedNum1 + parsedNum2).toFixed(2));
    case '-':
      return parseFloat((parsedNum1 - parsedNum2).toFixed(2));
    case '*':
      return parseFloat((parsedNum1 * parsedNum2).toFixed(2));
    case '/':
      if (parsedNum2 === 0) {
        return "Division by zero is not allowed.";
      }
      return parseFloat((parsedNum1 / parsedNum2).toFixed(2));
    default:
      return "Invalid operation.";
  }
}

console.log(currencyOperation(0.1, 0.2, '+')); 
console.log(currencyOperation(0.3, 0.1, '-')); 
console.log(currencyOperation(0.1, 0.2, '*')); 
console.log(currencyOperation(0.2, 0.1, '/')); 


// part 6 : Create a function unique(duplicatesArray) which takes an array parameter that may include duplicates. Your function should return an array containing only the unique values from duplicatesArray.Test with the folowing arrays and create another one of your own.

function unique(duplicatesArray) {
  const noRepeatSet = new Set(duplicatesArray);

  const noRepeatArray = [...noRepeatSet];

  return noRepeatArray;
}

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

console.log(unique(colours)); 
console.log(unique(testScores)); 



// part 7: 

const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
  { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
  { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 }
];

// Your functions and code here...


function getBookTitle(bookId) {
  const book = books.find(book => book.id === bookId);
  return book ? book.title : "Book not found";
}


console.log(getBookTitle(2)); 
console.log(getBookTitle(6));

// part 7: B

function getOldBooks() {
  return books.filter(book => book.year < 1950);
}


console.log(getOldBooks());


// part 7: C

function addGenre() {
  return books.map(book => ({
    ...book,
    genre: 'classic'
  }));
}


console.log(addGenre());


// part 7: D

function getTitles(authorInitial) {
  return books
    .filter(book => book.author.charAt(0) === authorInitial)
    .map(book => book.title);
}


console.log(getTitles('G')); 



// part 7: E

function latestBook() {
  let latest = null;
  books.forEach(book => {
    if (!latest || book.year > latest.year) {
      latest = book;
    }
  });
  return latest;
}


console.log(latestBook()); 





// part 8: 

const phoneBookABC = new Map();



phoneBookABC.set('Annabelle', '0412312343');
phoneBookABC.set('Barry', '0433221117');
phoneBookABC.set('Caroline', '0455221182'); 



const phoneBookDEF = new Map([
  ['David', '0488112233'],
  ['Emily', '0499332244'],
  ['Frank', '0477552366']
]);


phoneBookABC.set('Caroline', 'newPhoneNumber');


function printPhoneBook(contacts) {
  for (const [name, phoneNumber] of contacts) {
    console.log(`${name}: ${phoneNumber}`);
  }
}


printPhoneBook(phoneBookABC);
printPhoneBook(phoneBookDEF);


const phoneBook = new Map(phoneBookABC);
phoneBookDEF.forEach((value, key) => phoneBook.set(key, value));


console.log('Full List of Names in the Combined Phone Book:');
for (const name of phoneBook.keys()) {
  console.log(name);
}



// part 9: Write a function sumSalaries(salaries) that calculates and returns the total of all salaries

function sumSalaries(Totalsalary) {
  let total = 0;
  for (const salary of Object.values(Totalsalary)) {
    total += salary;
  }
  return total;
}


const Totalsalary = {
  "Timothy": 35000,
  "David": 25000,
  "Mary": 55000,
  "Christina": 75000,
  "James": 43000
};
console.log(sumSalaries(Totalsalary)); 


// part 9: B

function topEarner(salaries) {
  let maxSalary = 0;
  let topEarnerName = "";

  for (const [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      topEarnerName = name;
    }
  }

  return topEarnerName;
}


const salaries = {
  "Timothy": 35000,
  "David": 25000,
  "Mary": 55000,
  "Christina": 75000,
  "James": 43000
};
console.log(topEarner(salaries)); 



// part 10:

const today = new Date();


console.log('Current time is ' + today.toLocaleTimeString());


const hoursPassed = today.getHours();
const minutesPassed = hoursPassed * 60 + today.getMinutes();
const secondsPassed = minutesPassed * 60 + today.getSeconds();

console.log(hoursPassed + ' hours have passed so far today');
console.log(minutesPassed + ' minutes have passed so far today');
console.log(secondsPassed + ' seconds have passed so far today');


const birthdate = new Date('YYYY-MM-DD'); 


const ageInMilliseconds = today - birthdate;
const ageInSeconds = ageInMilliseconds / 1000;
const ageInMinutes = ageInSeconds / 60;
const ageInHours = ageInMinutes / 60;
const ageInDays = ageInHours / 24;
const ageInYears = Math.floor(ageInDays / 365);
const ageInMonths = Math.floor((ageInDays % 365) / 30);
const ageInDaysRemaining = Math.floor(ageInDays % 30);

console.log('I am ' + ageInYears + ' years, ' + ageInMonths + ' months, and ' + ageInDaysRemaining + ' days old');

