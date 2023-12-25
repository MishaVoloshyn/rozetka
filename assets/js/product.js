let templateL = document.querySelector("#temp_product").innerHTML;
let out = document.querySelector("#outProduct");


const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const productID = urlParams.get('product')
console.log(productID);


const product = products[productID-1];
let html = Mustache.render(templateL, product);
out.insertAdjacentHTML("beforeend", html);


$('#lightSlider').lightSlider({
    gallery: true,
    item: 1,
    loop:true,
    slideMargin: 0,
    thumbItem: 9
});