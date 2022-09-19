test("belajar truthines", () => {
    let value = null
    expect(value).toBeNull()
    expect(value).toBeDefined()
    expect(value).toBeFalsy()

    value = undefined
    expect(value).toBeUndefined()

    value = "ilham"
    expect(value).toBeTruthy()
})