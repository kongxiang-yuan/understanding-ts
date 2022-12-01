/**
 * @declaration Core Types
 * Union 联合类型
 */
function comnine(
  input1: number | string,
  input2: number | string,
  reslutConversion: 'as-number' | 'as-text'
) {
  let reslut
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    reslutConversion === 'as-number'
  ) {
    reslut = +input1 + +input2
  } else {
    reslut = input1.toString().toUpperCase() + input2.toString().toUpperCase()
  }
  return reslut

  // if (reslutConversion === 'as-number') {
  //   return +reslut
  // } else {
  //   return reslut.toString()
  // }
}

const comnineAges = comnine(21, 1, 'as-number')
console.log('comnineAges: ', comnineAges)
const comnineStringAges = comnine('21', '1', 'as-number')
console.log('comnineStringAges: ', comnineStringAges)
const comnineNames = comnine('kong', 'xiangyuan', 'as-text')
console.log('comnineNames: ', comnineNames)
