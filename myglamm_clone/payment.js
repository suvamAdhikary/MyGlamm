let finalAmount = JSON.parse(localStorage.getItem('payable'))

let payable = document.getElementById('payment__payable--amount');
payable.innerText = `₹ ${finalAmount}.00`;


