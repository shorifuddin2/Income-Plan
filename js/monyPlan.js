function costValue(costing) {
  const CostingMoney = document.getElementById(costing + '-cost');
  const PriceText = CostingMoney.value;
  const Price = parseFloat(PriceText);
  if (Price < -1) {
      alert('please a positive number')
  }
  else if (isNaN(Price)) {
      alert('please  a number not a string')
  }
  return Price;
};

document.getElementById('calculate-button').addEventListener('click', function () {
  const inputIncomeRaw = document.getElementById('input-income');
  const inputIncomeValue = inputIncomeRaw.value;

  const inputFoodValue = costValue('input-food');

  const inputRentValue = costValue('input-rent');

  const inputClothesValue = costValue('input-Clothes');

  // total experience  
  const experienceTotal = inputFoodValue + inputRentValue + inputClothesValue;

  // balance total after expenses 
  const balanceForTotal = inputIncomeValue - experienceTotal;

  //  set inner text for total experience 
  const totalExpansesValue = document.getElementById('total-expenses');
  const totalExpansesText = balanceForTotal.innerText;
  const totalExpensesPrice = parseFloat(totalExpansesText);

  // total expanses balance
  totalExpansesValue.innerText = experienceTotal;
  //  set inner text for balance money 
  const balanceMoney = document.getElementById('balance-money');
  const balanceMoneyText = balanceMoney.innerText;
  const balanceMoneyTotal = parseFloat(balanceMoneyText);

  // my balance
  balanceMoney.innerText = balanceForTotal;

  if (inputIncomeValue < experienceTotal) {
      alert('your expenses is more then your balance');
  }
});

document.getElementById('save-button').addEventListener('click', function () {
  const inputIncomeRaw = document.getElementById('input-income');
  const inputIncomeValue = inputIncomeRaw.value;

  // for saved ballance
  const saveBalanceText = document.getElementById('saved-balance');
  const saveBalanceValue = saveBalanceText.innerText;
  const savedBallance = parseFloat(saveBalanceValue);

  // for present
  const present = document.getElementById('present');
  const presentValue = present.value;
  const presentOutput = parseFloat(presentValue);

  //for error massage
  if (isNaN(presentOutput)) {
      alert('please input a number')
  }
  else if (presentOutput < -1) {
      alert('please input a positive number')
  }

  const savedBalanceTotal = inputIncomeRaw.value / 100 * presentOutput;
  saveBalanceText.innerText = savedBalanceTotal;

  // for balance money
  const balanceMoney = document.getElementById('balance-money');
  const balanceMoneyText = balanceMoney.innerText;
  const balanceMoneyTotal = parseFloat(balanceMoneyText);

  //for remaining ballance
  const remainingBalance = document.getElementById('remaining-balance');
  const remainingBalanceText = remainingBalance.innerText;
  const remainingTotalValue = parseFloat(remainingBalanceText);
  const totalRemainingBalance = balanceMoneyTotal - savedBalanceTotal;
  remainingBalance.innerText = totalRemainingBalance;

  // for error part 
  if (balanceMoneyTotal < savedBalanceTotal) {
      alert('you cant save more balance then your extra balance')
  }

  //for clear present value input
  present.value = '';

});