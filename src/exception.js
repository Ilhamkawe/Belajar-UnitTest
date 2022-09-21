export class MyException extends Error {

}

export const callMe = (value) => {
    if (value === "Kawe") {
        throw new MyException("Ups my Exception happens")
    } else {
        return "OK"
    }
}