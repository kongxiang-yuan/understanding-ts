/**
 * @declaration Core Types
 * Function & callbacks
 */

function add(n1: number, n2: number) {
  return n1 + n2
}

function addHanHandle(n1: number, n2: number, cb: (num: number) => void) {
  const reslut = n1 + n2
  cb(reslut)
}

function printReslut(num: number) {
  console.log('Reslut: ', num)
}
printReslut(add(20, 1))

let combineValues: (a: number, b: number) => number
combineValues = add
// combineValues = printReslut
// combineValues = 5 //不能将类型“number”分配给类型“Function”。ts

console.log(combineValues(8, 8))

addHanHandle(10, 20, (reslut) => {
  console.log(reslut)
})
