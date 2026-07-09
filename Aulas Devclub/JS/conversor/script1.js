const moedas = [
    {
        moeda: "Real",
        logo: "R$",
        src: "./assets/Real_logo.png",
        alt: "Real_logo",
        valores: {
            real: 1,
            dolar: 0.19,
            euro: 0.17,
            libra: 0.15,
            bitcoin: 0.0000032
        }
    },
    {
        moeda: "Dolar",
        logo: "U$",
        src: "./assets/Dolar_logo.png",
        alt: "Dolar_logo",
        valores: {
            real: 5.22,
            dolar: 1,
            euro: 0.88,
            libra: 0.76,
            bitcoin: 0.000017
        }
    },
    {
        moeda: "Euro",
        logo: "€",
        src: "./assets/Euro_logo.png",
        alt: "Euro_logo",
        valores: {
            real: 5.92,
            dolar: 1.13,
            euro: 1,
            libra: 0.86,
            bitcoin: 0.000019
        }
    },
    {
        moeda: "Libra",
        logo: "£",
        src: "./assets/Libra_logo.png",
        alt: "Libra_logo",
        valores: {
            real: 6.87,
            dolar: 1.32,
            euro: 1.16,
            libra: 1,
            bitcoin: 0.000022
        }
    },
    {
        moeda: "Bit",
        logo: "₿",
        src: "./assets/Bitcoin_logo.png",
        alt: "Bitcoin_logo",
        valores: {
            real: 309704.50,
            dolar: 59181.55,
            euro: 52282.98,
            libra: 45113.02,
            bitcoin: 1
        }
    }
]

const refs = {
    valorConverter: document.querySelector(".getValue"),
    moedaConverter: document.getElementById("de"),
    moedaConversora: document.getElementById("para"),
    aConverter: document.getElementById("aConverter"),
    conversora: document.getElementById("conversora"),
    moedaConverterTxt: document.getElementById("moedaAConverter"),
    moedaConversoraTxt: document.getElementById("moedaConversora"),
    valorAConverter: document.getElementById("valorAConverter"),
    valorConvertido: document.getElementById("valorConvertido")
}

const encontrarMoeda = codigo => moedas.find(item => item.logo === codigo)

const atualizarMoeda = (moeda, img, label, value, amount = "") => {
    img.src = moeda.src
    img.alt = moeda.alt
    label.textContent = moeda.moeda
    if (value) value.textContent = moeda.logo + amount
}

refs.moedaConverter.addEventListener("change", () => {
    const moeda = encontrarMoeda(refs.moedaConverter.value)
    atualizarMoeda(moeda, refs.aConverter, refs.moedaConverterTxt, refs.valorAConverter, refs.valorConverter.value)
})

refs.moedaConversora.addEventListener("change", () => {
    const moeda = encontrarMoeda(refs.moedaConversora.value)
    atualizarMoeda(moeda, refs.conversora, refs.moedaConversoraTxt, refs.valorConvertido)
})