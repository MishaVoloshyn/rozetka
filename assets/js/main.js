// Корзина


let products = [
    {
        id: 1,
        full_name: 'Монитор 23.8" Acer Nitro VG240YM3bmiipx (UM.QV0EE.304) FHD IPS / 180Hz / 1 ms / 8-Bit / sRGB 99% / FreeSync Premium / Adaptive-Sync / G-Sync Сompatible / Speakers 2w',
        name: '',
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

let list = document.querySelector('.list');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.cart_count');


let template = document.querySelector('#template').innerHTML;
let output = document.querySelector("#output");

// const starsElement = document.getElementById('stars');
// const stars = starsElement.getElementsByTagName(i);
// if(products[i].stars > 0)
// {
//     stars.classList.add('text-yellow');
// }

for (let i = 0; i < products.length; i++)
{
    products[i].name  = products[i].full_name.slice(0, 60);

    const productData = products[i];
    let html = Mustache.render(template, productData);
    output.insertAdjacentHTML("beforeend", html);
}
console.log(products[0].name);
// openShopping.addEventListener('click', ()=>{
//     body.classList.add('active');
// })
// closeShopping.addEventListener('click', ()=>{
//     body.classList.remove('active');
// })
//
// let products = [
//     {
//         id: 1,
//         name: 'PRODUCT NAME 1',
//         image: '1.PNG',
//         price: 120000
//     },
//     {
//         id: 2,
//         name: 'PRODUCT NAME 2',
//         image: '2.PNG',
//         price: 120000
//     },
//     {
//         id: 3,
//         name: 'PRODUCT NAME 3',
//         image: '3.PNG',
//         price: 220000
//     },
//     {
//         id: 4,
//         name: 'PRODUCT NAME 4',
//         image: '4.PNG',
//         price: 123000
//     },
//     {
//         id: 5,
//         name: 'PRODUCT NAME 5',
//         image: '5.PNG',
//         price: 320000
//     },
//     {
//         id: 6,
//         name: 'PRODUCT NAME 6',
//         image: '6.PNG',
//         price: 120000
//     }
// ];
// let listCards  = [];
// function initApp(){
//     products.forEach((value, key) =>{
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('item');
//         newDiv.innerHTML = `
//             <img src="image/${value.image}">
//             <div class="title">${value.name}</div>
//             <div class="price">${value.price.toLocaleString()}</div>
//             <button onclick="addToCard(${key})">Add To Card</button>`;
//         list.appendChild(newDiv);
//     })
// }
// initApp();
// function addToCard(key){
//     if(listCards[key] == null){
//         // copy product form list to list card
//         listCards[key] = JSON.parse(JSON.stringify(products[key]));
//         listCards[key].quantity = 1;
//     }
//     reloadCard();
// }
// function reloadCard(){
//     listCard.innerHTML = '';
//     let count = 0;
//     let totalPrice = 0;
//     listCards.forEach((value, key)=>{
//         totalPrice = totalPrice + value.price;
//         count = count + value.quantity;
//         if(value != null){
//             let newDiv = document.createElement('li');
//             newDiv.innerHTML = `
//                 <div><img src="image/${value.image}"/></div>
//                 <div>${value.name}</div>
//                 <div>${value.price.toLocaleString()}</div>
//                 <div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
//                     <div class="count">${value.quantity}</div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
//                 </div>`;
//             listCard.appendChild(newDiv);
//         }
//     })
//     total.innerText = totalPrice.toLocaleString();
//     quantity.innerText = count;
// }
// function changeQuantity(key, quantity){
//     if(quantity == 0){
//         delete listCards[key];
//     }else{
//         listCards[key].quantity = quantity;
//         listCards[key].price = quantity * products[key].price;
//     }
//     reloadCard();
// }