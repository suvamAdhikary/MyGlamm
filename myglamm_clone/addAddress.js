Flag = JSON.parse(localStorage.getItem('flag'));

let shipping;
let currentUser;

if (Flag != null) {
    currentUser = JSON.parse(localStorage.getItem('glammUsers'))
} else {
    currentUser = JSON.parse(localStorage.getItem('glammBag'))
}


function shippingAddress(name, mobile, email, type, houseNo, strtName, ngbr, pin, city, state, landmrk, def) {

    this.name = name;
    this.mobile = mobile;
    this.email = email;
    this.type = type;
    this.houseNo = houseNo;
    this.strtName = strtName;
    this.neighbor = ngbr;
    this.pin = pin;
    this.city = city;
    this.state = state;
    this.landmrk = landmrk;
    this.isDefault = def;

}


let issDefault = document.getElementById('mark__default');
issDefault.onclick = function() {
    issDefault.setAttribute('value', 'true')
}


function submitAddress(e) {
    e.preventDefault();

    let name = document.getElementById('address__name').value;

    let mobile = document.getElementById('address__tel').value;

    let email = document.getElementById('address__email').value;

    let type = document.getElementById('address__type').value;

    let houseNo = document.getElementById('address__house--no').value;

    let streetName = document.getElementById('address__street--name').value;

    let neighbor = document.getElementById('address__neighborhood').value;

    let pin = document.getElementById('address__pincode').value;

    let city = document.getElementById('address__city').value;

    let state = document.getElementById('address__state').value;

    let landmark = document.getElementById('address__landmark').value;

    let isDefault = document.getElementById('mark__default').value;


    currentUser.forEach(function (ele) {

        if(ele.mobile == Flag) {

            ele.prototype = new shippingAddress(name, mobile, email, type, houseNo, streetName, neighbor, pin, city, state, landmark, isDefault, shipping);

        }
    });

    localStorage.setItem('glammUsers', 'currentUser');

    window.location.assign(`checkout.html`)
}

let backtoBag = document.getElementById('backto__bag');
backtoBag.onclick = function() {
    window.location.assign(`cart.html`);
}