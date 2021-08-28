let makeUpLink = document.getElementById("makeup__link");
let middle = document.getElementById("middle__div");
let home = document.getElementById("home__products");
let body = document.getElementById("bodyElement");
let hairCare = document.getElementById("hair__care");
let sanitize = document.getElementById("sanitizing__care");
let collect = document.getElementById("collection");
let landing = document.getElementById("landing__page");
let modalDiv = document.createElement("div");
let imagesContainer = document.getElementsByClassName("images-container")[0];
console.log(imagesContainer);

console.log(landing);

let skinCare = document.getElementById("skin__care");

let modalProducts = localStorage.getItem("glamm_products");

//let modalDiv = document.createElement("div");

  modalProducts = JSON.parse(modalProducts );

  let makeupItems = [];
  
  modalProducts.forEach(function(p){
       if(p.category =="MAKEUP"){
           makeupItems.push(p);
       };
      
  })
  console.log(makeupItems);
modalDiv.style.position = "fixed";


makeUpLink.addEventListener("mouseover", function(){
    modalDiv.innerHTML = "";
    
    modalDiv.style.background = "white";
    
 
    modalDiv.style.width = "90%";
    modalDiv.style.height = "45vh";
    modalDiv.style.zIndex = "123";
    modalDiv.style.marginLeft = "5%"
    modalDiv.style.marginTop = "7%"
    modalDiv.style.boxShadow = "5px 5px 5px 5px rgba(0,0,0,0.5)";
    modalDiv.style.padding = "2%";
    modalDiv.style.margin = "auto";
    modalDiv.style.display = "flex";
    
    home.style.zIndex = "30";
    
    middle.append(modalDiv);
    landing.style.background = "rgba(0,0,0,0.5)";


    
    
    
     
    makeupItems.forEach(function(product){
    let div = document.createElement("div");
    let p_name = document.createElement("p");
    p_name.innerText = product.name;

    let p_description = document.createElement("p");
    p_description.innerText = product.description;

    let p_price = document.createElement("p");
    p_price.innerText = "₹ " + product.price;

    let image = document.createElement("img");
    image.src = product.imagesSmall[0];

    div.append(image, p_name, p_description, p_price);
    div.style.width = "30%";
    div.style.margin = "2%";
    modalDiv.append(div);
   
    


}) 

})

modalDiv.addEventListener("mouseleave", function(){
       modalDiv.style.display = "none";
    landing.style.background = "white";

})


let hairCareArray = [];
  
  modalProducts.forEach(function(p){
       if(p.category =="HAIR CARE"){
           hairCareArray.push(p);
       };
      
  })
  console.log(hairCareArray);


  hairCare.addEventListener("mouseover", function(){
    modalDiv.innerHTML = "";
    modalDiv.style.background = "white";
    
    
    modalDiv.style.width = "90%";
    modalDiv.style.height = "45vh";
    modalDiv.style.zIndex = "123";
    modalDiv.style.marginLeft = "5%"
    modalDiv.style.marginTop = "7%"
    modalDiv.style.boxShadow = "5px 5px 5px 5px rgba(0,0,0,0.5)";
    modalDiv.style.padding = "2%";
    modalDiv.style.margin = "auto";
    modalDiv.style.display = "flex";
   
    home.style.zIndex = "30";
    middle.append(modalDiv);
    landing.style.background = "rgba(0,0,0,0.5)";
   
    hairCareArray.forEach(function(product){
    let div = document.createElement("div");
    let p_name = document.createElement("p");
    p_name.innerText = product.name;

    let p_description = document.createElement("p");
    p_description.innerText = product.description;

    let p_price = document.createElement("p");
    p_price.innerText = "₹ " + product.price;

    let image = document.createElement("img");
    image.src = product.imagesSmall[0];

    div.append(image, p_name, p_description, p_price);

    modalDiv.append(div);
    
}) 


})

modalDiv.addEventListener("mouseleave", function(){
    modalDiv.style.display = "none";
    landing.style.background = "white";

});

let skinCareArray = [];

modalProducts.forEach(function(p){
    if(p.category =="SKIN CARE"){
        skinCareArray.push(p);
    };
   
})

skinCareArray = skinCareArray.splice(0,3);


skinCare.addEventListener("mouseover", function(){
    modalDiv.innerHTML = "";
    modalDiv.style.background = "white";
    landing.style.background = "rgba(0,0,0,0.5)";
    
    
    modalDiv.style.width = "90%";
    modalDiv.style.height = "45vh";
    modalDiv.style.zIndex = "123";
    modalDiv.style.marginLeft = "5%"
    modalDiv.style.marginTop = "7%"
    modalDiv.style.boxShadow = "5px 5px 5px 5px rgba(0,0,0,0.5)";
    modalDiv.style.padding = "2%";
    modalDiv.style.margin = "auto";
    modalDiv.style.display = "flex";
   
    home.style.zIndex = "30";
    middle.append(modalDiv);

    skinCareArray.forEach(function(product){
    let div = document.createElement("div");
    let p_name = document.createElement("p");
    p_name.innerText = product.name;

    let p_description = document.createElement("p");
    p_description.innerText = product.description;

    let p_price = document.createElement("p");
    p_price.innerText = "₹ " + product.price;

    let image = document.createElement("img");
    image.src = product.imagesSmall[0];

    div.append(image, p_name, p_description, p_price);

    modalDiv.append(div);
}) 

})

modalDiv.addEventListener("mouseleave", function(){
    modalDiv.style.display = "none";
    landing.style.background = "white";

})

let sanitizingArray = [];


modalProducts.forEach(function(p){
    if(p.category =="SANITIZING CARE"){
        sanitizingArray.push(p);
    };
   
})



sanitize.addEventListener("mouseover", function(){
    modalDiv.innerHTML = "";
    modalDiv.style.background = "white";
    landing.style.background = "rgba(0,0,0,0.5)";
    
    
    modalDiv.style.width = "90%";
    modalDiv.style.height = "45vh";
    modalDiv.style.zIndex = "123";
    modalDiv.style.marginLeft = "5%"
    modalDiv.style.marginTop = "7%"
    modalDiv.style.boxShadow = "5px 5px 5px 5px rgba(0,0,0,0.5)";
    modalDiv.style.padding = "2%";
    modalDiv.style.margin = "auto";
    modalDiv.style.display = "flex";
   
    home.style.zIndex = "30";
    middle.append(modalDiv);

    sanitizingArray.forEach(function(product){
    let div = document.createElement("div");
    let p_name = document.createElement("p");
    p_name.innerText = product.name;

    let p_description = document.createElement("p");
    p_description.innerText = product.description;

    let p_price = document.createElement("p");
    p_price.innerText = "₹ " + product.price;

    let image = document.createElement("img");
    image.src = product.imagesSmall[0];

    div.append(image, p_name, p_description, p_price);

    modalDiv.append(div);
}) 

})

modalDiv.addEventListener("mouseleave", function(){
    modalDiv.style.display = "none";
    landing.style.background = "white";

})

let collectionArray = [];
collectionArray[0] = makeupItems[0];
collectionArray[1] = skinCareArray[0];
collectionArray[3] = sanitizingArray[0];


collect.addEventListener("mouseover", function(){
    modalDiv.innerHTML = "";
    modalDiv.style.background = "white";
    landing.style.background = "rgba(0,0,0,0.5)";
    
    
    modalDiv.style.width = "90%";
    modalDiv.style.height = "45vh";
    modalDiv.style.zIndex = "123";
    modalDiv.style.marginLeft = "5%"
    modalDiv.style.marginTop = "7%"
    modalDiv.style.boxShadow = "5px 5px 5px 5px rgba(0,0,0,0.5)";
    modalDiv.style.padding = "2%";
    modalDiv.style.margin = "auto";
    modalDiv.style.display = "flex";
   
    home.style.zIndex = "30";
    middle.append(modalDiv);

    collectionArray.forEach(function(product){
    let div = document.createElement("div");
    let p_name = document.createElement("p");
    p_name.innerText = product.name;

    let p_description = document.createElement("p");
    p_description.innerText = product.description;

    let p_price = document.createElement("p");
    p_price.innerText = "₹ " + product.price;

    let image = document.createElement("img");
    image.src = product.imagesSmall[0];

    div.append(image, p_name, p_description, p_price);

    modalDiv.append(div);
}) 

})

modalDiv.addEventListener("mouseleave", function(){
    modalDiv.style.display = "none";
    landing.style.background = "white";

})