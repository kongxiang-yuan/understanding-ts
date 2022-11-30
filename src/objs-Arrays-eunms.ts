/**
 * @declaration Core Types
 * object Array Tuple Enum Any
 */
// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2

/**
 * 递增 默认值 反向枚举...
 * Docs: https://www.typescriptlang.org/docs/handbook/enums.html
 */
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'kongxiangyuan',
  age: 21,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
}

// person.role.push('admin')
// person.role[0] = 10
// person.role = [1,'admin', 0]

let favoriteActivites: any[]
favoriteActivites = ['Sports']
favoriteActivites = [true]
console.log(person.name)

for (const hobble of person.hobbies) {
  console.log(hobble.toUpperCase())
}

if (person.role === Role.ADMIN) {
  console.log('is admin ')
}
