/* Desenvolva sua lógica aqui */
document.querySelector(".butao-header").addEventListener("click",()=>{
    document.querySelector(".modal").classList.toggle("modal-on")
})
document.querySelector(".button-main").addEventListener("click",()=>{
    document.querySelector(".modal").classList.toggle("modal-on")
})
document.querySelector("#modalChose").addEventListener("click",()=>{
    document.querySelector(".modal").classList.toggle("modal-on")
})
document.querySelector("#modalCancelar").addEventListener("click",()=>{
    document.querySelector(".modal").classList.toggle("modal-on")
})

const labelEntar = document.querySelector("#labelEntrada")
const labelSaida = document.querySelector("#labelSaida")

labelEntar.addEventListener("click",()=>{
    labelSaida.classList.remove("label-radio-on")
    labelEntar.classList.add("label-radio-on")
})
labelSaida.addEventListener("click",()=>{
    labelEntar.classList.remove("label-radio-on")
    labelSaida.classList.add("label-radio-on")
})

