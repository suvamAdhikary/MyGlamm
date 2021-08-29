let myProducts = localStorage.getItem("glamm_products");
myProducts = JSON.parse(myProducts);

let data_div = document.getElementById("sanitize__products");

function showProducts() {
  myProducts.forEach(function (product, n) {

    if( product.category == "SANITIZING CARE") {

        let div = document.createElement("div");
        div.setAttribute("class", "product-box");
        div.onclick = function () {
          window.location.assign(`products/${n}.html`);
        };
        let p_name = document.createElement("p");
        p_name.innerText = product.name;
        let p_description = document.createElement("p");
        p_description.innerText = product.description;
        let p_price = document.createElement("p");
        p_price.innerText = "₹ " + product.price;
        let image = document.createElement("img");
        image.src = product.imagesSmall[0];
        div.append(image, p_name, p_description, p_price);
        data_div.append(div);
    }
  });
}
showProducts()