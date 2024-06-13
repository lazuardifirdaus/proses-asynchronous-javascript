function calculatePower(a, b, callback) {
  setTimeout(()=>{
    const result = a ** b;
    callback(result);
  }, 1000)
}

function showPowerResult(result){ // membuat fungsi yang akan dipanggil
  console.log("Power result:", result);
}

calculatePower(2, 2, (result1) => {
  calculatePower(result1, 2, (result2) => {
    calculatePower(result2, 2, (result3) => {
      console.log('3rd power result:', result3);
    });
    console.log('2nd power result:', result2);
  });
  console.log('1st power result:', result1);
});