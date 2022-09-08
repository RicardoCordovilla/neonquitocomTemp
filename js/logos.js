const logos = document.getElementById('bodySection')
const img1 = document.getElementById('imgLogo')
const img2 = document.getElementById('imgEfecto')
const img3 = document.getElementById('imgNeon')


function scrollParallax() {
    let scrollTop = logos.scrollTop;
    img1.style.opacity = 1 - scrollTop * (1 / 290)
    img2.style.opacity = scrollTop * (1 / 290)
    img3.style.opacity = scrollTop * (1 / 700)
    console.log(scrollTop)
}

logos.addEventListener('scroll', scrollParallax)



let size = 50
let price = 50
const btn = document.getElementById('btnCotizar')
btn.href = `https://wa.me/593961777009?text=Hola, deseo personalizar una imagen en neon, en este tamaño aproximado: ${size}, y cuento con este presupuesto aproximado: ${price}`

function cotizarSize(valor) {
    const outputSize = document.getElementById('sizeNum')
    size = valor
    outputSize.value = size + " cm"
    



    btn.href = `https://wa.me/593961777009?text=Hola, deseo personalizar una imagen en neon, en este tamaño aproximado: ${size}, y cuento con este presupuesto aproximado: ${price}
                `

}

function cotizarPrice(valor) {
    const outputPrice = document.getElementById('priceNum')
    price = valor
    outputPrice.value = price + " usd"
 

    btn.href = `https://wa.me/593961777009?text=Hola, deseo personalizar una imagen en neon, en este tamaño aproximado: ${size}, y cuento con este presupuesto aproximado: ${price}
    `


}
