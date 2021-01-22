function checkCashRegister(price, cash, cid) {
  let newPrice = price * 100;
  let newCash = cash * 100;
  let changeValues = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  let CashInRegister = cid.map((o) => {
    return [o[0], Math.round(o[1] * 100)];
  });
  let amountToBeReturned = newCash - newPrice;
  console.log(amountToBeReturned);
  let totalCashInRegister = CashInRegister.map((one) => {
    return one[1];
  }).reduce((one, value) => {
    return one + value;
  });

  if (totalCashInRegister < amountToBeReturned) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (amountToBeReturned == totalCashInRegister) {
    return { status: "CLOSED", change: [...cid] };
  } else if (amountToBeReturned < totalCashInRegister) {
    let cidArr = [];
    for (let i = CashInRegister.length - 1; i >= 0; i--) {
      if (amountToBeReturned <= 0) {
        break;
      }
      let currName = CashInRegister[i][0];
      let amountOfChange = CashInRegister[i][1];
      let amountGoingIn = 0;
      if (changeValues[i] >= amountToBeReturned) {
        continue;
      }
      while (amountOfChange > 0) {
        if (amountToBeReturned <= 0) {
          break;
        }
        if (changeValues[i] > amountToBeReturned) {
          break;
        }
        amountToBeReturned -= changeValues[i];
        amountOfChange -= changeValues[i];
        amountGoingIn += changeValues[i];

        console.log(
          "AmountGoingIN :" +
            currName +
            "," +
            amountGoingIn +
            " AmountLeftToPay: " +
            amountToBeReturned
        );
      }
      amountGoingIn /= 100;
      cidArr.push([currName, amountGoingIn]);
    }

    console.log(amountToBeReturned);
    console.log(cidArr);

    if (amountToBeReturned == 0) {
      console.log({ status: "OPEN", change: [...cidArr] });
      return { status: "OPEN", change: [...cidArr] };
    } else {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  }
}

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
