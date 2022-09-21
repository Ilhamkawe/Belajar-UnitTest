test("string not", () => {
    const name = "Muhammad Ilham Kusumawardhana"

    expect(name).not.toBe("kawe")
    expect(name).not.toEqual("Muhammad Ilham kusumawardhana")
})

test("numeric not", () => {
    let value = 8
    expect(value).not.toBeGreaterThan(10)
    expect(value).not.toBeLessThan(6)
    expect(value).not.toBe(10)
})