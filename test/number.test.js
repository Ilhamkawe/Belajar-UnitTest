test("test lebih besar", () => {
    let value = 11
    expect(value).toBeGreaterThan(10)
})

test("test lebih besar sama dengan", () => {
    let value = 11
    expect(value).toBeGreaterThanOrEqual(10)
})

test("test lebih kecil", () => {
    let value = 11
    expect(value).toBeLessThan(20)
})

test("test lebih kecil sama dengan", () => {
    let value = 11
    expect(value).toBeLessThanOrEqual(11)
})