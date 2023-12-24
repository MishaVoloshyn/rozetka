// Все товары
let products = [
    {
        id: 1,
        full_name: 'Монитор 23.8" Acer Nitro VG240YM3bmiipx (UM.QV0EE.304) FHD IPS / 180Hz / 1 ms / 8-Bit / sRGB 99% / FreeSync Premium / Adaptive-Sync / G-Sync Сompatible / Speakers 2w',
        name: '',
        brand: 'Acer',
        image: '1.webp',
        prev_price: 6799,
        price: 5599,
        stars: 2,
        bg_color: 'yellow',
        text: 'ТОП ПРОДАЖ',
        code: 396691521,
        diagonal: '23.8"',
        max_res: '1920x1080 (FullHD)',
        matrix: '1 ms (GtG) / 0.5 ms (GtG, Min.)',
        brightness: '250 cd/m²',
        mtype: 'IPS',
        contrast: '1000:1',
        peculiarities: '"Frameless" (Cinema screen) Flicker-Free'
    },
    {
        id: 2,
        full_name: 'Монитор 23.8" Asus TUF Gaming VG246H1A (90LM08F0-B01170) IPS FHD 100Гц / 0,5 мс (MPRT) / Extreme Low Motion Blur / 110% sRGB / AMD FreeSync / Adaptive Sync / Low Blue Light / Shadow Boost / Flicker-free',
        name: '',
        brand: 'Asus',
        image: '2.webp',
        prev_price: 5699,
        price: 4999,
        stars: 5,
        bg_color: 'yellow',
        text: 'ТОП ПРОДАЖ',
        code: 391681341,
        diagonal: '23.8"',
        max_res: '1920x1080 (FullHD)',
        matrix: '0.5 мс MPRT',
        brightness: '300 cd/m²',
        mtype: 'IPS',
        contrast: '13001',
        peculiarities: '"Frameless" (Cinema screen) Flicker-Free'
    },
    {
        id: 3,
        full_name: 'Монитор 27" Samsung Odyssey AG50 S27AG502NI (LS27AG502PIXCI)',
        name: '',
        brand: 'Samsung',
        image: '3.webp',
        prev_price: 13699,
        price: 4999,
        stars: 4,
        bg_color: 'yellow',
        text: 'ТОП ПРОДАЖ',
        code: 391681341,
        diagonal: '23.8"',
        max_res: '1920x1080 (FullHD)',
        matrix: '0.5 мс MPRT',
        brightness: '300 cd/m²',
        mtype: 'IPS',
        contrast: '13001',
        peculiarities: '"Frameless" (Cinema screen) Flicker-Free'
    },
    {
        id: 4,
        full_name: 'Монитор ASUS 24” VY249HGE (90LM06A5-B02370) IPS FHD 144Гц / 8-Bit / Adaptive Sync / Freesync Premium',
        name: '',
        brand: 'ASUS',
        image: '4.webp',
        prev_price: 6499,
        price: 5999,
        stars: 4,
        bg_color: 'yellow',
        text: 'ТОП ПРОДАЖ',
        code: 391681341,
        diagonal: '24"',
        max_res: '1920x1080 (FullHD)',
        matrix: '1ms MPRT',
        brightness: '250cd/m²',
        mtype: 'IPS',
        contrast: '1,000:1 (Typical)',
        peculiarities: 'Flicker-Free'
    },
    {
        id: 5,
        full_name: 'Монитор 27" MSI Optix G27CQ4 E2 -- QHD VA Curved 170Hz / 8-Bit + FRC / sRGB 114% / Adaptive Sync / G-SYNC Compatible / Freesync Premium / Console Mode 120Hz',
        name: '',
        brand: 'MSI',
        image: '5.webp',
        prev_price: 10999,
        price: 8999,
        stars: 4,
        bg_color: 'red',
        text: '-18%',
        code:  184823836,
        diagonal: '27"',
        max_res: '2560x1440 (2K QHD)',
        matrix: '1 мс (MPRT) / 4 мс (GtG)',
        brightness: '250 кд/м²',
        mtype: 'VA',
        contrast: '3000:1',
        peculiarities: '"Безрамочный" (Сinema screen) Изогнутый экран'
    },
    {
        id: 6,
        full_name: 'Монитор 27" Acer Nitro VG271UM3bmiipx (UM.HV1EE.301) 2K QHD IPS / 180Hz / 1 ms (GtG) / 8-Bit / HDR10 / FreeSync Premium / G-Sync Сompatible',
        name: '',
        brand: 'Acer',
        image: '6.webp',
        prev_price: 11999,
        price: 9599,
        stars: 4,
        bg_color: 'red',
        text: '-20%',
        code:  391147500,
        diagonal: '27"',
        max_res: '2560x1440 (2K QHD)',
        matrix: '0.5 ms (VRB) / 1 ms (GTG)',
        brightness: '250 кд/м²',
        mtype: 'IPS',
        contrast: '1000:1',
        peculiarities: '"Frameless" (Cinema screen) Flicker-Free'
    },
    {
        id: 7,
        full_name: 'Mонитор 23.5" Samsung Curved LS24C366 (LS24C366EAIXCI)',
        name: '',
        brand: 'Samsung',
        image: '7.webp',
        prev_price: 5299,
        price: 4399,
        stars: 4,
        bg_color: 'yellow',
        text: 'ТОП ПРОДАЖ',
        code:  377085990,
        diagonal: '23.5"',
        max_res: '1920x1080 (FullHD)',
        matrix: '4 мс',
        brightness: '250 кд/м²',
        mtype: 'VA',
        contrast: '3000:1',
        peculiarities: 'Изогнутый экран'
    },
    {
        id: 8,
        full_name: 'Монитор 27" HP Omen Hewlett-Packard Gaming Monitor 27c (35D67AA) QHD VA 1000R / 240Hz / 1 ms / 8-Bits / Local Dimming 8 зон / DisplayHDR 400 / 92% DCI-P3 / FreeSync Premium Pro / G-SYNC Compatible',
        name: '',
        brand: 'HP',
        image: '8.webp',
        prev_price: 16399,
        price: 12599,
        stars: 4,
        bg_color: 'red',
        text: '-23%',
        code:  390580896,
        diagonal: '27"',
        max_res: '2560x1440 (2K QHD)',
        matrix: '1 мс',
        brightness: '450 кд/м² (пиковая)',
        mtype: 'VA',
        contrast: '3000:1 (статическая)',
        peculiarities: '"Безрамочный" (Сinema screen)\n' +
            'Flicker-Free\n' +
            'USB-концентратор\n' +
            'Изогнутый экран\n' +
            'Регулировка по высоте'
    },
    {
        id: 10,
        full_name: 'Монитор 27" MSI Gaming Quantum Dot G274QPF QD -- Rapid IPS 1ms GtG / 2K 170Hz / 8 Bit + FRC / DCI-P3 95% / DisplayHDR 400 / G-Sync Compatible / FreeSync Premium',
        name: '',
        brand: 'MSI',
        image: '9.webp',
        prev_price: 13999,
        price: 12399,
        stars: 4,
        bg_color: 'yellow',
        text: 'ТОП ПРОДАЖ',
        code:  384196134,
        diagonal: '27"',
        max_res: '2560x1440 (2K QHD)',
        matrix: '1ms GtG',
        brightness: '300 (Typ.) 400 (HDR Peak)',
        mtype: 'IPS',
        contrast: '3000:1 (статическая)',
        peculiarities: '"Безрамочный" (Сinema screen) Flicker-Free'
    },
    {
        id: 10,
        full_name: 'Монитор 25" ASRock CL25FF -- FHD IPS / 100Hz / 1ms (MPRT) / 8-Bit / sRGB 99% / FreeSync / AMD Adaptive Sync / Flicker Free / Low Blue Light',
        name: '',
        brand: 'ASRock',
        image: '10.webp',
        prev_price: 5299,
        price: 4099,
        stars: 4,
        bg_color: 'yellow',
        text: 'ТОП ПРОДАЖ',
        code:  405229611,
        diagonal: '24.5"',
        max_res: '1920x1080 (FullHD)',
        matrix: '1ms(MPRT), 4ms(GTG)',
        brightness: '300 кд/м²',
        mtype: 'IPS',
        contrast: '1000:1',
        peculiarities: 'Flicker-Free'
    },
    {
        id: 11,
        full_name: 'Монитор 23.8" Samsung S24С330 (LS24C330GAIXCI) FullHD IPS / 100Hz / 4 мс (GtG) / 8-Bit / sRGB 100% / AMD FreeSync / Adaptive-Sync',
        name: '',
        brand: 'Samsung',
        image: '11.webp',
        prev_price: 4999,
        price: 4399,
        stars: 4,
        bg_color: 'yellow',
        text: 'ТОП ПРОДАЖ',
        code:  397840434,
        diagonal: '23.8"',
        max_res: '1920x1080 (FullHD)',
        matrix: '4 мс (GtG)',
        brightness: '250 кд/м²',
        mtype: 'IPS',
        contrast: '1000:1',
        peculiarities: 'Flicker-Free'
    },
    {
        id: 12,
        full_name: 'Монитор 23.8" Asus VG249Q (90LM05E0-B03170) Adaptive-Sync / G-SYNC Compatible / FreeSync Premium',
        name: '',
        brand: 'Asus',
        image: '12.webp',
        prev_price: 7599,
        price: 6999,
        stars: 4,
        bg_color: 'red',
        text: '-8%',
        code:  171456965,
        diagonal: '23.8"',
        max_res: '1920x1080 (FullHD)',
        matrix: '1ms MPRT / 4ms GtG',
        brightness: '250 кд/м²',
        mtype: 'IPS',
        contrast: '1000:1',
        peculiarities: '"Безрамочный" (Сinema screen)\n' +
            'Поворотный экран (Pivot)\n' +
            'Регулировка по высоте'
    },
    {
        id: 13,
        full_name: 'Монитор 23.8" Acer Nitro Gaming VG240YEbmiix (UM.QV0EE.E09) FHD IPS / 100 Гц / 1 ms VRB / AMD FreeSync / BlueLightShield / Flickerless / Low Dimming',
        name: '',
        brand: 'Acer',
        image: '13.webp',
        prev_price: 5299,
        price: 4599,
        stars: 5,
        bg_color: 'red',
        text: '-13%',
        code:  396674919,
        diagonal: '23.8"',
        max_res: '1920x1080 (FullHD)',
        matrix: '1 мс (VRB)',
        brightness: '250 кд/м²',
        mtype: 'IPS',
        contrast: '1000:1',
        peculiarities: '"Безрамочный" (Сinema screen) Flicker-Free'
    },
    {
        id: 14,
        full_name: 'Mонитор 31.5" Samsung Odyssey G5 LC32G55T Black (LC32G55TQWIXCI / LC32G55TQBIXCI)',
        name: '',
        brand: 'Samsung',
        image: '14.webp',
        prev_price: 10999,
        price: 10299,
        stars: 5,
        bg_color: 'yellow',
        text: 'ТОП ПРОДАЖ',
        code:  396344919,
        diagonal: '31.5"',
        max_res: '2560x1440 (2K QHD)',
        matrix: '1 мс (VRB)',
        brightness: '250 кд/м²',
        mtype: 'VA',
        contrast: '2500:1',
        peculiarities: '"Безрамочный" (Сinema screen)\n' +
            'Flicker-Free\n' +
            'Изогнутый экран'
    },
    {
        id: 15,
        full_name: 'Mонитор 31.5" Samsung Odyssey G5 LC32G55T Black (LC32G55TQWIXCI / LC32G55TQBIXCI)',
        name: '',
        brand: 'Samsung',
        image: '15.webp',
        prev_price: 6999,
        price: 5499,
        stars: 5,
        bg_color: 'red',
        text: '-21%',
        code:  456346919,
        diagonal: '23.8"',
        max_res: '2560x1440 (2K QHD)',
        matrix: '1 мс (MPRT), 4 мс (GtG)',
        brightness: '250 кд/м²',
        mtype: 'VA',
        contrast: '3000:1',
        peculiarities: '"Безрамочный" (Сinema screen) Flicker-Free Поддержка HDR'
    },
    {
        id: 16,
        full_name: 'Монитор 28" Samsung Odyssey G7 LS28BG702 (LS28BG702EIXUA) UHD 4K HDR400 / IPS 8-Bit + FRC / 144Гц / DCI-P3 90% / G-SYNC Compatible / AMD FreeSync Premium Pro / HDMI 2.1 Console Ready / Tizen Smart TV / Wi-Fi / Bluetoot',
        name: '',
        brand: 'Samsung',
        image: '16.webp',
        prev_price: 20999,
        price: 18999,
        stars: 5,
        bg_color: 'red',
        text: 'АКЦИЯ',
        code:  372354219,
        diagonal: '28"',
        max_res: '3840x2160 (4K UltraHD)',
        matrix: '1 мс',
        brightness: '300 кд/м2',
        mtype: 'IPS',
        contrast: '1000:1 (Typ)',
        peculiarities: '"Безрамочный" (Сinema screen)\n' +
            'Bluetooth\n' +
            'Flicker-Free\n' +
            'Smart TV\n' +
            'USB-концентратор\n' +
            'Wi-Fi\n' +
            'Поворотный экран (Pivot)\n' +
            'Регулировка по высоте'
    }
];

//счетчик для корзины web+mobile
let counter1 = document.querySelector('#cart_count1');
let counter2 = document.querySelector('#cart_count2');

//работа с элементами корзины
let sum = document.querySelector('#sum');
let sale = document.querySelector('#sale');
let total = document.querySelector('#total');

//массив товаров в корзине
let listCards = [];

//массив промокодов
let promoCode = [
    {
        code: "Rozetka2024",
        discount: 200
    },
    {
        code: "mm227",
        discount: 300
    },
    {
        code: "ASUSF17",
        discount: 400
    }
];

//работа с шаблоном товара
let template = document.querySelector('#template').innerHTML;
let output = document.querySelector("#output");

//добавление товаров на страницу
for (let i = 0; i < products.length; i++)
{
    products[i].name  = products[i].full_name.slice(0, 60);
    const productData = products[i];
    let html = Mustache.render(template, productData);
    output.insertAdjacentHTML("beforeend", html);
}

//Сохранение кол-ва товаров в корзине на сервере
const storedResult = localStorage.getItem("counter1");

let res;
if (storedResult === null)
{
    res = CheckCounter();
    localStorage.setItem("counter1", res);
}
else
{
    res = localStorage.getItem("counter1");
    //renderCart();
}
counter1.textContent = res;
counter2.textContent = res;

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

let addButton = document.getElementsByClassName("cartBut");
const buttons = document.getElementsByTagName("button");
const result = document.getElementById("result");

function CountPrice() {
    let sum = 0;
    for (let i = 0; i < listCards.length; i++) {
        sum += listCards[i].price;
    }
    return sum;
}

function CheckCounter()
{
    if(listCards.length === 0){
        counter1.textContent = '0';
        counter2.textContent = '0';
        sum.textContent = '0';
        sale.textContent = '0';
        total.textContent = '0';
        return "0";
    }
    else{
        counter1.textContent = listCards.length;
        counter1.textContent = listCards.length;
        sum.textContent = CountPrice();
        total.textContent = sum.textContent;
        return listCards.length;
    }
}

// Функция для проверки промокода
let counterPromo = 0;
function checkPromoCode(code) {
    // Проверить, есть ли промокод в массиве
    for (let i = 0; i < promoCode.length; i++) {
        if (promoCode[i].code === code) {
            counterPromo = i;
            return true;
        }
    }
    return false;
}

// Обработка события input-элемента promoCode
document.getElementById("promoCode").addEventListener("change", (e) => {
    // Получить значение промокода из input-элемента
    let promo = e.target.value;

    // Проверить промокод
    let isPromoCodeValid = checkPromoCode(promo);

    // Показать сообщение о результате проверки
    let promoCodeStatus = document.getElementById("promoCodeStatus");

    if (isPromoCodeValid) {
        promoCodeStatus.innerHTML = "Промокод действителен";
        promoCodeStatus.style.color = "green";
        sale.textContent = promoCode[counterPromo].discount;
        total.textContent = sum.textContent - sale.textContent;
    } else {
        promoCodeStatus.innerHTML = "Промокод недействителен";
        promoCodeStatus.style.color = "red";
        total.textContent = sum.textContent
    }
    if(promo === '')
    {
        promoCodeStatus.innerHTML = "";
        total.textContent = sum.textContent;
    }
    if(listCards.length === 0)
    {
        promoCodeStatus.innerHTML = "Добавьте товар в корзину!";
        promoCodeStatus.style.color = "red";
        sale.textContent = 0;
        total.textContent = 0;
    }
});

function TotalPrice()
{
    alert("We are here!");
    let total = sum - promoCode[counterPromo].discount;
    console.log(total);
    return total;
}

//поиск id кликнутой кнопки
const buttonPressed = e => {
    let cardId = e.target.id-1;
    addToCart(cardId);
    //проверка
    //result.innerHTML = `ID of <em>${e.target.innerHTML}</em> is <strong>${e.target.id}</strong>`;
}

for (let button of addButton) {
    button.addEventListener("click", buttonPressed);
}

//функция
let templateCard = document.querySelector('#templateCard').innerHTML;
let listCard = document.querySelector('#listCard');
function addToCart(id)
{
    localStorage.setItem("counter1", listCards.length+1);
    const productInCart = products[id];
    listCards.push(productInCart);
    localStorage.setItem("listCards", JSON.stringify(listCards));
    let html = Mustache.render(templateCard, productInCart);
    listCard.insertAdjacentHTML("beforeend", html);

    // Сохранение данных в локальное хранилище
    CheckCounter();
}

function renderCart()
{
    // Получение данных из локального хранилища
    const storedData = localStorage.getItem("listCards");
    // Преобразование строки в массив
    const listCards = JSON.parse(storedData);
    console.log(listCards.length);
    for(let i = 0; i < listCards.length; i++)
    {
        const productCart = listCards[i];
        let html = Mustache.render(templateCard, productCart);
        listCard.insertAdjacentHTML("beforeend", html);
        //let render = Mustache.render(template, {listCards});
        //document.querySelector("#templateCard").innerHTML = render;
    }
}
let closeBtn = document.getElementsByClassName("closeBtn1");
console.log(closeBtn);
const buttonClose = e => {
    alert("function");
    // let btnId = e.target.id;
    // console.log(btnId);
    // listCards.splice(btnId, 1);
    // renderCart();

}
for (let button of closeBtn) {
    console.log("click!");
    //button.addEventListener("click", buttonClose);
}









