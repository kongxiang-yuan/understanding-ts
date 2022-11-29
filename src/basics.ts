/**
 * @declaration core Types
 * number string boolean
 */
function add(n1: number, n2: number, showReslut: boolean, phrase: string) {
  const result = n1 + n2
  if (showReslut) {
    console.log(phrase + result)
  }
  return result
}

const input1 = 18
const input2 = 2.5
const printReslut = true
const resultPhrase = 'result is:'

const reslut = add(input1, input2, printReslut, resultPhrase)
console.log(reslut)
