// 1 a) Print odd numbers in an array


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Using an anonymous function to filter odd numbers
numbers.forEach(function(num) {
  if (num % 2 !== 0) {
    console.log(num);
  }
});

//IIFE function

(function() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
    // Using an IIFE to filter odd numbers
    numbers.forEach(function(num) {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  })();


// 1 b)Convert all the strings to title caps in a string array

//anonymous function

let stringArray = ["hello world", "good morning", "how are you"];

let titleCapsArray = stringArray.map(function(str) {
  return str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
});

console.log(titleCapsArray);


// IIFE function
(function() {
    let stringArray = ["hello world", "good morning", "how are you"];
  
    let titleCapsArray = stringArray.map(function(str) {
      return str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
    });
  
    console.log(titleCapsArray);
  })();


// 1 c)Sum of all numbers in an array using anonymous function

let numbers = [1, 2, 3, 4, 5];

let sum = function(arr) {
  return arr.reduce(function(acc, curr) {
    return acc + curr;
  }, 0);
};

let result = sum(numbers);

console.log(result); // Output will be 15


// IIFE function 

let numbers = [1, 2, 3, 4, 5];

let sum = (function(arr) {
  return arr.reduce(function(acc, curr) {
    return acc + curr;
  }, 0);
})(numbers);

console.log(sum); // Output will be 15



// 1 d)Return all the prime numbers in an array using anonymous function

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let isPrime = function(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
};

let primeNumbers = numbers.filter(function(num) {
  return isPrime(num);
});

console.log(primeNumbers);

// IIFE function

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let primeNumbers = (function(arr) {
  let isPrime = function(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }

    return true;
  };

  return arr.filter(function(num) {
    return isPrime(num);
  });
})(numbers);

console.log(primeNumbers);


//1  e) Return all the palindromes in an array using anonymous function

let strings = ["level", "hello", "madam", "racecar", "apple"];

let isPalindrome = function(str) {
  return str === str.split('').reverse().join('');
};

let palindromeArray = strings.filter(function(str) {
  return isPalindrome(str);
});

console.log(palindromeArray);

//IIFE function

let strings = ["level", "hello", "madam", "racecar", "apple"];

let palindromeArray = (function(arr) {
  let isPalindrome = function(str) {
    return str === str.split('').reverse().join('');
  };

  return arr.filter(function(str) {
    return isPalindrome(str);
  });
})(strings);

console.log(palindromeArray);


// 1  f)Return median of two sorted arrays of the same size  using anonymous function


let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];

let findMedian = function(arr1, arr2) {
  let mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
  let mid = Math.floor(mergedArray.length / 2);
  
  if (mergedArray.length % 2 === 0) {
    return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  } else {
    return mergedArray[mid];
  }
};

let median = findMedian(arr1, arr2);
console.log(median); // Output will be 5.5

//IIFE function

let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];

let median = (function(arr1, arr2) {
  let mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
  let mid = Math.floor(mergedArray.length / 2);
  
  if (mergedArray.length % 2 === 0) {
    return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  } else {
    return mergedArray[mid];
  }
})(arr1, arr2);

console.log(median); // Output will be 5.5


// 1 g)Remove duplicates from an array  using an anonymous function 

let array = [1, 2, 3, 2, 4, 3, 5, 6, 1];

let removeDuplicates = function(arr) {
  return arr.filter(function(item, index) {
    return arr.indexOf(item) === index;
  });
};

let result = removeDuplicates(array);
console.log(result);

//IIFE function 

let array = [1, 2, 3, 2, 4, 3, 5, 6, 1];

let result = (function(arr) {
  return arr.filter(function(item, index) {
    return arr.indexOf(item) === index;
  });
})(array);

console.log(result);

 //1  h)Rotate an array by k times  using an anonymous function 

 let rotateArray = function(arr, k) {
    for (let i = 0; i < k; i++) {
      arr.unshift(arr.pop());
    }
    return arr;
  };
  
  let array = [1, 2, 3, 4, 5];
  let k = 2;
  
  let rotatedArray = rotateArray(array, k);
  console.log(rotatedArray);

  //IIFE Function

  let array = [1, 2, 3, 4, 5];
let k = 2;

let rotatedArray = (function(arr, k) {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
})(array.slice(), k);

console.log(rotatedArray);




