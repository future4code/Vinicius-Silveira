let tarefa = ''
const listaTarefas = ['Cozinhar','Lavar a louça','Estudar']
if (process.argv.length>2){
    for (let i=0; i < process.argv.length;i++){
        if (i===2){
            tarefa=process.argv[i]
        } else if(i>2){
            tarefa= tarefa +' '+process.argv[i]
        }
    }
    listaTarefas.push(tarefa)
}
console.log(listaTarefas)