document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositInputElement = document.getElementById('deposit-input');
    const depositInputElementString = depositInputElement.value;
    const depositInput = parseFloat(depositInputElementString);

    depositInputElement.value = '';
    if (isNaN(depositInput)) {
        alert('Please provide a valid number.');
        return;
    }

    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotalElementString = depositTotalElement.innerText;
    const depositTotal = parseFloat(depositTotalElementString);

    const totalDepositAmount = depositInput + depositTotal;
    depositTotalElement.innerText = totalDepositAmount;



    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalElementString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalElementString);

    const newBalanceTotal = balanceTotal + depositInput;

    balanceTotalElement.innerText = newBalanceTotal;
})