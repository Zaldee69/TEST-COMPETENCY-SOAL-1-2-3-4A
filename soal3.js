const sortArray = (arr) => {
  const even = [];
  const odd = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        //[2, 24, 32, 22, 31]
        //temp = 24
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push([arr[i]]);
    } else {
      odd.push([arr[i]]);
    }
  }
  return `Array : ${arr}
Even  : ${even}
Odd  : ${odd}`;
};

console.log(
  sortArray([2, 24, 32, 22, 31, 100, 56, 21, 99, 7, 5, 37, 97, 25, 13, 11])
);
