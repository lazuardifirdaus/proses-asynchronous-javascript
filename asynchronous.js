function calculatePower(a, b, callback) { // `callback` juga salah satu dari parameter yang ada
  setTimeout(() => {
    const result = a ** b; // melakukan kalkulasi pangkat
    callback(result); // `callback` dipanggil sebagai function dengan menggunakan `result` sebagai argumennya
  }, 1000)
}

// regular function
calculatePower(5, 3, function(result) { // `result` keluar menjadi parameter variable
  console.log("Power result:", result);
});

// arrow function
calculatePower(7, 3, (result) => {
  console.log("Power result:", result);
});