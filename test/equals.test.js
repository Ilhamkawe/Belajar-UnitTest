test("equals dengan toBe", () => {

    const nama = "ilham" 
    const kalimat = `Hallo ${nama}`

    expect(kalimat).toBe("Hallo ilham")

})

test("equals dengan toEqual", () => {
    let data = {id : 1}

    Object.assign(data, {name : "Muhammad Ilham Kusumawardhana"})

    expect(data).toEqual({id : 1, name : "Muhammad Ilham Kusumawardhana"})
})