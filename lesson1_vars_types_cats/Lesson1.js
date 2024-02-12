/*
1) - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com',
'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
Вивести кожну змінну за допомогою: console.log
*/
const greeting = "hello";
const site = "owu";
const tld = ".com";
const tld2 = "ua";

const number1 = 1;
const number2 = 10;
const number3 = -999;
const number4 = 123;
const floatNumber = 3.14;
const floatNumber2 = 2.7;
const number5 = 16;

const boolType1 = true;
const boolType2 = false;

let testArray = [];
testArray.push(greeting,site,tld,tld2,number1,number2,number3,number4,floatNumber,floatNumber2,number5,boolType1,boolType2)

console.log(greeting)
console.log(site)
console.log(tld)
console.log(tld2)
console.log(number1)
console.log(number2)
console.log(number3)
console.log(number4)
console.log(floatNumber)
console.log(floatNumber2)
console.log(number5)
console.log(boolType1)
console.log(boolType2)
console.log("-".repeat(20))

console.log(testArray)

console.log("Length of test array = " + testArray.length)
/*

2) - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
*/
const firstName = "Bohdan "
const middleName = "Olegovich "
const lastName = "Pekar"

const person = firstName.concat(middleName, lastName)

console.log("-".repeat(20))

console.log(firstName)
console.log(middleName)
console.log(lastName)

console.log(person)

console.log("-".repeat(20))
    /*

3) - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
  let a = 100; let b = '100'; let c = true;

  */
let a = 100;
let b = "100";
let c = true;

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

console.log("-".repeat(20))

/*

Додаткове для тих хто цікавився prompt`oм
- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям,
По-Батькові та роками. та вивести в консоль
 */

console.log("Hello world, test!")
