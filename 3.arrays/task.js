//task 1

let arr1 = [8, 9];
let arr2 = [6];
let compareArrays = (a1, a2) =>
  a1.length === a2.length &&
  a1.every((element, index) => element === a2[index]);
console.log(compareArrays(arr1, arr2));

//task2

let advancedFilter = (arr) => arr
  .filter((item) => item >= 0 && item % 3 == 0)
  .map((item) => item * 10);
console.log(advancedFilter([4, 3, 5]));
