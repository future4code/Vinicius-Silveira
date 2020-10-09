/* --------------------FUNÇÕES

EXERCÍCIO 1

const array = [23,45,11,7,6,90,77,88,93,24,75,8,3,900]
let maior = -Infinity
let menor = Infinity
let segundoMaior = -Infinity
let segundoMenor = Infinity
const segundoMaiorMenor = (array)=>{        
    for(let i=0;i<array.length;i++){
        if (array[i]>maior){          
            maior=array[i]                                    
        }        
        if(array[i]<menor){            
            menor=array[i]
        }
        for(let i=0; i<array.length;i++){
            if (array[i]> segundoMaior && array[i]<maior){
                segundoMaior=array[i]
            }    
            if (array[i]< segundoMenor && array[i]>menor){
                segundoMenor=array[i]
            }            
        }                
    }
    console.log(array)
    console.log(maior)
    console.log(menor)    
    console.log(segundoMaior)
    console.log(segundoMenor)
}
segundoMaiorMenor(array)
-----------------------------------------------------------------------------------------------
*/