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
        moeda: "Bitcoin",
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
slc1: document.querySelectorAll("select")[0],
slc2: document.querySelectorAll("select")[1],
m1: document.getElementsByClassName("m1"),
m2: document.getElementsByClassName("m2"),
quanto: document.querySelector("input"),
}

const encontrarMoeda = codigo => moedas.find(item => item.logo === codigo)

refs.quanto.addEventListener("input", () => {
    console.log(refs.quanto)
    refs.m1[2].textContent = refs.slc1.value + " " + refs.quanto.value + ",00"
})

const attMoeda = (moeda, img, moedatxt, valor, quanto) => {
    img.src = moeda.src
    img.alt = moeda.alt
    moedatxt.textContent = moeda.moeda
    if (quanto !== null) valor.textContent = moeda.logo + " " + refs.quanto.value
    else valor.textContent = moeda.logo + " 0,00"
}

refs.slc1.addEventListener("change", () => {
    const moeda = encontrarMoeda(refs.slc1.value)
    attMoeda(moeda, refs.m1[0], refs.m1[1],refs.m1[2])
})

refs.slc2.addEventListener("change", () => {
    const moeda = encontrarMoeda(refs.slc2.value)
    attMoeda(moeda, refs.m2[0], refs.m2[1], refs.m2[2])
})