document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawInputElement = document.getElementById('withdraw-input');
    const withdrawInputElementString = withdrawInputElement.value;
    const withdrawInput = parseFloat(withdrawInputElementString);

    withdrawInputElement.value = '';

    if (isNaN(withdrawInput)) {
        alert('Please provide a valid number');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalElementString = withdrawTotalElement.innerText;
    const withdrawTotal = parseFloat(withdrawTotalElementString);


    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalElementString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalElementString);

    if (withdrawInput > balanceTotal) {
        alert('You can not withdraw more than your amount.')
        return;
    }

    const totalWithdrawAmount = withdrawTotal + withdrawInput;
    withdrawTotalElement.innerText = totalWithdrawAmount;

    const newBalanceTotal = balanceTotal - withdrawInput;
    balanceTotalElement.innerText = newBalanceTotal;
})