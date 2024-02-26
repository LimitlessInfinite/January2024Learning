/*
Масиви та об'єкти:
1) - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
*/
const array = [1, "hello", true, {object: "test"}, 'character', 19274277434, false, "world", {object2: 26}, 1337];
console.log(array)
array.forEach(element => console.log(element))
console.log(array.length)
/*
2) - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
*/
const arrayObject = [
    {title: "The Witcher", pageCount: 235, genre: "fantasy"},
    {title: "Sword of Destiny", pageCount: 384, genre: "fantasy"},
    {title: "The Last Wish", pageCount: 288, genre: "fantasy"}];
arrayObject.forEach(element => console.log(element))
/*
3) - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
 Поле "автори" - являється  масивом. Кожен автор має поля name та age.
 */
const arrayObject2 = [
    {title: "Blood of Elves", pageCount: 320, genre: "fantasy", authors: [{name: "Andrzej Sapkowski", age: 75}]},
    {title: "Time of Contempt", pageCount: 331, genre: "fantasy", authors: [{name: "Andrzej Sapkowski", age: 75}]},
    {title: "Baptism of Fire", pageCount: 343, genre: "fantasy", authors: [{name: "Andrzej Sapkowski", age: 75}]}
];

arrayObject2.forEach(element => console.log(element))


/*
4) - Створити масив з 10 об'єктами які описують сутніть "користувач".
Поля: name, username,password. Вивести в консоль пароль кожного користувача
*/
const arrayObject3 = [
    {name: "John", username: "John1337", password: "32vdsv43fd"},
    {name: "Lenny", username: "LennyBigBoy", password: "43gfxbfxdbd"},
    {name: "David", username: "DavidCool11", password: "3vxcbdsage"},
    {name: "Nicolas", username: "Kage2004", password: "9dhjabsfd"},
    {name: "Ron", username: "Ronald1999", password: "lmdsfsfd"},
    {name: "Gunter", username: "MasculinityMen", password: "kdsjsdjhsd"},
    {name: "Kirk", username: "KrusaderAveGod", password: "skfjwefw"},
    {name: "Valentine", username: "BlessingSince0", password: "9hfish323"},
    {name: "Paul", username: "GendalfTheBest", password: "7fhd63hsd"},
    {name: "Duncan", username: "McLoud))", password: "hfshfbvs"},
];

arrayObject3.forEach(element => console.log(element.password))

/*
Логічні розгалуження:
5) - Є змінна х, якій ви надаєте довільне числове значення.
    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
    Перевірте  скрипт при a, що дорівнює 1, 0, -3
    */
const x = 10;

if (x !== 0) {
    console.log("True")
} else console.log("False")

console.log(x !== 0 ? "True" : "False")

/*

6) - Дано змінну time яка рівна числу від 0 до 59.
 Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).
*/
const time = 30;

if (time >= 0 && time < 15) {
    console.log("1 quarter");
} else if (time >= 15 && time < 30) {
    console.log("2 quarter");
} else if (time >= 30 && time < 45) {
    console.log("3 quarter");
} else if (time >= 45 && time < 59) {
    console.log("4 quarter");
} else console.log("Sorry, the time value is wrong")

/*

7) - У змінній day дано якесь число від 1 до 31.

Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
*/
const day = 1;

if (day >= 1 && day <= 10) {
    console.log("1 decade");
} else if (day >= 11 && day <= 20) {
    console.log("2 decade");
} else if (day >= 21 && day <= 31) {
    console.log("3 decade");
} else console.log("Sorry, the day value is wrong")
/*
8) - Скласти розклад на тиждень за домопоги switch.

8.1 - Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано
на цей день (можна замість плану на день, назву дня англійською).

*/

let dayOfWeek = prompt("Enter number of day")

switch (dayOfWeek) {
    case "1":
        alert("Weightlifting");
        break;
    case "2":
        alert("Code learning");
        break;
    case "3":
        alert("English learning");
        break;
    case "4":
        alert("Writing notes on programming");
        break;
    case "5":
        alert("Weightlifting");
        break;
    case "6":
        alert("Meeting with friends");
        break;
    case "7":
        alert("Pre-competition conditioning check");
        break;
    default:
        alert("Enjoy life =)");
}

/*

8.2  - Користувач вводить або має два числа.
        Потрібно знайти та вивести максимальне число з тих двох .
        Також потрібно врахувати коли введені рівні числа.
        */

let number1 = prompt("Enter the first number")
let number2 = prompt("Enter the second number")
if (!Number.isInteger(parseInt(number1)) || !Number.isInteger(parseInt(number2))) {
    alert("Incorrect format, enter only integers")
} else if (parseInt(number1) > parseInt(number2)) {
    alert("First number (" + number1 + ") is bigger than second number (" + number2 + ")")
} else if (parseInt(number2) > parseInt(number1)) {
    alert("Second number (" + number2 + ") is bigger than first number (" + number1 + ")")
} else if (parseInt(number2) === parseInt(number1)) {
    alert("Numbers equals")
}


/*

8.3 - є змінна х, яка може прийняти будь-яке значення
(стрінг, число, undefined, null  і тд включно). Напишіть код який,
  за допомоги  оператора || буде присвоювати змінній х значення "default"
  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

*/
let y = "true";

if (y === false || y === null || y === undefined || y === 0 || y === -1 || y === 0n || isNaN(y) || y === "") {
    alert("y value is falsy")
} else alert("y value is true")


/*
8.4  - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
За допомоги іф перевірити кожен його елемент на тривалість навчання.
У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

 */

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    if (coursesAndDurationArray[i].monthDuration > 5) {
        alert(coursesAndDurationArray[i].title + " super!")
    }
}

/*
8.5 - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
Потрібно зробити перевірку якщо кількість елементів у масиві більше або дорівнює 3,
 то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
    Інакше слід вивести на екран повідомлення про те, що це маленький масив,
    в якому менше 3-х елементів.
*/

let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];

if (friends.length >= 3) {
    alert("Is big array")
} else alert("Is small array")


/*
8.6 - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
    Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
*/

let value1 = 7;
let value2 = 6;
let value3 = 6;

if (value1 === value2 || value1 === value3 || value2 === value3) {
    alert("Enter 3 different values")
} else if ((value1 > value2 && value1 < value3) || (value1 > value3 && value1 < value2)) {
    alert(value1 + " is middle value")
} else if ((value2 > value1 && value2 < value3) || (value2 > value3 && value2 < value1)) {
    alert(value2 + " is middle value")
} else if ((value3 > value2 && value3 < value1) || (value3 > value1 && value3 < value2)) {
    alert(value3 + " is middle value")
}


/*
8.7 - Перепишіть конструкцію if з використанням умовного оператора '?':
let result;
if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Багато';
}
*/
let a = 1;
let b = 2;

let result = a + b < 4 ? "Мало" : "Много";


alert(result)

/*
8.8 - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
напишіть це тернарним оператором

*/
let numberCheck = 0;

alert(numberCheck > 0 ? "Positive" : numberCheck < 0 ? "Negative" : "Null");

/*
8.9 - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
    Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
*/
let test = true;

alert(test === true ? "True" : "False")
alert(test ? "True" : "False")

/*
9 - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
*/

let answer = prompt("What is the official name of JavaScript?")

if (answer.toLowerCase() === "ecmascript") {
    alert("Congratulations, that's the right answer")
} else alert("Wrong answer, the real name of JavaScript is ECMAScript")

/*
   10 - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
Користувач вводить номер квартири просто в змінні або через prompt('') .
    Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
*/
let entrance = parseInt(prompt("Enter the apartment number"))

if (entrance > 0 && entrance < 91) {
    if (entrance < 21) {
        alert("1 entrance")
    } else if (entrance > 20 && entrance < 49) {
        alert("2 entrance")
    } else alert("3 entrance")
} else alert("Invalid apartment number, enter a number from 1 to 90 inclusive")

/*
- Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
*/


/*
- Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
    Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
    Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
*/


/*
- За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
    числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
*/

