/**
 * @declaration Core Types
 * 类型保护 类型断言
 */

/**
 * typeof
 */
 console.log('typeof start')

 type Combinable = string | number
 type Numric = number | boolean
 
 type Universal = Combinable & Numric
 
 function add(a: Combinable, b: Combinable) {
   if (typeof a === 'string' || typeof b === 'string') {
     return a.toString() + b.toString()
   }
   return a + b
 }
 console.log(add('1', 2))
 console.log('typeof end')
 
 /***
  * in
  */
 console.log('in start')
 
 type Admin = {
   name: string
   privilges?: string[]
 }
 
 type Employee = {
   name: string
   startDate: Date
 }
 
 type unknownEmployee = Admin | Employee
 
 function pintUnknownEmployee(emp: unknownEmployee) {
   if ('privilges' in emp) {
     return emp.privilges
   }
   if ('startDate' in emp) {
     return emp.startDate
   }
 }
 
 const res = pintUnknownEmployee({
   name: 'kxy',
   startDate: new Date('2022-12-04'),
 })
 console.log(res)
 console.log('in end')
 
 /**
  * instanceof
  */
 
 console.log('instanceof start')
 
 class Car {
   drive() {
     console.log('Drive...')
   }
 }
 
 class Truck {
   drive() {
     console.log('Drive a truck...')
   }
 
   loadCargo(amount: string | number) {
     console.log('loaging... ' + amount)
   }
 }
 
 type vehicle = Car | Truck
 
 const v1 = new Car()
 const v2 = new Truck()
 
 function useVehicle(vehicle: vehicle) {
   vehicle.drive()
   if (vehicle instanceof Truck) {
     vehicle.loadCargo(1000)
   }
 }
 useVehicle(v1)
 useVehicle(v2)
 console.log('instanceof end')
 
 /**
  * 可辨别联合 Discriminated unions
  */
 console.log('Discriminated unions start')
 
 interface Circle {
   kind: 'circle'
   radius: number
 }
 
 interface Square {
   kind: 'square'
   sideLength: number
 }
 
 type Shape = Circle | Square
 
 function getArea(shape: Shape) {
   if (shape.kind === 'circle') {
     return Math.PI * shape.radius ** 2
   }
 }
 getArea({ radius: 200, kind: 'circle' })
 console.log('Discriminated unions end')
 
 /**
  * 类型断言 as
  */
 const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement
 
 /**
  * 索引签名 Index Signatures
  */
 
 interface errContaniner {
   [key: string]: number
 }
 
 const errBag: errContaniner = {
   code: 500,
 }
 console.log(errBag)
 