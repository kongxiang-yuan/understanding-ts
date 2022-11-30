/**
 * @declaration Core Types
 * object Arrays
 */

// const person: {
//   name: string
//   age: number
// } = {
  const person = {
    name: 'kongxiangyuan',
    age: 21,
    hobbies: ['Sports', 'Cooking'],
  }
  
  let favoriteActivites: string[]
  favoriteActivites = ['Sports']
  console.log(person.name)
  
  
  for(const hobble of person.hobbies){
    console.log(hobble.toUpperCase());
    // console.log(hobble.map); // 类型“string”上不存在属性“map”。ts(2339)
  
  }