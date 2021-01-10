export type pagamento = {
    valor:number,
    data:Date,
    descricao:string
}

export type Conta = {
    id:number,
    nome:string,
    cpf:string,
    nascimento:Date,
    saldo:number,
    extrato:Array<pagamento>   
}
