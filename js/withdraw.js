function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputValue = parseFloat(inputFieldString);
    inputField.value = '';
    return inputValue;
}

function getElementPreviousValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

function setElementValueById(elementId, addedValue){
    const newValue = document.getElementById(elementId);
    newValue.innerText = addedValue;
}



document.getElementById('btn-withdraw').addEventListener('click', function () {
    // deposit balance calculation:
    const depositInputValue = getInputValueById('withdraw-input');
    const previousDepositAmount = getElementPreviousValueById('withdraw-total');

    const newDepositTotal = previousDepositAmount + depositInputValue;

    setElementValueById('withdraw-total', newDepositTotal);

    //total balance calculation:
    const newBalanceTotal= getElementPreviousValueById('balance-total');
    const newBalance = newBalanceTotal - depositInputValue;

    setElementValueById('balance-total', newBalance);
})