/**
 * @declaration Core Types
 * Unknonw never
 */
var userInput;
var userName;
userInput = 1;
userInput = '1';
if (typeof userInput === 'string') {
    userName = userInput;
}
function genrateError(message, code) {
    throw { message: message, errCoded: code };
}
genrateError('An error occurred!', 500);
