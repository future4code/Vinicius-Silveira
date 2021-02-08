export interface User {
    name: string,
    balance: number
}

enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL",
  }
  
  enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
  }
  
  interface Userperson {
    name: string;
    age: number;
    nacionality: NACIONALITY;
  }
  
  interface Casino {
    name: string;
    location: LOCATION;
  }