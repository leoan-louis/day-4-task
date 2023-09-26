// 2 a)Print odd numbers in an array using arrow function

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let oddNumbers = numbers.filter(num => num % 2 !== 0);

oddNumbers.forEach(num => console.log(num));


//2  b)Convert all the strings to title caps in a string array using arrow function


let stringArray = ["hello world", "good morning", "how are you"];

let titleCapsArray = stringArray.map(str => {
  return str.toLowerCase().replace(/(?:^|\s)\S/g, a => a.toUpperCase());
});

console.log(titleCapsArray);

//2  c)Sum of all numbers in an array  using arrow function

let numbers = [1, 2, 3, 4, 5];

let sum = arr => arr.reduce((acc, curr) => acc + curr, 0);

let result = sum(numbers);

console.log(result); // Output will be 15

//2 d)Return all the prime numbers in an array  using arrow function

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let isPrime = num => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
};

let primeNumbers = numbers.filter(num => isPrime(num));

console.log(primeNumbers);


//2 e)Return all the palindromes in an array  using arrow function

let strings = ["level", "hello", "madam", "racecar", "apple"];

let isPalindrome = str => {
  return str === str.split('').reverse().join('');
};

let palindromeArray = strings.filter(str => isPalindrome(str));

console.log(palindromeArray);