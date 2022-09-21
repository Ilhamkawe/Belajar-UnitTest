export const asyncSayHallo = (name) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if (name) {
                resolve(`Hello ${name}`)
            } else {
                reject("Name is Empty")
            }
        }, 1000)
    })
}