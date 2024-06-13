const showResult = (result) => {
  console.log(result);
}

const calculatePower = (a, b) => {
  const result = a ** b; // penggunaan `**` berarti pangkat, a pangkat b (a^b)
  return result;
}

const result = calculatePower(3, 2)
showResult(result)