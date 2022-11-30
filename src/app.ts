/**
 * @declaration Core Types
 * object Array Tuple
 */

const person: {
  name: string
  age: number
  hobbies: string[]
  role: [number, string]
} = {
  name: 'kongxiangyuan',
  age: 21,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'], // role: (string | number)[]
}

// person.role.push('admin')
// person.role[0] = 10

// person.role = [1,'admin', 0]

person.role = [1,'admin']

let favoriteActivites: string[]
favoriteActivites = ['Sports']
console.log(person.name)

for (const hobble of person.hobbies) {
  console.log(hobble.toUpperCase())
  // console.log(hobble.map); // 类型“string”上不存在属性“map”。ts(2339)
}
