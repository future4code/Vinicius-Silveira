export type loginInput = {
    email: string,
    password: string
}

export type authenticationData = {
    id: string,
    role: User_Roles
}
export enum User_Roles{
    NORMAL = "Normal",
    ADMIN = "Admin"
}
export type user = {
    id:string,
    email:string,
    password:string,
    role:User_Roles
}

export type address = {
    local: string,
    neighborhood: string,
    city: string,
    state:string
}