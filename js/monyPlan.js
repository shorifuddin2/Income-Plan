const calculateButton = document.getElementById('calculate-btn');
calculateButton.addEventListener('click',function(){
    const userInput = document.getElementById('total-income');
    document.getElementById('balance').innerText = userInput.value;
    userInput.value='';


    function updateBalance(amount, isAdd){
        const balanceTotal = document.getElementById('total-coroch');
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
        if(isAdd == true){
           balanceTotal.innerText = previousBalanceTotal + amount;
        }
        // else{
        //    balanceTotal.innerText = previousBalanceTotal - amount;
        // }
     }
    

})

const depositAmount = getInputValue('deposit-input');
   if(depositAmount > 0){
      updateTotalField('deposit-total',depositAmount);
      updateBalance(depositAmount, true);
   }

// let calculateButton =document.getElementById('calculate-btn');
// calculateButton.addEventListener('click',function(){

    // const foodInput = document.getElementById('food-input').innerText;
    // const machVaraInput = document.getElementById('mach-vara').innerText;
    // const extraInput = document.getElementById('extra-coroch').innerText;
    // const corochTotal = parseFloat(foodInput) + parseFloat(machVaraInput) + parseFloat(extraInput);
    
    // const totalCoroch = document.getElementById('total-coroch');
    // totalCoroch.innerText = corochTotal;
// })