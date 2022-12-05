/**
 * @declaration Core Types
 *  函数重载(function overload)
 *  空值合并操作符(??)
 *  可选链操作符( ?. )
 */
 type Combinable = string | number
 type Numric = number | boolean
 
 type Universal = Combinable & Numric
 
 function add(a: string, b: string): string
 function add(a: number, b: number): number
 
 function add(a: string, b: number): string
 function add(a: number, b: string): string
 function add(a: Combinable, b: Combinable) {
   if (typeof a === 'string' || typeof b === 'string') {
     return a.toString() + b.toString()
   }
   return a + b
 }
 const res = add('1', '2')
 const res1 = add(1, 2)
 // res.split('')  // 类型“string | number”上不存在属性“split” 类型“number”上不存在属性“split”。ts
 console.log(res)
 
 const adventurer = {
   name: 'Alice',
   cat: {
     name: 'Dinah',
     age: undefined,
   },
 }
 console.log(adventurer?.cat?.name)
 
 // const userInput = ''
 const userInput = null
 const value = userInput ?? 'default'
 
 console.log(value)
 