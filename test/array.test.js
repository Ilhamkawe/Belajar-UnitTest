test("test array dengan tOEqual", () => {
    const arr1 = ["Muhammad Ilham Kusumawardnana", "Bandung"]
    
    expect(arr1).toEqual(["Muhammad Ilham Kusumawardnana", "Bandung"])
})

test("test array matcher", () => {
    const arr1 = ["Muhammad Ilham Kusumawardnana", "Bandung"]
    expect(arr1).toContain("Bandung")
    

    const arr2 = [{name : "Muhammad Ilham Kusumawardhana", lahir : "Bandung"}]
    expect(arr2).toContainEqual({name : "Muhammad Ilham Kusumawardhana", lahir: "Bandung"})
})