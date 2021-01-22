function rot13(str) {
  let arr = str.split("").map((one) => one.charCodeAt());
  let conArr = [];
  let newStr = "";
  arr.forEach((one) => {
    if (one <= 90 && one >= 78) {
      conArr.push(one - 13);
    } else if (one < 78 && one >= 65) {
      conArr.push(one + 13);
    } else {
      conArr.push(one);
    }
  });
  newStr = conArr.map((one) => String.fromCharCode(one)).join("");
  return newStr;
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
