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

$(document).ready(function() {
    $('#imageGallery').lightSlider({
        gallery:true,
        minSlide:1,
        maxSlide:1,
        currentPagerPosition:'left'
    });
});