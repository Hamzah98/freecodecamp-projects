function palindrome(str) {
  let strAr = str
    .split("")
    .filter((one) => /[a-zA-Z0-9]/.test(one))
    .map((one) => one.toLowerCase());
  console.log(strAr);

  let revStr = [...strAr];
  revStr.reverse();
  let isPal = true;
  for (let i = 0; i < strAr.length; i++) {
    console.log(revStr[i], strAr[i]);
    if (revStr[i] != strAr[i]) {
      isPal = false;
    }
  }
  console.log(isPal);
  return isPal;
}

palindrome("1 eye for of 1 eye.");
