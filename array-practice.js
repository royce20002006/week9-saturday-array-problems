const findMinimum = arr => {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) smallest = arr[i];

  }
  return smallest;


};

const runningSum = arr => {

  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i - 1] + arr[i];
  }
  return arr;

  // Your code here 
};

const evenNumOfChars = arr => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    if (str.length % 2 === 0) count++;
  }
  return count;

  // Your code here 
};


const smallerThanCurr = arr => {
  let result = []
  for (const number of arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < number) counter++;
    }
    result.push(counter);
  }
  return result;
};



const twoSum = (arr, target) => {
 for (let i  = 0; i < arr.length; i++) {
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) return true;
  }
 }
 return false;
 
};

const secondLargest = arr => {

  arr.sort();
  return arr[arr.length - 2]
};

const shuffle = (arr) => {
  const shuffledArray = [...arr];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
  }

  return shuffledArray;


};

module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
