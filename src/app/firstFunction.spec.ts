import { addition } from "./firstFunction";

describe("function add", ()=>{
    it("function for add", ()=>{
        expect(addition(10,20)).toBe(30);
    })
})