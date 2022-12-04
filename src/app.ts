/**
 * @declaration Core Types
 * type and interface
 */
type Admin = {
  name: string
  privilges?: string[]
}

type Employee = {
  name: string
  startDate: Date
}

interface Admin1 {
  name: string
  privilges?: string[]
}

interface Employee1 {
  name: string
  startDate: Date
}

/***
 * interface 使用 extends 实现继承， type 使用交叉类型实现继承
 *  type 类型别名会给一个类型起个新名字。 类型别名有时和接口很像，但是可以作用于原始值，联合类型，元组以及其它任何你需要手写的类型。
 */

type ElevatedEmployee = Admin & Employee // 交叉类型
interface ElevatedEmployee1 extends Admin1, Employee1 {}

const e1: ElevatedEmployee = {
  name: 'kxy',
  startDate: new Date('2022-12-04'),
}

const e2: ElevatedEmployee1 = {
  name: 'kxy',
  startDate: new Date('2022-12-04'),
}
console.log(e1)
console.log(e2)
