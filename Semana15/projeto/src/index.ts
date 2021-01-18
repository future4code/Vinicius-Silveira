import express,{Request,Response} from "express"
import cors from "cors"
import {Conta,pagamento} from "./contas"
import {AddressInfo} from "net"

let errorCode: number = 400
let contas:Conta[]=[]

const app = express()

app.use(express.json())
app.use(cors())

//Criar contas
app.post("/novaconta",(req:Request,res:Response)=>{
    try{
        //busca os dados no body do enpoint
        const[dia,mes,ano] = req.body.nascimento.split("/")

        const dataNascimento: Date = new Date(`${ano}-${mes}-${dia}`)
        
        const idade:number = Date.now()-dataNascimento.getTime()        
        const idadeFinal:number = idade/31536000000 // = /1000/60/60/24/365 transforma a idade em anos

        if(idadeFinal <18){
            errorCode=406
            throw new Error('Para criar conta cliente tem que ser maior de 18 anos')
        }                    
        const novaConta:Conta={
            id:Date.now(),
            nome:req.body.nome,
            cpf:req.body.cpf,
            nascimento:dataNascimento,
            saldo:0,
            extrato:[]
        }
        if(!req.body.nome || !req.body.cpf || !req.body.nascimento){
            errorCode=422
            throw new Error ('Preencha todos os campos corretamente')
        }
        if(contas.length!==0){
            const encontraCpf = contas.findIndex((dados=>
                dados.cpf===novaConta.cpf
            ))
            if(encontraCpf!==-1){
                errorCode=400
                throw new Error('CPF já cadastrado')
            }
        }
        contas.push(novaConta)
        res.status(200).send({message:'Conta criado com sucesso !'})
    }
    catch(error){
        res.status(errorCode).send(error.message)
    }
})

//endpoint para verificar todas as contas cadastradas
app.get("/contas",(req:Request,res:Response)=>{
    try{
        //verifica se a conta está vazia e envia uma mensagem de erro
        if(contas.length===0){
            errorCode = 404
            throw new Error('Nenhuma conta cadastrada !')
        }
        res.status(200).send(contas)
    }
    catch(error){
        res.status(errorCode).send(error.message)
    }
    
})

//endpoint para pegar saldo com nome e CPF
app.get("/contas/procura",(req:Request,res:Response)=>{
    try{        
        const cpf: string = req.query.cpf as string
        const nome: string = req.query.nome as string

        if(!cpf || !nome){
            errorCode=422
            throw new Error('Dados inválidos ou campos vazios')
        }
        const encontraNome = contas.filter((dados=>
            dados.nome === nome
        ))
        const encontraCpf = encontraNome.filter((dados=>
            dados.cpf===cpf
        ))

        if(encontraCpf.length===0){
            errorCode=404
            throw new Error('Conta não encontrada')
        }
        res.status(200).send(encontraCpf)
    }
    catch(error){
        res.status(errorCode).send(error.message)
    }
})

// endpoint para adicionar saldo à conta
app.put("/contas/saldo",(req:Request,res:Response)=>{
    try{        
        const cpf: string = req.query.cpf as string
        const nome: string = req.query.nome as string
        const saldo: number = req.body.saldo

        if(!cpf || !nome || !saldo){
            errorCode=422
            throw new Error('Dados inválidos ou campos vazios')
        }        
        const encontraIndex = contas.findIndex((dados=>
            dados.cpf===cpf
        ))
        
        if(encontraIndex === -1){
            errorCode=404
            throw new Error('Conta não encontrada')
        }
        console.log('index:',encontraIndex)
        contas[encontraIndex].saldo += saldo
        res.status(200).send({message:'Saldo inserido com sucesso !'})
    }
    catch(error){
        res.status(errorCode).send(error.message)
    }
})

//endpoint para gerar pagamento
app.put("/contas/pagamento",(req:Request,res:Response)=>{
    try{
        const nome: string = req.query.nome as string
        const cpf: string = req.query.cpf as string
        const valorPagamento: number = req.body.valor
        const descricaoPagamento: string = req.body.descricao

        const[dia,mes,ano] = req.body.data.split("/")
        const dataPagamento: Date = new Date(`${ano}-${mes}-${dia}`)
        const dias:  number = Date.now() - dataPagamento.getTime()
        const umDia:number = 1000*60*60*24 // valor para calcular 1 dia
        //.trunc retorna o valor inteiro
        if(Math.trunc(dias/umDia)>0){
            errorCode=406            
            throw new Error('Data pagamento menor que data atual !')
        }        
        const novoPagamento: pagamento={
            valor:valorPagamento,
            data:dataPagamento,
            descricao:descricaoPagamento
        }
        
        if(!nome || !cpf || !valorPagamento){
            errorCode=422
            throw new Error('Dados inválidos ou campos vazios')
        }        
        const encontraIndex = contas.findIndex((dados=>
            dados.cpf===cpf
        ))
        if(encontraIndex === -1){
            errorCode=404
            throw new Error('Conta não encontrada')
        }
        
        if(contas[encontraIndex].saldo<valorPagamento){
            errorCode=406
            throw new Error('Saldo insuficiente para pagamento')
        }
        console.log('index:',encontraIndex)
        contas[encontraIndex].extrato.push(novoPagamento)
        contas[encontraIndex].saldo -= Number(novoPagamento.valor)
        res.status(200).send({message:'Pagamento feito com sucesso'})
    }
    catch(error){
        res.status(errorCode).send(error.message)
    }
})

//endpoint transferencia entre contas
app.put("/contas/transferencia",(req:Request,res:Response)=>{
    try{
        const nomeRemetente: string = req.body.nomeRemetente
        const cpfRemetente: string = req.body.cpfRemetente
        const nomeDestinatario: string = req.body.nomeDestinatario
        const cpfDestinatario: string = req.body.cpfDestinatario
        const valorTransferir: number = req.body.valorTransferir

        if(!nomeRemetente || !cpfRemetente || !nomeDestinatario || !cpfDestinatario || !valorTransferir ){
            errorCode = 404
            throw new Error('Dados inválidos ou campos vazios')
        }

        const procuraRemetente = contas.findIndex((dados=>
            dados.cpf===cpfRemetente    
            ))
        const procuraDestinatario = contas.findIndex((dados=>
            dados.cpf===cpfDestinatario
            ))
        if(procuraDestinatario===-1){
            errorCode=404
            throw new Error('Destinatário não encontrado')
        }
        if(procuraRemetente===-1){
            errorCode=404
            throw new Error('Remetente não encontrado')
        }
        if(contas[procuraRemetente].saldo<valorTransferir){
            errorCode=406
            throw new Error('Saldo Insuficiente para transferência')
        }
        contas[procuraRemetente].saldo-=valorTransferir
        contas[procuraDestinatario].saldo+=valorTransferir
        res.status(200).send({message:'Valor transferido com sucesso !'})
    }    
    catch(error){
        res.status(errorCode).send(error.message)
    }
})

//Construção do servidor
const server = app.listen(process.env.PORT || 3003, ()=>{
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    }else{
        console.error('Failure upon starting server')
    }
})