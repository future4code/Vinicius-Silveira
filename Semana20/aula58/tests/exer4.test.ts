import { verifyAge } from "../src";
import { Casino, LOCATION, NACIONALITY, Userperson } from "../src/business/entities/user";

describe("function verifyAge",()=>{
    test("1 brazilian allowed", () => {
        const brazilian: Userperson = {
          name: "Astrodev",
          age: 19,
          nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const casino: Casino = {
          name: "Balada Estelar",
          location: LOCATION.BRAZIL,
        };
    
        const result = verifyAge(casino, [brazilian]);
        expect(result.brazilians.allowed).toEqual(["Astrodev"]);
      });
})

describe("function verifyAge",()=>{
    test("1 american allowed", () => {
        const brazilian: Userperson = {
          name: "Astrodev",
          age: 19,
          nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
          name: "Balada Estelar",
          location: LOCATION.BRAZIL,
        };
    
        const result = verifyAge(casino, [brazilian]);
        expect(result.americans.allowed).toEqual(["Astrodev"]);
      });
})

describe("function verifyAge",()=>{
    test("No one allowed", () => {
        const brazilian: Userperson = {
          name: "Astrodev BR",
          age: 19,
          nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const american: Userperson = {
          name: "Astrodev EUA",
          age: 19,
          nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
          name: "Balada Estelar",
          location: LOCATION.EUA,
        };
    
        const result = verifyAge(casino, [
          brazilian,
          brazilian,
          american,
          american,
        ]);
        expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
        expect(result.americans.unallowed).toEqual([
          "Astrodev EUA",
          "Astrodev EUA",
        ]);
      });
})

describe("function verifyAge",()=>{
    test("2 american allowed and 2 brazilians unallowed", () => {
        const brazilian: Userperson = {
          name: "Astrodev BR",
          age: 19,
          nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const american: Userperson = {
          name: "Astrodev EUA",
          age: 21,
          nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
          name: "Balada Estelar",
          location: LOCATION.EUA,
        };
    
        const result = verifyAge(casino, [
          brazilian,
          brazilian,
          american,
          american,
        ]);
        expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
        expect(result.americans.allowed).toEqual(["Astrodev EUA", "Astrodev EUA"]);
      });
})