const moedas = [
    {
        moeda: "Real",
        logo: "R$",
        src: "./assets/Real_logo.png",
        alt: "Real_logo",
        real: 1,
        dolar: 0.19,
        euro: 0.17,
        libra: 0.15,
        bitcoin: 0.0000032
    },
    {
        moeda: "Dolar",
        logo: "U$",
        src: "./assets/Dolar_logo.png",
        alt: "Dolar_logo",
        real: 5.22,
        dolar: 1,
        euro: 0.88,
        libra: 0.76,
        bitcoin: 0.000017
    },
    {
        moeda: "Euro",
        logo: "€",
        src: "./assets/Euro_logo.png",
        alt: "Euro_logo",
        real: 5.92,
        dolar: 1.13,
        euro: 1,
        libra: 0.86,
        bitcoin: 0.000019
    },
    {
        moeda: "Libra",
        logo: "£",
        src: "./assets/Libra_logo.png",
        alt: "Libra_logo",
        real: 6.87,
        dolar: 1.32,
        euro: 1.16,
        libra: 1,
        bitcoin: 0.000022
    },
    {
        moeda: "Bit",
        logo: "₿",
        src: "./assets/Bitcoin_logo.png",
        alt: "Bitcoin_logo",
        real: 309704.50,
        dolar: 59181.55,
        euro: 52282.98,
        libra: 45113.02,
        bitcoin: 1
    }
]

const refs = {
valorConverter: document.querySelector(".getValue"),
moedaConverter: document.getElementById("de"),
moedaConversora: document.getElementById("para"),
aConverter: document.getElementById("aConverter"),
conversora: document.getElementById("conversora"),
moedaConversoraTxt: document.getElementById("moedaConversora"),
moedaConverterTxt: document.getElementById("moedaAConverter"),
valorAConverter: document.getElementById("valorAConverter"),
valorConvertido: document.getElementById("valorConvertido"),
conversao: 0
}

const moeda = {
    aConverter: "",
    paraConveter: ""
}

function encontrarMoeda(codigo) {
    return moedas.find(item => item.logo === codigo)
}

function convert(codigo) {
    if(refs.valorConverter.value) return refs.valorConverter * codigo.moeda
}

refs.moedaConverter.addEventListener("change", function() {
        const codigo = refs.moedaConverter.value
        moeda.aConverter = encontrarMoeda(codigo)
        console.log(codigo)
        console.log(moeda.aConverter.moeda)
        console.log(aConverter.src)
        console.log(refs.moedaConversoraTxt.textContent)
        aConverter.src = moeda.aConverter.src
        aConverter.alt = moeda.aConverter.alt
        refs.moedaConverterTxt.textContent = moeda.aConverter.moeda
        refs.valorAConverter.textContent = moeda.aConverter.logo + refs.valorConverter.value
})

refs.moedaConversora.addEventListener("change", function(){
        const codigo = refs.moedaConversora.value
        moeda.paraConveter = encontrarMoeda(codigo)
        console.log(codigo)
        console.log(moeda.paraConveter.moeda)
        console.log(conversora.src)
        console.log(moeda.paraConveter)
        console.log(refs.valorAConverter.value)
        conversora.src = moeda.paraConveter.src
        conversora.alt = moeda.paraConveter.alt
        refs.moedaConversoraTxt.textContent = moeda.paraConveter.moeda
        refs.valorConvertido.textContent = moeda.paraConveter.logo + convert(moeda.paraConveter)
})







