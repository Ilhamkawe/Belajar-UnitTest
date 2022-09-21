import { sum } from "../src/sum"

beforeEach(() => {
    console.info("ini before each , dijalankan setiap sebelum test dijalankan")
})
afterEach(() => {
    console.info("ini before each , dijalankan setiap sebelum test dijalankan")
})

beforeAll(() => {
    console.info("ini before all, dijalankan dipaling awal sebelum test dijalankan")
})
afterAll(() => {
    console.info("ini after all, dijalankan dipaling akhir setelah test dijalankan")
})


test("test sum", () => {
    expect(sum(10,10)).toBe(20)
})
test("test sum", () => {
    expect(sum(20,10)).toBe(30)
})