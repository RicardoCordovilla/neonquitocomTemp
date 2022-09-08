// https://wa.me/593961777009?text=I%27m%20interested%20in%20your%20car%20for%20sale


const altoLetra = 12
const anchoLetra = 7
const costoLetra = 8
const costoFuente = 5

function changetxtneon(text) {
    const neonTxt = document.getElementById('neonTxt')
    text = document.getElementById('txtInputNeon')
    const txtAux = text.value.split(' ')
    const result = txtAux.filter(item => item != '')
    const txtAux2 = result.map(x => x + ' ')
    neonTxt.innerHTML = ''
    console.log(txtAux2.length)
    if (txtAux2.length < 1) neonTxt.innerHTML = 'Texto'
    txtAux2.forEach(item => {
        neonTxt.innerHTML += item
    });
    const txtAux3 = neonTxt.innerHTML
    // console.log(txtAux3)
    const largo = txtAux3.length

    if (largo < 8) {
        neonTxt.style.fontSize = "3.5rem"
    }

    if (largo < 11 && largo > 7) {
        neonTxt.style.fontSize = "2.8rem"
    }

    if (largo > 10 && largo < 15) {
        neonTxt.style.fontSize = "2.2rem"
    }

    if (largo > 15) {
        neonTxt.style.fontSize = "2rem"
    }

    let saltos
    const textos = txtAux3.split('\n')


    saltos = textos.length
    if (saltos > 0) {
        if (textos[saltos - 1] == ' ')
            saltos -= 1
    }

    if (largo > 20 || saltos > 4) {
        text.value = text.value.substr(0, largo - saltos + 2);
    }

    const masancho = textos.sort((a, b) => {
        return b.length - a.length
    })





    document.getElementById("anchoTxt").innerHTML = String((masancho[0].length - 1) * anchoLetra) + " cm"
    document.getElementById("altoTxt").innerHTML = String(saltos * altoLetra) + " cm"
    document.getElementById("priceTxt").innerHTML = String((txtAux3.length * costoLetra) + costoFuente) + " usd"


    const color = document.getElementById("lblRadio-color")

    if (neonTxt.style.fontFamily == '') neonTxt.style.fontFamily = 'Harshita'
    if (!color.value) color.value = 'Azul'

    console.log(
        "texto:", neonTxt.value, "\n",
        "Estilo:", neonTxt.style.fontFamily, "\n",
        "color: ", color.value, "\n",
    )

        
    const btn=document.getElementById('btnBuyText')

    btn.href= `https://wa.me/593961777009?text=Hola, necsito el siguiente trabajo. Texto: ${neonTxt.value}, Estilo: ${neonTxt.style.fontFamily}, Color: ${color.value}
                `



}



function tabSelect(e, tab) {
    let i, x, tablinks

    x = document.getElementsByClassName("tabBx");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" tabActive", "");
    }

    document.getElementById(tab).style.display = "flex";
    e.currentTarget.className += ' tabActive'

    const textneon = document.getElementById("neonTxt")
    const color = document.getElementById("lblRadio-color")

    if (textneon.style.fontFamily == '') textneon.style.fontFamily = 'Harshita'
    if (!color.value) color.value = 'Azul'

    console.log(
        "texto:", textneon.value, "\n",
        "Estilo:", textneon.style.fontFamily, "\n",
        "color: ", color.value, "\n",
    )

        
    const btn=document.getElementById('btnBuyText')

    btn.href= `https://wa.me/593961777009?text= Hola, necsito el siguiente trabajo. Texto: ${textneon.value}, Estilo: ${textneon.style.fontFamily}, Color: ${color.value}
                `



}

function fontSelect(e) {

    const textneon = document.getElementById("neonTxt")
    const color = document.getElementById("lblRadio-color")

    textneon.style.fontFamily = e.currentTarget.value


    if (textneon.style.fontFamily == '') textneon.style.fontFamily = 'Harshita'
    if (!color.value) color.value = 'Azul'

    console.log(
        "texto:","\n",
        "Estilo:", e.currentTarget.value, "\n",
        "color: ", color.value, "\n",
    )

    
    const btn=document.getElementById('btnBuyText')

    btn.href= `https://wa.me/593961777009?text=Hola, necsito el siguiente trabajo. Texto: ${textneon.value}, Estilo: ${e.currentTarget.value}, Color: ${color.value}
                `

   
    

}

function colorSelect(e) {

    const textneon = document.getElementById("neonTxt")
    const fontOption = document.getElementById(e.currentTarget.value)

    // textneon.style.fontFamily=e.currentTarget.value
    if (e.currentTarget.value == "White") {
        textneon.style.textShadow = "-1px 0 0 #55f,-2px 0 0 #999,-3px 0 0 #999, 0 0 8px #fff,0 0 8px #fff,0 0 8px #fff,0 0 8px #fff,0 0 8px #fff,0 0 8px #fff,0 0 8px #fff,0 0 8px #fff,0 0 8px #fff,0 0 16px #fff, 0 0 8px #fff"
    }

    if (e.currentTarget.value == "Calido") {
        textneon.style.textShadow = "-1px 0 0 #55f,-2px 0 0 #999,-3px 0 0 #999, 0 0 8px #fff,0 0 8px #df6,0 0 8px #df6,0 0 8px #df6,0 0 8px #df6,0 0 8px #df6,0 0 8px #df6,0 0 8px #df6,0 0 8px #df6,0 0 16px #df6, 0 0 8px #fff"
    }

    if (e.currentTarget.value == "Yellow") {
        textneon.style.textShadow = "-1px 0 0 #55f,-2px 0 0 #999,-3px 0 0 #999, 0 0 8px #fff,0 0 8px #ff0,0 0 8px #ff0,0 0 8px #ff0,0 0 8px #ff0,0 0 8px #ff0,0 0 8px #ff0,0 0 8px #ff0,0 0 8px #ff0,0 0 16px #ff0, 0 0 8px #fff, 0 0 8px #fff"
    }

    if (e.currentTarget.value == "Red") {
        textneon.style.textShadow = "-1px 0 0 #55f,-2px 0 0 #999,-3px 0 0 #999, 0 0 8px #fff,0 0 8px #f00,0 0 8px #f00,0 0 8px #f00,0 0 8px #f00,0 0 8px #f00,0 0 8px #f00,0 0 8px #f00,0 0 8px #f00,0 0 16px #f00, 0 0 8px #fff, 0 0 8px #fff"
    }

    if (e.currentTarget.value == "Rosa") {
        textneon.style.textShadow = "-1px 0 0 #55f,-2px 0 0 #999,-3px 0 0 #999, 0 0 8px #fff,0 0 8px #f0d,0 0 8px #f0d,0 0 8px #f0d,0 0 8px #f0d,0 0 8px #f0d,0 0 8px #f0d,0 0 8px #f0d,0 0 8px #f0d,0 0 16px #f0d, 0 0 8px #fff"
    }

    if (e.currentTarget.value == "Violeta") {
        textneon.style.textShadow = "-1px 0 0 #55f,-2px 0 0 #999,-3px 0 0 #999, 0 0 8px #fff,0 0 8px #41f,0 0 8px #41f,0 0 8px #41f,0 0 8px #41f,0 0 8px #41f,0 0 8px #41f,0 0 8px #41f,0 0 8px #41f,0 0 16px #41f, 0 0 8px #fff"
    }

    if (e.currentTarget.value == "Cyan") {
        textneon.style.textShadow = "-1px 0 0 #55f,-2px 0 0 #999,-3px 0 0 #999, 0 0 8px #fff,0 0 8px #1bf,0 0 8px #1bf,0 0 8px #1bf,0 0 8px #1bf,0 0 8px #1bf,0 0 8px #1bf,0 0 8px #1bf,0 0 8px #1bf,0 0 16px #1bf"
    }

    if (e.currentTarget.value == "Azul") {
        textneon.style.textShadow = "-1px 0 0 #55f,-2px 0 0 #999,-3px 0 0 #999, 0 0 8px #fff,0 0 8px #00f,0 0 8px #00f,0 0 8px #00f,0 0 8px #00f,0 0 8px #00f,0 0 8px #00f,0 0 8px #00f,0 0 8px #00f,0 0 16px #00f"
    }

    if (e.currentTarget.value == "Verde") {
        textneon.style.textShadow = "-1px 0 0 #55f,-2px 0 0 #999,-3px 0 0 #999, 0 0 8px #fff,0 0 8px #1f1,0 0 8px #1f1,0 0 8px #1f1,0 0 8px #1f1,0 0 8px #1f1,0 0 8px #1f1,0 0 8px #1f1,0 0 8px #1f1,0 0 16px #1f1"
    }

    if (textneon.style.fontFamily == '') textneon.style.fontFamily = 'Harshita'

    console.log(
        "texto:", textneon.value, "\n",
        "Estilo:", textneon.style.fontFamily, "\n",
        "color: ", e.currentTarget.id, "\n",

    )

    const btn=document.getElementById('btnBuyText')

    btn.href= `https://wa.me/593961777009?text=Hola, necsito el siguiente trabajo. Texto: ${textneon.value}, Estilo:  ${textneon.style.fontFamily}, Color:  ${e.currentTarget.id}
                `

                
}


function whatsapp(e) {
    text = document.getElementById('txtInputNeon')

    if(e.currentTarget.href=='' || text.value=='')
    {
        alert('Personaliza tu texto primero')

    }
    else{
        e.currentTarget.target="_blank"
    }


    console.log("href: ", e.currentTarget.href)
}  