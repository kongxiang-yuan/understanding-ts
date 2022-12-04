/**
 * @declaration Core Types
 * interface 
 */
interface Named {
  readonly name: string
}
interface Person extends Named {
  age?: number | string
  handler(n: string): void
}

let user1: Person

user1 = {
  name: 'kxy',
  age: 21,
  handler(v: string) {
    console.log(v)
  },
}

// console.log(user1)
// user1.handler('你好')

class User implements Person {
  name: string
  // age = 21

  constructor(n: string) {
    this.name = n
  }

  handler(n: string) {
    console.log(n)
  }
}

let user: Person
user = new User('kongxiangyuan')

user.handler('你好')
// user.name = 'ts' // 无法为“name”赋值，因为它是只读属性。 ts

console.log(user)

interface addFn {
  (n1: number, n2: number): number
}

let add: addFn
add = (n1, n2) => n1 + n2

console.log(add(1, 1))
