Flag = JSON.parse(localStorage.getItem('flag'));

let currentUser;

if (Flag != null) {
    currentUser = JSON.parse(localStorage.getItem('glammUsers'))
} else {
    currentUser = JSON.parse(localStorage.getItem('glammBag'))
}


let total = 0;

function displayOrderSummary() {

    currentUser.forEach(function (ele) {

        if(ele.mobile == Flag) {

            ele.cart.forEach(function(product) {

                total += (+product.quantity * +product.price);
            })

            let checkoutTotal = document.getElementById('checkout__total');
            checkoutTotal.innerText = `₹ ${total}.00`;

            let checkoutShipping = document.getElementById('checkout__shipping');
            checkoutShipping.innerText = 'FREE';

            let checkoutDiscount = document.getElementById('checkout__discount');
            checkoutDiscount.innerText = `(₹ 0.00)`;

            let checkoutPromo = document.getElementById('checkout__promo');
            let promoButton = document.getElementById('promo__button');
            promoButton.onclick = promo;


            let checkoutPayable = document.getElementById('checkout__payable');
            checkoutPayable.innerText = `₹ ${total}.00`;
            localStorage.setItem("payable", JSON.stringify(total));

            let checkoutSaved = document.getElementById('checkout__saved')
            checkoutSaved.innerText = `₹ 0.00`;

            let checkoutEarn = document.getElementById('checkout__earn');
            checkoutEarn.innerText = `${Math.round(total * 0.1)}.00`;


            let paymentPage = document.getElementById('payment__link')
            paymentPage.onclick = function() {
                window.location.href = `payment.html`;
            }
        }
    })
}
displayOrderSummary();





function displaAdress() {

    currentUser.forEach(function (ele) {

        if(ele.mobile == Flag) {

            let heading = document.getElementById('small__heading');
            heading.innerText = `${ele.name}`

            let address = document.getElementById('small__address');
            address.innerText = `${ele.prototype.houseNo}, ${ele.prototype.strtName}, ${ele.prototype.neighbor}, ${ele.prototype.landmrk}`;

            let address2 = document.getElementById('small__address2');
            address2.innerText = `${ele.prototype.city}, ${ele.prototype.state}, ${ele.prototype.pin}`;

            let ph = document.getElementById('small__ph');
            ph.innerText = `${ele.prototype.mobile}`;

            let email = document.getElementById('small__email');
            email.innerText = `${ele.prototype.email}`;

            addressChangeBtn = document.getElementById('address__change--btn');
            // addressChangeBtn.onclick = addressChange;

            let expDelvryDate = document.getElementById('expected__delivery--date');
            expDelvryDate.innerText = `5-Sep-2021`;

            let changeBillingAddress = document.getElementById('change__billing--address');
            // changeBillingAddress.onclick = addressChange;

        }
})}
displaAdress();


let orderdProducts = document.getElementById('orderd__products');

function displayOrderdProduct() {


    currentUser.forEach(function (ele) {

        if(ele.mobile == Flag) {

            ele.cart.forEach(function(product) {        
                let div = document.createElement("div");

                let p_name = document.createElement("p")
                p_name.innerText = `${product.name}`;

                let p_price = document.createElement("p");
                p_price.innerText = '₹ ' + product.price;
        
                let image = document.createElement("img");
                image.src = product.imagesSmall[0];
        
                let totalThis = document.createElement("p");
                totalThis.innerText = `${+product.quantity}`;

                let p_t_price = document.createElement("p");
                p_t_price.innerText = `₹ ${+product.quantity * +product.price}`;


                div.append(image, p_name, totalThis, p_t_price);
        
                orderdProducts.append(div);
            })
        }
    })
}
displayOrderdProduct();


function promo () {

    let promoInput = document.getElementById("checkout__promo").value;

if (promoInput === "masai30") {
    alert("Discount Applied");
    
            
    let checkoutDiscount = document.getElementById('checkout__discount');
    checkoutDiscount.innerText = `₹ ${Math.round(total * 0.3)}.00`;

    let checkoutPayable = document.getElementById('checkout__payable');
    checkoutPayable.innerText = `₹ ${total - Math.round(total * 0.3)}.00`;
    localStorage.setItem("payable", JSON.stringify(`${total - Math.round(total * 0.3)}`));

    let checkoutSaved = document.getElementById('checkout__saved')
    checkoutSaved.innerText = `₹ ${Math.round(total * 0.3)}.00`;

    document.getElementById("checkout__promo").value = "";

} else {
    alert("Please Enter a Valid Promo Code");
    document.getElementById("checkout__promo").value = "";
}
}
