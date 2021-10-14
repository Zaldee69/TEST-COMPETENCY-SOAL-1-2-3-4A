let n = 5;
let string = "";
let isPrime = true;
// External loop
for (let i = 1; i <= n; i++) {
  // Internal loop
  for (let j = 1; j <= i; j++) {
    if (j % 2 === 0) {
      isPrime = false;
      if (isPrime === true) {
        string += i;
        string += " ";
      }
    }
  }
  string += "\n";
}
console.log(string);
