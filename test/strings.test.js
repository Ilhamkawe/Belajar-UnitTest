test("test string matcher",  () => {
    const name = "Muhammad Ilham Kusumawardhana"

    expect(name).toBe("Muhammad Ilham Kusumawardhana")
    expect(name).toEqual("Muhammad Ilham Kusumawardhana")
    
})

// test regex 

test("test regex matcher", () => {
    const name = "Muhammad Ilham Kusumawardhana" 

    expect(name).toMatch(/dhana/)
})