function convertToRoman(num) {
  let romaStr = [];
  let ones = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  let tens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  let hundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  let thousands = ["M", "MM", "MMM", "MMMM"];
  if (num > 9) {
    let count = 1;
    while (num > 0) {
      let newDigit = num % 10;
      console.log(newDigit);
      if (count == 1) {
        romaStr.unshift(ones[newDigit - 1]);
      } else if (count == 2) {
        romaStr.unshift(tens[newDigit - 1]);
      } else if (count == 3) {
        romaStr.unshift(hundreds[newDigit - 1]);
      } else if (count == 4) {
        romaStr.unshift(thousands[newDigit - 1]);
      }
      num = parseInt(num / 10);
      count++;
    }
    romaStr = romaStr.join("");
    return romaStr;
  } else {
    romaStr = ones[num - 1];
    return romaStr;
  }
}

convertToRoman(3999);
