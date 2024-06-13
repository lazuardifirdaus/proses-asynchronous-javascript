const showPowerResult = (data) => {
  console.log(data);
}

const calculatePower = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = a ** b;
      resolve(result);
    }, 1000);
  })
}

calculatePower(3, 2)
.then(res => {
  return calculatePower(res, 2);
})
.then(res => {
  return calculatePower(res, 2);
})
.then(res => {
  showPowerResult(res);
  return calculatePower(res, 2);
})
.catch(err => {
  console.log(err);
})
.finally(() => {
  console.log('Promise telah selesai!');
})

/*
Output:

6561
Promise telah selesai!

*/