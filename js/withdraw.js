document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawInputValue = getInputValueById('withdraw-input')
    const previousWithdrawAmount = getElementPreviousValueById('withdraw-total');
    const previousBalanceAmount = getElementPreviousValueById('balance-total');

    if(isNaN(withdrawInputValue)){
        alert('Please Provide a valid number.');
        return;
    }
    if(withdrawInputValue>previousBalanceAmount){
        alert('You cannot withdraw more than your amount.');
        return;
    }
    
    const newWithdrawAmount = previousWithdrawAmount + withdrawInputValue;
    setElementValueById('withdraw-total', newWithdrawAmount);

    const newBalanceAmount = previousBalanceAmount - withdrawInputValue;
    setElementValueById('balance-total', newBalanceAmount);
})