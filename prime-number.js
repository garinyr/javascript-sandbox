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
    console.log('Prime Number');
  } else {
    console.log('Not Prime Number');
  }
}

let testData = 100;

validate(testData);
