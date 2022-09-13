function validate(params) {
  let status = true;
  let n = params;

  if (n == 0 || n == 1) {
    status = false;
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        status = false;
        break;
      }
    }
  }
  if (status) {
    return n;
  } else {
    return null;
  }
}

function getPrimeNumber(number) {
  let n = number;
  let arrPrime = [];

  for (let i = 1; i <= n; i++) {
    let result = validate(i);
    // console.log("result " + result);

    if (result != null) {
      arrPrime.push(result);
    }
  }

  console.log(arrPrime);
  console.log(arrPrime.length);

  return arrPrime;
}

function isEqual(a, b) {
  return a.join() == b.join();
}

let testData = 100;
let validData = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

let result = getPrimeNumber(testData);

console.log(isEqual(result, validData));
