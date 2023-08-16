document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositInputValue = getInputValueById('deposit-input');
    const previousDepositAmount = getElementPreviousValueById('deposit-total');
    const newBalanceTotal= getElementPreviousValueById('balance-total');

    if(isNaN(depositInputValue)){
        alert('Please provide a valid number');
        return;
    }

    const newDepositTotal = previousDepositAmount + depositInputValue;
    setElementValueById('deposit-total', newDepositTotal);

    const newBalance = newBalanceTotal + depositInputValue;
    setElementValueById('balance-total', newBalance);
})