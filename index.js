var isBirthdayData = true;
var ageData = 40;
var userNameData = 'John';
// function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
//     if (isBirthday) {
//         return `Congrats ${userName.toUpperCase()}, age; ${age + 1}`;
//     } else {
//         return 'Error'
//     }
// }
var logBrtMsg = function (isBirthday, userName, age) {
    if (isBirthday) {
        return "Congrats ".concat(userName.toUpperCase(), ", age; ").concat(age + 1);
    }
    else {
        return 'Error';
    }
};
logBrtMsg(isBirthdayData, userNameData, ageData);
