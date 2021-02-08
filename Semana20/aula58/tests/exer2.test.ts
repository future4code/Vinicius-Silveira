import { performPurchase } from "../src"
import { User } from "../src/business/entities/user"

describe("function performPurchase",()=>{
    test("Testing balance greater than value",()=>{
        const user: User = {
            name: "vinicius",
            balance: 100
        }

        const result = performPurchase(user,50)        
        expect(result).toEqual({
            ...user,
            balance: 50
        })
    })
})

describe("function performPurchase",()=>{
    test("Testing balance greater than value",()=>{
        const user: User = {
            name: "vinicius",
            balance: 50
        }

        const result = performPurchase(user,50)        
        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })
})

describe("function performPurchase",()=>{
    test("Testing balance greater than value",()=>{
        const user: User = {
            name: "vinicius",
            balance: 10
        }

        const result = performPurchase(user,50)        
        expect(result).toEqual(undefined)
    })
})