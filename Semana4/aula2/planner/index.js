//const controleBotao = document.getElementById("btnCriarTarefa")
const inputTarefa = document.getElementById("tarefa") //captura o input tarefa

function aplicarTarefa(){
    const optionValor = document.getElementById("dias-semana") //captura o select dias-semana
    if(inputTarefa.value==="" || inputTarefa.value===" "){
        alert("Impossível cadastrar tarefa vazia !")
        inputTarefa.value=""
    }else{
        switch (optionValor.value){
            case "domingo":         
                const ulDomingo = document.getElementById("ulDomingo")
                ulDomingo.innerHTML+= `<li>${inputTarefa.value}</li>`
                break;
            case "segunda":
                const ulSegunda = document.getElementById("ulSegunda")
                ulSegunda.innerHTML+= `<li>${inputTarefa.value}</li>`
                break;
            case "terca":
                const ulTerca = document.getElementById("ulTerca")
                ulTerca.innerHTML+= `<li>${inputTarefa.value}</li>`
                break;
            case "quarta":
                const ulQuarta = document.getElementById("ulQuarta")
                ulQuarta.innerHTML+= `<li>${inputTarefa.value}</li>`
                break;
            case "quinta":
                const ulQuinta = document.getElementById("ulQuinta")
                ulQuinta.innerHTML+= `<li>${inputTarefa.value}</li>`                
                break;
            case "sexta":
                const ulSexta = document.getElementById("ulSexta")
                ulSexta.innerHTML+= `<li>${inputTarefa.value}</li>`            
                break;
            case "sabado":
                const ulSabado = document.getElementById("ulSabado")
                ulSabado.innerHTML+= `<li>${inputTarefa.value}</li>`                
                break;
        }
        inputTarefa.value=""
    }    
}

function riscaTarefa(){

}