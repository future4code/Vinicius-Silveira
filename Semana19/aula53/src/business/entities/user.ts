export enum User_Roles {
    NORMAL = "Normal",
    ADMIN = "Admin"
}

export type authenticationData = {
    id: string,
    role: User_Roles
}

export type user = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: User_Roles
}