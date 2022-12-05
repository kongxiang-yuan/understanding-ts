/**
 * @declaration Core Types
 * 泛型 Generic
 */

function mergen<T extends {}, U>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}
const mergenObj = mergen({ name: 'kxy' }, { age: 21 })
console.log(mergenObj)

type Len = { length: number }
function countAndDescribe<T extends Len>(element: T): [T, string] {
  let describeText = 'Got no value.'

  if (element.length === 1) {
    describeText = 'Got 1 value.'
  } else if (element.length > 1) {
    describeText = 'Got ' + element.length + ' elements'
  }

  return [element, describeText]
}
console.log(countAndDescribe([1, 2, 3]))

interface API {
  '/api': {
    id: string | number
  }
  '/api/gerUser': {
    id: string | number
    name: string
  }
}

function request<T extends keyof API>(url: T, param: API[T]) {
  return { url, param } // axios.get(url, params: param)
}

console.log(request('/api', { id: 'P_01' }))
