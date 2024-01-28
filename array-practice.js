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
 
 
};

const secondLargest = arr => {

  // Your code here 
};

const shuffle = (arr) => {

  // Your code here 
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
