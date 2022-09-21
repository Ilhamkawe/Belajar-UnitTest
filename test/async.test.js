import { asyncSayHallo } from "../src/async"

test("async test", async () => {
    const hello = await asyncSayHallo("ilham")
    expect(hello).toBe("Hello ilham")
})

test("async matcher", async () => {
    await expect(asyncSayHallo("ilham")).resolves.toBe("Hello ilham")
    await expect(asyncSayHallo()).rejects.toBe("Name is Empty")
})