


var accounts = {
    '12345': { pin: '1234', balance: 10000 },
    '67890': { pin: '5678', balance: 5000 },
};
var currentAccount = null;

function login() {
    var accountNumber = document.getElementById('accountNumber').value;
    var pin = document.getElementById('pin').value;

    if (accounts[accountNumber] && accounts[accountNumber].pin === pin) {
        currentAccount = accounts[accountNumber];
        showAtmSection();
    } else {
        document.getElementById('error-message').textContent = 'Invalid account number or PIN';
    }
}

function showAtmSection() {
    
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('atm-section').style.display = 'block';
    document.getElementById('balance').textContent = currentAccount.balance;
}

function withdraw() {
    var amount = prompt("Enter the amount to withdraw:");

    if (amount && !isNaN(amount)) {
        var withdrawalAmount = parseFloat(amount);

        if (withdrawalAmount <= currentAccount.balance) {
            currentAccount.balance -= withdrawalAmount;
            alert(`You have withdrawn ${withdrawalAmount} Rs. New balance: ${currentAccount.balance} Rs.`);
            document.getElementById('balance').textContent = currentAccount.balance;
        } else {
            alert("Insufficient balance!");
        }
    } else {
        alert("Please enter a valid amount.");
    }
}

function checkBalance() {
    alert(`Your current balance is ${currentAccount.balance} Rs.`);
}

function logout() {
    currentAccount = null;
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('atm-section').style.display = 'none';
    document.getElementById('accountNumber').value = '';
    document.getElementById('pin').value = '';
    document.getElementById('error-message').textContent = '';
}