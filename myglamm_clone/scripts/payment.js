Flag = JSON.parse(localStorage.getItem('flag'));

let currentUser;

if (Flag != null) {
    currentUser = JSON.parse(localStorage.getItem('glammUsers'))
} else {
    currentUser = JSON.parse(localStorage.getItem('glammBag'))
}

let user;

currentUser.forEach((users)=> {
    if(users.mobile === Flag){
        user = users;
    }
})

let record = {
    products: null,
    bill: null,
    status: null,
    track: null,
    time: null,
}

let finalAmount = JSON.parse(localStorage.getItem('payable'))

let payable = document.getElementById('payment__payable--amount');
payable.innerText = `₹ ${finalAmount}.00`;


let showForm = document.getElementById('payment__details');

function forCard() {

    let newCrd = document.createElement('p');
    newCrd.innerText = 'New Card';

    let crdForm = document.createElement('form');
    crdForm.innerHTML = `
        <div class="pay__form--cont">
        <label for="card__number">Card Number</label>
        <input id="card__number" type="text" placeholder="XXXX - XXXX - XXXX - XXXX" required autofocous>
        </div>
        <p id="card__number--error"></p>
        

        <div class="pay__form--cont">
        <label for="cardholder__name">Cardholder’s Name</label>
        <input id="cardholder__name" type="text" placeholder="eg. Jennifer Gomes" required autofocous>
        </div>
        <p id="cardholder__name--error"></p>


        <div class="pay__form--cont">
        <div id="card__dates">
        <label for="validity__till">Validity till</label>
        <input id="validity__till--mm" type="text" placeholder="MM" required autofocous>
        <input id="validity__till--yy" type="text" placeholder="YY" required autofocous>
        </div>

        <div>
        <label for="cvv">CVV</label>
        <input id="cvv" type="password" placeholder="* * *" required autofocous>
        </div>
        </div>

        <input id="proceed__btn" type="submit" value="PROCEED TO PAY">
    `;

    showForm.append(newCrd, crdForm)

}
forCard()

let finish = document.getElementById('proceed__btn');
finish.onclick = function () {
    let time = Date(Date.now()).toString();
    
    record.products = user.cart;
    record.bill = finalAmount;
    record.status = "Pait";
    record.track = "Dispached";
    record.time = time;

    currentUser.forEach((users)=> {
        if(users.mobile === Flag){
            users.order.push(record);
            users.cart = [];
        }
    })

    localStorage.setItem("glammUsers", JSON.stringify(currentUser));

    alert("Thank you for shopping!");
    window.location.href = `index.html`;
}