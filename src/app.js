/**
 * @declaration Core Types
 * object Array Tuple
 */
var person = {
    name: 'kongxiangyuan',
    age: 21,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
// person.role.push('admin')
// person.role[0] = 10
// person.role = [1,'admin', 0]
person.role = [1, 'admin'];
var favoriteActivites;
favoriteActivites = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobble = _a[_i];
    console.log(hobble.toUpperCase());
    // console.log(hobble.map); // 类型“string”上不存在属性“map”。ts(2339)
}
