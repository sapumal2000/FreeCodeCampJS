function convertToRoman(num) {
  //creating the table that will store the roman numerals
  const table = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }

  //defining the accumulator
  let accum = '';

  //for loop to iterate through the table and select the numerics
  for(const x in table){
    const number = table[x]

    //while loop to substract number from num parameter and add the symbol to accum
    while(number <= num){
      num -= number;
      accum += x;
    }

  }
  //returning the accum
  return accum;
}

convertToRoman(36); //return XXXVI
convertToRoman(100); //return C
convertToRoman(545); //return DXLV
