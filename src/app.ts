/**
 * @declaration 工具类型
 */

// Required<Type> 必选
interface UsetInfo {
  name: string
  gmail: string
  date: Date
}

function submit(param: Required<UsetInfo>) {
  return param as UsetInfo
}
console.log(submit({ name: 'kongxianyuan', gmail: '', date: new Date() }))
// Partial<Type> 可选 
interface UsetInfo {
  name: string
  gmail: string
  date: Date
}

function EditUserInfo(param: Partial<UsetInfo>) {
  return param as UsetInfo
}
console.log(EditUserInfo({ name: 'kongxianyuan' }))

// Readonly<Type> 只读
const names: Readonly<string[]> = ['kongxiangyuan']
