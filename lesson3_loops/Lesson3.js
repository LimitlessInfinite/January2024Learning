/*
1.1 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

*/

let arrayPinkFloyd = [
    {
        title:"The Piper at the Gates of Dawn",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/f3/PinkFloyd_PiperAtTheGatesOfDawn.jpg",
        year:"1967"
    },
    {
        title: "A Saucerful of Secrets",
        image: "https://upload.wikimedia.org/wikipedia/ru/5/55/PinkFloyd-album-saucerfulofsecrets.jpg",
        year: "1968"
    },
    {
        title: "Music from the Film More",
        image: "https://upload.wikimedia.org/wikipedia/ru/9/99/More_Pink_Floyd_Cover.jpg",
        year: "1969"
    },
    {
        title: "Ummagumma",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/f5/Ummagumma.jpeg",
        year: "1969"
    },
    {
        title: "Atom Heart Mother",
        image: "https://upload.wikimedia.org/wikipedia/ru/1/10/PinkFloyd-album-atomheartmother.jpg",
        year: "1970"
    },
    {
        title: "Meddle",
        image: "https://upload.wikimedia.org/wikipedia/ru/1/1e/Meddle_album_cover.jpg",
        year: "1971"
    },
    {
        title: "Obscured by Clouds",
        image: "https://upload.wikimedia.org/wikipedia/ru/4/46/Obscured_by_Clouds_Pink_Floyd.jpg",
        year: "1972"
    },
    {
        title: "The Dark Side of the Moon",
        image: "https://upload.wikimedia.org/wikipedia/ru/1/15/The_Dark_Side_of_the_Moon.png",
        year: "1973"
    },
    {
        title: "Wish You Were Here",
        image: "https://upload.wikimedia.org/wikipedia/ru/3/39/WishYouWereHere-300.jpg",
        year: "1975"
    },
    {
        title: "Animals",
        image: "https://upload.wikimedia.org/wikipedia/ru/7/74/Pink_Floyd-Animals-Frontal.jpg",
        year: "1977"
    },
    {
        title: "The Wall",
        image: "https://upload.wikimedia.org/wikipedia/ru/1/13/PinkFloydWallCoverOriginalNoText.jpg",
        year: "1979"
    }]

for (let i = 0; i < arrayPinkFloyd.length; i++) {
    document.write('<div class="cover"> '+
        '<div class="imgBlock">'+
        '<img class="backgroundCover" src="'+ arrayPinkFloyd[i].image +'" alt="descriptionBackg">'+ '</div>' +
        '<img class="pict" src="'+ arrayPinkFloyd[i].image +'" alt="test">'+
        '<div class="description">'+'<div class="titleDescr">'+ '<h7 class="h7">' + arrayPinkFloyd[i].title + '</h7>' +'</div>' + '<div class="titleDescr">'+'<h7 class="h8">'+ arrayPinkFloyd[i].year +'</h7>'+'</div>'+'</div>' +
    '</div>');
}
// 1.2 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
const levels = ["Level 1","Level 2","Level 3","Level 4","Level 5","Level 6","Level 7","Level 8","Level 9","Level 10"]

document.write('<div class="separator">Task 1.2</div>')
for (let i = 0; i < levels.length; i++) {
    document.write('<div class="smallCard">'+
        '<div class="smallField">' +levels[i] + ' </div>' +
        '<div class="smallField">' + "index = " + i + '</div>'
        + '</div>')
}
// 1.3 - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
document.write('<div class="separator">Task 1.3</div>')

var task3 = 1;
while (task3 <= 20) {
    document.write('<div class="smallCard">'+'<h1 style="color: white">' + "Iteration" + task3 + '</h1>'+'</div>')
    task3++
}
/*
2 - Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону
Масив:

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

ШАБЛОН:
 <ul>
    <li>ITEM OF ARRAY</li>
    <!--
        і тд інші об'єкти масиву
         ...
         ...
         ...
    -->
</ul>

замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
*/
document.write('<div class="separator">Task 1.4</div>')


let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

for (let i = 0; i < listOfItems.length; i++) {
    document.write('<div class="smallCard">'+
        '<ul>'+
        '<li>'+ listOfItems[i] +'</li>'
        +'</ul>'
        +'</div>')

}
/*
3 -Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону
Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

			let products = [
				{
					title: 'milk',
					price: 22,
					image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
				},
				{
					title: 'juice',
					price: 27,
					image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
				},
				{
					title: 'tomato',
					price: 47,
					image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
				},
				{
					title: 'tea',
					price: 15,
					image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
				},
			];

ШАБЛОН
 <div class="product-card">
        <h3 class="product-title">TITLE. Price - PRICE</h3>
        <img src="IMAGE" alt="" class="product-image">
</div>
Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

*/
document.write('<div class="separator">Task 3</div>')


let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (let i = 0; i < products.length; i++) {
    document.write('<div class="smallCard">'+
        '<h3 class="smallField">'+ products[i].title +" Price = "+ products[i].price+'</h3>' +
        '<img src="'+ products[i].image +'" alt="'+ products[i].title +'" class="smallImage">'
        +'</div>')
}



/*

--------------------
4 - є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
 за допомоги циклу вивести:
 - користувачів зі статусом true
 - користувачів зі статусом false
 - користувачів які старші за 30 років

-------------------------------------------------
--створити масив з:
- з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль

-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль




- є масив [2,17,13,6,22,31,45,66,100,-18] :
1. перебрати його циклом while
2. перебрати його циклом for
3. перебрати циклом while та вивести  числа тільки з непарним індексом
4. перебрати циклом for та вивести  числа тільки з непарним індексом
5. перебрати циклом while та вивести  числа тільки парні  значення
6. перебрати циклом for та вивести  числа тільки парні  значення
7. замінити кожне число кратне 3 на слово "okten"
8. вивести масив в зворотньому порядку.
9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write



стоврити масив книжок (назва, кількість сторінок, автори , жанри).
-знайти наібльшу книжку.
- знайти книжку/ки з найбільшою кількістю жанрів
- знайти книжку/ки з найдовшою назвою
- знайти книжку/ки які писали 2 автори
- знайти книжку/ки які писав 1 автор
----------------------------------------------------------------------------
1. Створити пустий масив та :
       a. заповнити його 50 парними числами за допомоги циклу.
       b. заповнити його 50 непарними числами за допомоги циклу.
       c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
       d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
 2. Вивести за допомогою console.log кожен третій елемен
 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
 5. Вивести кожен елемент масиву, сусід справа якого є парним
  EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.



- Дано 2 масиви з рівною кількістю об'єктів.
Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
Записати цей об'єкт в новий масив
Example:
let usersWithCities = [
    {
        id: 1, // <===
        name: 'vasya',
        age: 31,
        status: false,
        address: {
            user_id: 1, // <===
            country: 'Ukraine',
            city: 'Ternopil'
        }
    },
    // TO BE CONTINUED .....
]




- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.


- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

 */