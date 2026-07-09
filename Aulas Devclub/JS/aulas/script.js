const getInput = document.querySelector("#concordas")
const prg = document.getElementById("prg")

function alter(){
    console.log(prg.textContent)
    console.log(getInput.value)
    prg.textContent = getInput.value
}