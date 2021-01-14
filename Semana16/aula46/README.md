# Banco de dados com typescript

### Exercício 1
a) Esse método permite com que trabalhemos usando as mesmas querys do sql diretamente no typescript.

b) Função para buscar ator pelo nome.
```
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = '${name}'
    `)    
    return result[0][0]
}
```
c) Faça uma função que receba um gender retorne a quantidade de itens na tabela Actor com esse gender. Para atrizes, female e para atores male.
```
const getQuantityByGender = async (gender:string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(gender) FROM Actor WHERE gender = '${gender}'
    `) 
    return result[0][0]
}
```

### Exercício 2
a)Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão.
```
const updateSalary = async (id:string, salary:number): Promise<any>=>{
    await connection("Actor")
    .update({salary:salary})
    .where("id",id)    
}
```
b) Uma função que receba um id e delete um ator da tabela.
```
const deleteActor = async (id:string):Promise<any>=>{
    await connection("Actor")
    .delete()
    .where("id",id)    
}
```
c) Uma função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender.
```
const avgSalary = async (gender:string):Promise<any>=>{
    const result = await connection("Actor")
    .avg("salary as average")
    .where({gender})
    console.log(result[0].average)
}
```

### Exercício 3
a) Criar um endpoint que busque o ator/atriz pela id.
```
app.get("/actor/:id", async(req:Request,res:Response)=>{
    try{
        const id : string = req.params.id as string
        const actors = await getActorById(id)
        
        if(!actors.length){
            errorCode = 404
            throw new Error('Nenhum ator encontrado')
        }
        res.status(200).send(actors)        
    }    
    catch(error){
        console.log(error)
        res.send(error.message)
    }
})
```
b) Crie um endpoint com as seguintes especificaçõs:

* Deve ser um GET(/actor).
* Receber o gênero como um query param (/actor?gender=).
* Devolver a quantidade de atores/atrizes desse gênero.
```
app.get("/actor", async(req:Request,res:Response)=>{
    try{
        const gender : string = req.query.gender as string
        const actors = await getQuantityByGender(gender)
        
        if(!actors.length){
            errorCode = 404
            throw new Error('Nenhum ator encontrado')
        }
        res.status(200).send(actors)        
    }    
    catch(error){
        console.log(error)
        res.send(error.message)
    }
})
```
### Exercício 4
a) Endpoint para atualizar o salário, passando salário e id pelo body.
```
app.post("/actor", async (req:Request, res:Response)=>{
    try{
        const salary: number=req.body.salary
        const id: string = req.body.id
        await updateSalary(id,salary)
        res.status(200).send({message:'Salário alterado com sucesso'})
    }
    catch(error){
        res.status(400).send(error.message)
    }
})
```
b) Endpoint para deletar ator pelo id.
```
app.delete("/actor/:id", async(req:Request,res:Response)=>{
    try{
        const id: string=req.params.id as string
        await deleteActor(id)
        res.status(200).send({message:'Usuário deletado com sucesso'})
    }
    catch(error){
        res.status(400).send(error.message)
    }
})
```