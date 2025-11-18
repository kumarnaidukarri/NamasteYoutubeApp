// Helper functions

const namesList = [
  "Smith",
  "Jones",
  "Williams",
  "Brown",
  "Davis",
  "Miller",
  "Dev",
  "Demon",
  "Panda",
  "Cat",
  "Lord",
  "King",
  "Duke",
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Eve",
  "Frank",
  "Gino Blankenship",
  "Demetria Thai",
  "Jerrod Brower",
  "Sam Conner",
  "Aurora Raines",
  "Phoenix Blanco",
  "Siobhan Hickman",
  "Fabian Donahue",
  "Precious Tong",
  "Jamarcus Fries",
];
function generateRandomName() {
  const randomIndex = Math.floor(Math.random(2) * namesList.length);
  return namesList[randomIndex];
}

const messagesList = [
  "Hello there!",
  "Have a great day!",
  "You are awesome!",
  "Keep up the good work!",
  "this morning sunshine live gives great experience",
  "Stay positive!",
  "Wishing you the best!",
  "Smile, it's contagious!",
  "Believe in yourself!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, dolores!",
  "consectetur adipisicing elit. Velit, dolores!",
  "amet consectetur adipisicing elit. Velit, dolores!",
];
function generateRandomMessage() {
  const randomIndex = Math.floor(Math.random(5) * messagesList.length);
  return messagesList[randomIndex];
}

function findNthPrime(n) {
  let count = 0;
  let num = 2;

  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  while (count < n) {
    if (isPrime(num)) {
      count++;
    }
    num++;
  }

  return num - 1;
}

// Exports
export { generateRandomName, generateRandomMessage, findNthPrime };
