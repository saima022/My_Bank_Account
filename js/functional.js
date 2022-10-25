function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}

//innertext value
function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const value = parseFloat(fieldValueInText);
    fieldTag.value = '';
    return value;
}

function updateTotal(fieldId, amount) {
    // console.log(fieldId, amount);
    // const totalTag = document.getElementById(fieldId);
    // const previuosTotalInText = totalTag.innerText;
    // const previuosTotal = parseFloat(previuosTotalInText);

    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
    return newTotal;

}


function updateBalance(amount, isAdding) {
    // const balanceTag = document.getElementById('balance-total');
    // const balanceInText = balanceTag.innerText;
    // const previuosBalance = parseFloat(balanceInText);

    const previousBalance = getInnerTextValue('balance-total');
    let newBalance;
    if (isAdding == true) {
        newBalance = previousBalance + amount;

    }
    else {
        newBalance = previousBalance - amount;

    }
    // balanceTag.innerText = newBalance;
    document.getElementById('balance-total').innerText = newBalance;
}

//handle deposit
document.getElementById('deposit-button').addEventListener('click', function () {

    const amount = getInputValue('deposit-input');
    if (amount > 0) {
        updateTotal('deposit-total', amount);
        updateBalance(amount, true);
    }
});


//handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false);
    }

})