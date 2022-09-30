
const finacerAll = document.querySelector(".finacerAll")
const buttonFinalizar = document.getElementById("buttonFinal") //butao para da push 
//form nao atulizar a pagina 
const formTag = document.querySelector('form')
formTag.addEventListener('submit',(event)=>{
    event.preventDefault()})


function rederizando(arr){
    const mainUl = document.querySelector(".finacerAll")
    arr.forEach((element)=>{
        const valosNumeros = Number(element.valor)
        const valoresArry = valosNumeros.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        const conteudo = document.createElement("li")
        conteudo.classList.add("finaces")
        const valoresConteudo = document.createElement("h2")
        valoresConteudo.classList.add("finaces-values")
        const div = document.createElement("div")
        const categorias = document.createElement("h3")
        categorias.classList.add("finaces-category")
        const button = document.createElement("button")
        button.classList.add("finaces-button")
        button.id = element.id
        mainUl.appendChild(conteudo)
        conteudo.appendChild(valoresConteudo)
        conteudo.appendChild(div)
        div.appendChild(categorias)
        div.appendChild(button)
        valoresConteudo.innerText = valoresArry
        categorias.innerText = element.categorias
        button.innerHTML = `<img src="../assets/trash.png" alt="">`      
        
        button.addEventListener("click",(event)=>{
            console.log(event)
            const index = valores.findIndex((elemento)=>{
                return elemento.id === element.id
            })
            valores.splice(index,1)
            finacerAll.innerHTML = ""
            rederizando(valores)
            soma (valores)
            if(valores.length <= 0){
                document.querySelector(".button-main").classList.remove("button-main-off")
             }
        })


    })
}

//adicionar array
buttonFinalizar.addEventListener("click",()=>{
 let valorCategoria = document.querySelector('input[name="valor"]:checked').value;
 const inputNumero = document.getElementById("inputNuber").value
 valores.push(
    {
        id: valores.length + 1,
        valor: inputNumero,
        categorias: valorCategoria
    }
 )
 
 finacerAll.innerHTML = ""
 soma (valores)
 rederizando(valores)
 document.querySelector(".modal").classList.toggle("modal-on")
 if(valores.length > 0){
    document.querySelector(".button-main").classList.add("button-main-off")
 }
})


//soma
function soma (array){
    const valortotalHtml = document.getElementById("valortotal")
    let somaEntradas = [0]
    let somaSaidas = [0]
    //entradas
    let pushEntradas = array.filter((entradas) =>entradas.categorias === "Entrada")
    let entradasSomas = pushEntradas.forEach((element)=>{
        let elementValor = element.valor
        let valorEntradas = Number(elementValor)
        somaEntradas.push(valorEntradas)
    })
    //saidas
    let pushSaidas = array.filter((Saidas) =>Saidas.categorias === "Saída")
    let SaidasSomas = pushSaidas.forEach((element)=>{
        let elementValor = element.valor
        let valorSaida = Number(elementValor)
        somaSaidas.push(valorSaida)
    })
    //somas dos dois
    let entradasSoma = somaEntradas.reduce((valorinicial, valordaArry)=>valorinicial + valordaArry)
    let saidasSoma = somaSaidas.reduce((valorinicial, valordaArry)=>valorinicial + valordaArry)
    let somaTotal = entradasSoma - saidasSoma

    let totalReal = somaTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    valortotalHtml.innerText = totalReal 
}