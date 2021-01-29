export type user = {
    id: string,
    name: string,
    email:string,
    password: string
}

export type recipes = {
    id: string,
    description: string,
    createdAt: string,
    user_id: string
}

export type authenticationData = {
    id:string
}