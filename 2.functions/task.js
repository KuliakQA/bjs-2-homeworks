// Задание 1

let arrayList = [1, 2, 3, -100, 10];

function getArrayParams(arrayList) {
  let max = arrayList[0];
  let min = arrayList[0];
  let sum = arrayList[0];
  for (let i = 1; i < arrayList.length; i++) {
    sum += arrayList[i];
    if (arrayList[i] > max) {
      max = arrayList[i];
    }
    if (arrayList[i] < min) {
      min = arrayList[i];
    }
  }
  let avg = (sum / arrayList.length).toFixed(2);
  let average = parseFloat(avg);
  let ende = { max: max, min: min, avg: average };
  return ende;
}
console.log(getArrayParams(arrayList));

// Задание 2

function worker(arr) {
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(worker);

function makeWork(arrOfArr, func) {
  let currentSum = 0;
  let maxSum = func(arrOfArr[0]);
  for (let i = 0; i < arrOfArr.length; i++) {
    currentSum = func(arrOfArr[i]);
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
}
console.log(makeWork([[4, 5, 6], [10, 90], [1, 2, 1], [10, 89]], worker));

// Задание 3

function worker2(arr) {
  let max = arr[0];
  let min = arr[0];
  let dfrnc;
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]
    if (current > max) {
      max = current;
    } else  if (current < min) {
      min = current;
    }
    } 
  dfrnc = Math.abs(max - min);
  return dfrnc;
  }
console.log(worker2([-10, 40, 5, -50, 10]));

function makeWork2(arrOfArr, func) {
  let currentSum = 0;
  let maxSum = func(arrOfArr[0]);
  for (let i = 0; i < arrOfArr.length; i++) {
    currentSum = func(arrOfArr[i]);
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
}
console.log(makeWork2([[-10, -20, -40], [10, 20, 30]], worker2));
console.log(makeWork2([[0, 0, 0], [-1, -99]], worker2));


