/**
 * @declaration Core Types
 * Function & callbacks
 */
function add(n1, n2) {
    return n1 + n2;
}
function addHanHandle(n1, n2, cb) {
    var reslut = n1 + n2;
    cb(reslut);
}
function printReslut(num) {
    console.log('Reslut: ', num);
}
printReslut(add(20, 1));
var combineValues;
combineValues = add;
// combineValues = printReslut
// combineValues = 5 //不能将类型“number”分配给类型“Function”。ts
console.log(combineValues(8, 8));
addHanHandle(10, 20, function (reslut) {
    console.log(reslut);
});
