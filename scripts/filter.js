const fitreTodos = document.getElementById("fitreTodos")

fitreTodos.addEventListener("click",()=>{
    finacerAll.innerHTML = ""
    fitreSaidas.classList.remove("fitre-button-on")
    fitreEntradas.classList.remove("fitre-button-on")
    fitreTodos.classList.add("fitre-button-on")
    rederizando(valores)
    if(valores.length <= 0){
        document.querySelector(".button-main").classList.remove("button-main-off")
     }
     if(valores.length > 0){
        document.querySelector(".button-main").classList.add("button-main-off")
     }
})

const fitreEntradas = document.getElementById("fitreEntradas")

fitreEntradas.addEventListener("click",()=>{
    finacerAll.innerHTML = ""
    fitreSaidas.classList.remove("fitre-button-on")
    fitreTodos.classList.remove("fitre-button-on")
    fitreEntradas.classList.add("fitre-button-on")
    const novoEntradas = valores.filter((entras) => entras.categorias == "Entrada")
    rederizando(novoEntradas)
    soma (novoEntradas)
    if(novoEntradas.length <= 0){
        document.querySelector(".button-main").classList.remove("button-main-off")
     }
     if(novoEntradas.length > 0){
        document.querySelector(".button-main").classList.add("button-main-off")
     }
})

const fitreSaidas = document.getElementById("fitreSaidas")

fitreSaidas.addEventListener("click",()=>{
    finacerAll.innerHTML = ""
    fitreEntradas.classList.remove("fitre-button-on")
    fitreTodos.classList.remove("fitre-button-on")
    fitreSaidas.classList.add("fitre-button-on")
    const novoSaidas = valores.filter((entras) => entras.categorias == "Saída")
    rederizando(novoSaidas)
    soma (novoSaidas)
    if(novoSaidas.length <= 0){
        document.querySelector(".button-main").classList.remove("button-main-off")
     }
     if(novoSaidas.length > 0){
        document.querySelector(".button-main").classList.add("button-main-off")
     }
})