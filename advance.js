 // 1. 

 function makeCounter(startFrom, incrementBy) {
    let currentCount = startFrom || 0;
    return function() {
    currentCount += incrementBy || 1;
    console.log(currentCount)
    return currentCount;
    };
    }


    let counter1 = makeCounter(2,3);
    counter1(); 
    counter1(); 

    let counter2 = makeCounter();
    counter2();
    counter2();


    // 2.

    function delayMsg(msg)
    {
    console.log(`This message will be printed after a delay: ${msg}`)
    }
    setTimeout(delayMsg, 100, '#1: Delayed by 100ms'); //4
    setTimeout(delayMsg, 20, '#2: Delayed by 20ms'); //3
    setTimeout(delayMsg, 0, '#3: Delayed by 0ms'); //2
    delayMsg('#4: Not delayed at all') //1

    // converting to arrow function 

    const delayMsg1 = (msg) => {
        console.log(`This message will be printed after a delay: ${msg}`)
    };

    setTimeout(() => delayMsg1('#1: Delayed by 100ms'), 100);
    setTimeout(() => delayMsg1('#2: Delayed by 20ms'), 20);
    setTimeout(() => delayMsg1('#3: Delayed by 0ms'), 0);
    delayMsg('#4: Not delayed at all');   


// 3.

function debounce(func, delay = 1000) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  }
  
  function printMe(msg) {
    console.log(`printing debounced message: ${msg}`);
  }
  
  printMe = debounce(printMe, 1000);
  
  
  setTimeout(() => printMe('First'), 100);
  setTimeout(() => printMe('Second'), 200);
  setTimeout(() => printMe('Third'), 300);
  

//4

function printFibonacciTimeouts() {
    let a = 1;
    let b = 1;
    let count = 0;
  
    function printNext() {
      if (count === 0) {
        console.log(a);
      } else if (count === 1) {
        console.log(b);
      } else {
        const next = a + b;
        console.log(next);
        a = b;
        b = next;
      }
      count++;
      if (count < 10) {
        setTimeout(printNext, 1000);
      }
    }
  
    printNext();
  }
  
  printFibonacciTimeouts();

//b

function printFibonacci(limit) {
    let a = 1;
    let b = 1;
    let count = 0;
    const intervalId = setInterval(() => {
      if (count === 0) {
        console.log(a);
      } else if (count === 1) {
        console.log(b);
      } else {
        const next = a + b;
        console.log(next);
        a = b;
        b = next;
      }
      count++;
      if (count === limit) {
        clearInterval(intervalId);
      }
    }, 1000);
  }
  
  printFibonacci(10); // Print the first 10 Fibonacci numbers

  

//5

let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
      console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
  };
  
  car.description(); 
  
  const boundDescription = car.description.bind(car);
  setTimeout(boundDescription, 200); 

  
  let carClone = { ...car, make: "Ferrari" }; 

  carClone.description(); 
  
  setTimeout(boundDescription, 400); 

  

//6
Function.prototype.delay = function (ms) {
    const originalFunction = this;
    return function (...args) {
      setTimeout(() => originalFunction.apply(null, args), ms);
    };
  };
  
  function multiply(a, b) {
    console.log(a * b);
  }
  
  multiply.delay(500)(5, 5); 

//b
Function.prototype.delay = function (ms) {
    const originalFunction = this;
    return function (...args) {
      setTimeout(() => originalFunction.apply(null, args), ms);
    };
  };
  
  function multiply(...numbers) {
    let result = 1;
    numbers.forEach((num) => (result *= num));
    console.log(result);
  }
  
  multiply.delay(500)(5, 5, 2); 

//c
    Function.prototype.delay = function (ms) {
        const originalFunction = this;
        return function (...args) {
        setTimeout(() => originalFunction.apply(null, args), ms);
        };
    };
    
    function multiply(a, b, c, d) {
        console.log(a * b * c * d);
    }
    
    multiply.delay(500)(2, 3, 4, 5); 



//7
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  
    this.toString = function () {
      return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
    };
  }
  
  const person1 = new Person('James Brown', 73, 'male');
  const person2 = new Person('Alice Johnson', 28, 'female');
  console.log('person1: ' + person1.toString());
  console.log('person2: ' + person2.toString());
  

//b
  Student.prototype.toString = function () {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Cohort: ${this.cohort}`;
  };
  
  const student1 = new Student('John Smith', 20, 'male', '2023A');
const student2 = new Student('Emily Brown', 22, 'female', '2022B');

console.log('student1: ' + student1.toString());
console.log('student2: ' + student2.toString());



//8

    class PrecisionClock extends DigitalClock {
        constructor(prefix, precision = 1000) {
        super(prefix);
        this.precision = precision;
        }
    
        start() {
        this.display();
        this.timer = setInterval(() => this.display(), this.precision);
        }
    }

  
    class AlarmClock extends DigitalClock {
        constructor(prefix, wakeupTime = '07:00') {
        super(prefix);
        this.wakeupTime = wakeupTime;
        }
    
        display() {
        super.display(); 
        let date = new Date();
        let [hours, mins] = [date.getHours(), date.getMinutes()];
        const formattedWakeupTime = this.wakeupTime.split(':');
        const wakeupHours = parseInt(formattedWakeupTime[0]);
        const wakeupMinutes = parseInt(formattedWakeupTime[1]);
    
        if (hours === wakeupHours && mins === wakeupMinutes) {
            console.log('Wake Up');
            this.stop();
        }
        }
    }
  
    const precisionClock = new PrecisionClock('Precision Clock:', 500);
    precisionClock.start();

    const alarmClock = new AlarmClock('Alarm Clock:', '08:30');
    alarmClock.start();





  
//9

    function randomDelay() {
    const delay = Math.floor(Math.random() * 20 + 1) * 1000; 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (delay % 2 === 0) {
            resolve(delay);
        } else {
            reject(delay);
        }
        }, delay);
    });
    }

    randomDelay()
    .then((delay) => console.log(`There appears to have been a delay of ${delay} milliseconds.`))
    .catch((delay) => console.error(`There was an odd delay of ${delay} milliseconds.`));




//10

import fetch from 'node-fetch';

    async function fetchURLData(url) {
        try {
            const response = await fetch(url);
            if (response.status === 200) {
            return await response.json();
            } else {
            throw new Error(`Request failed with status ${response.status}`);
            }
        } catch (error) {
            throw error;
        }
    }

    async function fetchMultipleURLs(urls) {
        try {
            const promises = urls.map(url => fetchURLData(url));
            return await Promise.all(promises);
        } catch (error) {
            throw error;
        }
    }

    const urlList = [
        'https://jsonplaceholder.typicode.com/todos/1',
        'https://jsonplaceholder.typicode.com/posts/1',
    ];

    fetchMultipleURLs(urlList)
    .then(data => console.log(data))
    .catch(error => console.error(error.message));
