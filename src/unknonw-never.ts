/**
 * @declaration Core Types
 * Unknonw never
 */

let userInput: unknown
let userName: string
userInput = 1
userInput = '1'

if (typeof userInput === 'string') {
  userName = userInput
}

function genrateError(message: string, code: number): never {
  throw { message: message, errCoded: code }
}

genrateError('An error occurred!', 500)
