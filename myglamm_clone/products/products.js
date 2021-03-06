let imgSlider = document.getElementById("image__slider");
    let imgOnFocuse = document.getElementById("image__onfocous")
    let detailsDiv = document.getElementById("details__container");


    let myProducts = localStorage.getItem('glamm_products');

    myProducts = JSON.parse(myProducts);

// Below is the funtion for showing product details

function showProductDetails() {
    
    myProducts.forEach(function(product, n) {
 
        if(n == 0) {

            let p_name = document.createElement('h2');
            p_name.setAttribute('class', 'product__name');
            p_name.innerText = product.name;

            let p_description = document.createElement('p');
            p_description.setAttribute('class', 'product__description');
            p_description.innerText = product.description;

            let rating = document.createElement('p');
            rating.setAttribute('class', 'rating');
            rating.innerText = product.rating;

            let rating_giver = document.createElement('p');
            rating_giver.setAttribute('class', 'rating__giver');
            rating_giver.innerText = `${product.ratings} ratings`;

            let p_price = document.createElement('p');
            p_price.innerText = '₹ ' + product.price;

            let btn = document.createElement('button');
            btn.setAttribute("class", "addtobag");
            btn.innerText = 'ADD TO BAG';
            // btn.onclick = addtoCart;
            btn.onclick = function () {
                addtoCart(product);
            }

            detailsDiv.append(p_name, p_description, rating, rating_giver, p_price, btn);
        }

    })
}
showProductDetails();


// Below is the function for displaying product images

function showProductImages() {
    
    myProducts.forEach(function(product, n) {
 
        if(n == 0) {

            let div = document.createElement('div');

            let image = document.createElement('img');
            image.src = product.imagesSmall[0];
            image.setAttribute("id","featured");
            let btn = document.createElement('button');
            btn.setAttribute("class", "addtobag");
            btn.innerText = 'ADD TO BAG';
            btn.onclick = function () {
                addtoCart(product);
            }

            imgOnFocuse.append(image);
        }

    })

}
showProductImages();



let pics = myProducts[0].imagesSmall;


let mainDiv = document.getElementById("mainImgDiv");
let imageSlider = document.createElement("div");
imageSlider.setAttribute("id","sliderOut");

let featuredImg = document.getElementById("featured");
let rightImgSlide = document.createElement("img");
let leftImgSlide = document.createElement("img");
imageSliderIn = document.createElement("div");
imageSliderIn.setAttribute("id","slider");
leftImgSlide.src = "https://www.myglamm.com/images/slickArrowLeft.svg";
rightImgSlide.src = "https://www.myglamm.com/images/slickArrowRight.svg";

rightImgSlide.setAttribute("id","rtSlide");
leftImgSlide.setAttribute("id","ltSlide");

imageSlider.append(leftImgSlide);







let picture = document.createElement("img");
picture.setAttribute("id", "thumbnails");

picture.src = pics[0];

picture.addEventListener("mouseover", function(){
     featuredImg.src = picture.src;
})

imageSliderIn.append(picture);


let picture2 = document.createElement("img");
picture2.setAttribute("id", "thumbnails");

picture2.src = pics[1];

picture2.addEventListener("mouseover", function(){
     featuredImg.src = picture2.src;
})
imageSliderIn.append(picture2);



let picture3 = document.createElement("img");
picture3.setAttribute("id", "thumbnails");

picture3.src = pics[2];

picture3.addEventListener("mouseover", function(){
     featuredImg.src = picture3.src;
})

imageSliderIn.append(picture3);


let picture4 = document.createElement("img");
picture4.setAttribute("id", "thumbnails");

picture4.src = pics[3];

picture4.addEventListener("mouseover", function(){
     featuredImg.src = picture4.src;
})

imageSliderIn.append(picture4);


let picture5 = document.createElement("img");
picture5.setAttribute("id", "thumbnails");

picture5.src = pics[4];

picture5.addEventListener("mouseover", function(){
     featuredImg.src = picture5.src;
})
imageSliderIn.append(picture5);
imageSlider.append(imageSliderIn);

imageSlider.append(rightImgSlide);

mainDiv.append(imageSlider);


let rightClick = document.getElementById("rtSlide");
let leftClick = document.getElementById("ltSlide");


rightClick.addEventListener("click",function(){
       document.getElementById("slider").scrollLeft += 180
})

leftClick.addEventListener("click",function(){
       document.getElementById("slider").scrollLeft -= 180
})











// Below is the function for add to bag


if(localStorage.getItem("glammBag") === null) {
    localStorage.setItem("glammBag", JSON.stringify([]));
}

let Flag = JSON.parse(localStorage.getItem('flag'));

let user = localStorage.getItem("glammUsers");
user = JSON.parse(user)

let check = [];

function addtoCart(p) {

    let cart_data = JSON.parse(localStorage.getItem("glammBag"));



    if(check.includes(p.name) == true) {
        alert("Product is Already in The Cart.");

        if (Flag != null) {

            user.forEach(function(ele) {

                if(ele.mobile == Flag) {
    
                    for(let i = 0; i < ele.cart.length; i++) {
                        if(ele.cart[i].name === p.name) {
                            +ele.cart[i].quantity++;
                        }
                    }
                }
            })
        } else {

            for(let i = 0; i < cart_data.length; i++) {
                if(cart_data[i].name === p.name) {
                    +cart_data[i].quantity++;
                }
            }
        }


    } else {
        check.push(p.name)
        p.quantity = 1;

        if(Flag != null) {

            user.forEach(function(ele) {

                if(ele.mobile == Flag) {

                    ele.cart.push(p)

                }
            })
        } else {

            cart_data.push(p);
        }
    }

    if(Flag != null) {

        localStorage.setItem("glammUsers", JSON.stringify(user));
    } else {

        localStorage.setItem("glammBag", JSON.stringify(cart_data));
    }
}