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
}
else if (day >= 11 && day <= 20) {
    console.log("2 decade");
}
else if (day >= 21 && day <= 31) {
    console.log("3 decade");
}
else console.log("Sorry, the day value is wrong")
/*
8) - Скласти розклад на тиждень за домопоги switch.

8.1 - Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано
на цей день (можна замість плану на день, назву дня англійською).

8.2  - Користувач вводить або має два числа.
        Потрібно знайти та вивести максимальне число з тих двох .
        Також потрібно врахувати коли введені рівні числа.

8.3 - є змінна х, яка може прийняти будь-яке значення
(стрінг, число, undefined, null  і тд включно). Напишіть код який,
  за допомоги  оператора || буде присвоювати змінній х значення "default"
  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


8.4  - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
За допомоги іф перевірити кожен його елемент на тривалість навчання.
У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

 */