const showResult = (data) => {
  console.log("Power Result: ", data);
}

const calculatePower = (a, b, callback) => {
  setTimeout(() => { // tambahkan timeout untuk menambahkan delay sebuah function
    const result = a ** b;
    callback(result);
  }, 1000);
}

const result = calculatePower(3, 2, showResult);
showResult(result);