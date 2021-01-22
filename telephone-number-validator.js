function telephoneCheck(str) {
  let bracketBool = true;
  let dashBool = true;
  let numLenEnough = false;
  let anyOtherChars = false;
  str.split("").forEach((one, index) => {
    switch (one) {
      case "(":
      case ")":
        if (index < str.length - 1) {
          bracketBool = !bracketBool;
        }
        break;
      case "-":
        if (index == 0) {
          dashBool = !dashBool;
        }
        break;
      default:
        break;
    }
    if (!/[-() ]/.test(one) && /\W/.test(one) && /\D/.test(one)) {
      anyOtherChars = true;
    }
  });

  let numArr = str.split("").filter((one) => /\d/.test(one));

  if ((numArr[0] == "1" && numArr.length == 11) || numArr.length == 10) {
    numLenEnough = true;
  }

  if (numLenEnough && bracketBool && dashBool && !anyOtherChars) {
    return true;
  } else {
    return false;
  }
}

telephoneCheck("(555)5(55?)-5555");
