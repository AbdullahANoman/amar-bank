document.getElementById('btn-deposit').addEventListener('click',function(){
    const deposit = document.getElementById('deposit-field');
    const depositAmountString = deposit.value;
    const depositAmount = parseFloat(depositAmountString);

    deposit.value = '';
    if(isNaN(depositAmount)){
        alert('Please provide a number');
        return ;
    }


    const depositValue = document.getElementById('deposit-value');
    const depositFinalString = depositValue.innerText;
    const depositFinal = parseFloat(depositFinalString);



    depositValue.innerText = depositAmount+depositFinal;


    const balanceField = document.getElementById('balance-field');
    const balanceAmountString = balanceField.innerText;
    const finalBalance = parseFloat(balanceAmountString);
   
    balanceField.innerText= finalBalance+depositAmount;

    


})
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withDraw = document.getElementById('withdraw-field');
    const withDrawAmountString = withDraw.value;
    const finalWithDraw = parseFloat(withDrawAmountString);
    
    withDraw.value='';
    if(isNaN(finalWithDraw)){
        alert('Please Provide a Number');
        return;
    }
    const withDrawValue = document.getElementById('withdraw-value');
    const withDrawValueString= withDrawValue.innerText;
    const finalWithDrawValue = parseFloat(withDrawValueString);
    
    

    const balanceField = document.getElementById('balance-field');
    const balanceAmountString = balanceField.innerText;
    const finalBalance = parseFloat(balanceAmountString);
    
    if(finalWithDraw>finalBalance){
        alert('please deposit some money');
        return;
    }
    withDrawValue.innerText = finalWithDraw + finalWithDrawValue;
    balanceField.innerText = finalBalance-finalWithDraw;


    
})
