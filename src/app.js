/**
 * @declaration Core Types
 * object Array Tuple Enum
 */
// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2
/**
 * 递增 默认值 反向枚举...
 * Docs: https://www.typescriptlang.org/docs/handbook/enums.html
 */
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'kongxiangyuan',
    age: 21,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
// person.role.push('admin')
// person.role[0] = 10
// person.role = [1,'admin', 0]
var favoriteActivites;
favoriteActivites = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobble = _a[_i];
    console.log(hobble.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('is admin ');
}
