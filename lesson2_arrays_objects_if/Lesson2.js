/*
Масиви та об'єкти:
1) - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
*/
const array = [1,"hello",true,{object:"test"},'character',19274277434,false,"world",{object2:26},1337];
console.log(array)
array.forEach(element => console.log(element))
console.log(array.length)
/*
2) - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
*/
const arrayObject = [
    {title:"The Witcher",pageCount:235,genre:"fantasy"},
    {title:"Sword of Destiny",pageCount: 384,genre:"fantasy"},
    {title:"The Last Wish",pageCount:288,genre:"fantasy"}];
arrayObject.forEach(element => console.log(element))
/*
3) - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
 Поле "автори" - являється  масивом. Кожен автор має поля name та age.
 */
const arrayObject2 = [
    {title:"Blood of Elves",pageCount:320,genre:"fantasy",authors: [{name:"Andrzej Sapkowski",age:75}]},
    {title:"Time of Contempt",pageCount:331,genre:"fantasy",authors:[{name:"Andrzej Sapkowski",age:75}]},
    {title:"Baptism of Fire",pageCount:343,genre:"fantasy",authors: [{name:"Andrzej Sapkowski",age:75}]}
];

arrayObject2.forEach(element => console.log(element))


/*
4) - Створити масив з 10 об'єктами які описують сутніть "користувач".
Поля: name, username,password. Вивести в консоль пароль кожного користувача


*/
/*
Логічні розгалуження:
5) - Є змінна х, якій ви надаєте довільне числове значення.
    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
    Перевірте  скрипт при a, що дорівнює 1, 0, -3

6) - Дано змінну time яка рівна числу від 0 до 59.
 Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).

7) - У змінній day дано якесь число від 1 до 31.

Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
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