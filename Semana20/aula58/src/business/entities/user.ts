export interface User {
    name: string,
    balance: number
}

export enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL",
}
  
export enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
}
  
export interface Userperson {
    name: string;
    age: number;
    nacionality: NACIONALITY;
  }
  
export interface Casino {
    name: string;
    location: LOCATION;
}