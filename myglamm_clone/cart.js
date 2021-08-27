Flag = JSON.parse(localStorage.getItem('flag'));

let currentCart;

if (Flag != null) {
    currentCart = JSON.parse(localStorage.getItem('glammUsers'))
} else {
    currentCart = JSON.parse(localStorage.getItem('glammBag'))
}


let total = 0;

let totalProducts = 0;

let bagDiv = document.getElementById("bag__items");
let checkOut = document.getElementById("checkout__btn");
let checkOutLink = document.getElementById("checkout__link");

// var end = document.getElementById("pay");

function showBag() {

    if(Flag != null) {

        currentCart.forEach(function(ele) {

            if(ele.mobile == Flag) {
                
                ele.cart.forEach(function(product) {

                    totalProducts += +product.quantity;

                    total += (+product.quantity * +product.price);
            
                    let div = document.createElement("div");
            
                    let p_name = document.createElement("p");
                    p_name.innerText = product.name;
            
                    let p_price = document.createElement("p");
                    p_price.innerText = '₹ ' + product.price;
            
                    let image = document.createElement("img");
                    image.src = product.imagesSmall[0];
            
                    let totalThis = document.createElement("input");
                    totalThis.setAttribute('type', 'number');
                    totalThis.setAttribute('value', `${product.quantity}`);
                    totalThis.setAttribute('placeholder', `${+product.quantity}`);

                    let p_t_price = document.createElement("p");
                    p_t_price.innerText = `₹ ${+product.quantity * +product.price}`;

                    let crossBtn = document.createElement('button');
                    crossBtn.innerText = 'X';

                    checkOutLink.href = `checkout.html`;
            
                    div.append(image, p_name, p_price, totalThis, p_t_price, crossBtn);
            
                    bagDiv.append(div);
                })
            }
        })
    } else {

        currentCart.forEach(function (product) {


            totalProducts += +product.quantity;

            total += (+product.quantity * +product.price);
    
            let div = document.createElement("div");
    
            let p_name = document.createElement("p");
            p_name.innerText = product.name;
    
            let p_price = document.createElement("p");
            p_price.innerText = '₹ ' + product.price;
    
            let image = document.createElement("img");
            image.src = product.imagesSmall[0];
    
            let totalThis = document.createElement("input");
            totalThis.setAttribute('type', 'number');
            totalThis.setAttribute('value', `${product.quantity}`);
            totalThis.setAttribute('placeholder', `${+product.quantity}`);

            let p_t_price = document.createElement("p");
            p_t_price.innerText = `₹ ${+product.quantity * +product.price}`;

            let crossBtn = document.createElement('button');
            crossBtn.innerText = 'X';

            checkOutLink.href = `checkoutGuest.html`;
    
            div.append(image, p_name, p_price, totalThis, p_t_price, crossBtn);
    
            bagDiv.append(div);
    
        })
    }

    let totalItems = document.getElementById("total__products");
    totalItems.innerText = `${totalProducts}`;
    
    let totalPrice = document.getElementById("checkout__price");
    totalPrice.innerText = `₹ ${total}`;
    
    let cashbackOffer = document.getElementById("cashback");
    cashbackOffer.innerText = `₹ ${total * 0.10} MyGlammXO Points`;

}
showBag()