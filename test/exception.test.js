import { callMe, MyException } from "../src/exception"

test("test exception" , () => {
    expect(() => callMe("Kawe")).toThrow()
    expect(()=>callMe("Kawe")).toThrow(MyException)
    // expect(()=>callMe("sdsad")).toThrow("ups my exception happens")
})