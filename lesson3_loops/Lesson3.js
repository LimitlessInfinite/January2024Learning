/*
1.1 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

*/

let arrayPinkFloyd = [
    {
        title: "The Piper at the Gates of Dawn",
        image: "https://upload.wikimedia.org/wikipedia/ru/f/f3/PinkFloyd_PiperAtTheGatesOfDawn.jpg",
        year: "1967"
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
    document.write('<div class="cover"> ' +
        '<div class="imgBlock">' +
        '<img class="backgroundCover" src="' + arrayPinkFloyd[i].image + '" alt="descriptionBackg">' + '</div>' +
        '<img class="pict" src="' + arrayPinkFloyd[i].image + '" alt="test">' +
        '<div class="description">' + '<div class="titleDescr">' + '<h7 class="h7">' + arrayPinkFloyd[i].title + '</h7>' + '</div>' + '<div class="titleDescr">' + '<h7 class="h8">' + arrayPinkFloyd[i].year + '</h7>' + '</div>' + '</div>' +
        '</div>');
}
// 1.2 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
const levels = ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5", "Level 6", "Level 7", "Level 8", "Level 9", "Level 10"]

document.write('<div class="separator">Task 1.2</div>')
for (let i = 0; i < levels.length; i++) {
    document.write('<div class="smallCard">' +
        '<div class="smallField">' + levels[i] + ' </div>' +
        '<div class="smallField">' + "index = " + i + '</div>'
        + '</div>')
}
// 1.3 - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
document.write('<div class="separator">Task 1.3</div>')

var task3 = 1;
while (task3 <= 20) {
    document.write('<div class="smallCard">' + '<h1 style="color: white">' + "Iteration" + task3 + '</h1>' + '</div>')
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
    document.write('<div class="smallCard">' +
        '<ul>' +
        '<li>' + listOfItems[i] + '</li>'
        + '</ul>'
        + '</div>')

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
    document.write('<div class="smallCard">' +
        '<h3 class="smallField">' + products[i].title + " Price = " + products[i].price + '</h3>' +
        '<img src="' + products[i].image + '" alt="' + products[i].title + '" class="smallImage">'
        + '</div>')
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

*/
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

document.write('<div class="separator">Task 4</div>')

document.write('<div style="width: 1366px; height: 70px; background-color: darkgoldenrod;text-align: center;font-size: 50px" >' + "Users age 30+ years old" + '</div>')

for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 30) {
        document.write('<div class="smallCard">' +
            '<div>' + '<h3 class="smallField">' + "Name: " + users[i].name + '</h3>' + '</div>' +
            '<div>' + '<h3 class="smallField">' + "Age: " + users[i].age + '</h3>' + '</div>' +
            '<div>' + '<h3 class="smallField">' + "Status: " + users[i].status + '</h3>' + '</div>'
            + '</div>')
    }
}

document.write('<div style="width: 1366px; height: 70px; background-color: darkgoldenrod;text-align: center;font-size: 50px" >' + "Users with true status" + '</div>')

for (let i = 0; i < users.length; i++) {
    if (users[i].status) {
        document.write('<div class="smallCard">' +
            '<div class="smallField">' + '<h3>' + "Name: " + users[i].name + '</h3>' + '</div>' +
            '<div class="smallField">' + '<h3>' + "Age: " + users[i].age + '</h3>' + '</div>' +
            '<div class="smallField">' + '<h3>' + "Status: " + users[i].status + '</h3>' + '</div>'
            + '</div>')
    }
}


document.write('<div style="width: 1366px; height: 70px; background-color: darkgoldenrod;text-align: center;font-size: 50px" >' + "Users with false status" + '</div>')

for (let i = 0; i < users.length; i++) {
    if (!users[i].status) {
        document.write('<div class="smallCard">' +
            '<div class="smallField">' + '<h3>' + "Name: " + users[i].name + '</h3>' + '</div>' +
            '<div class="smallField">' + '<h3>' + "Age: " + users[i].age + '</h3>' + '</div>' +
            '<div class="smallField">' + '<h3>' + "Status: " + users[i].status + '</h3>' + '</div>'
            + '</div>')
    }
}
/*


-------------------------------------------------
5 --створити масив з:
- з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль

*/

document.write('<div class="separator">Task 5 console</div>')

const intArr = [1, 2, 3, 4, 5];
const stringArr = ["Hello", " world!", " I", " love", " javascript"];
const mixArr = ["String", 10, true, "TestString", 20];

for (let i = 0; i < intArr.length; i++) {
    console.log(intArr[i])
}

for (let i = 0; i < stringArr.length; i++) {
    console.log(stringArr[i])
}

for (let i = 0; i < mixArr.length; i++) {
    console.log(mixArr[i])
}

/*

6 -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

*/

document.write('<div class="separator">Task 6 console</div>')

let emptyArr = [];

for (let i = 0; i < 5; i++) {
    emptyArr[i] = i * 10;
}

for (let i = 0; i < emptyArr.length; i++) {
    console.log(emptyArr[i])
}

/*


7 - є масив [2,17,13,6,22,31,45,66,100,-18] :
1 перебрати циклом while та вивести  числа тільки з непарним індексом
2. перебрати циклом for та вивести  числа тільки з непарним індексом
3. перебрати циклом while та вивести  числа тільки парні  значення
4. перебрати циклом for та вивести  числа тільки парні  значення
5. замінити кожне число кратне 3 на слово "okten"
6. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

*/
document.write('<div class="separator">Task 7 console</div>')

let testArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

console.log("Task 7.1__________________________________________")

var iterator = 0;
while (iterator < testArr.length) {
    if (testArr[iterator] % 2 !== 0) {
        console.log(testArr[iterator])
    }
    iterator += 1;
}
console.log("Task 7.2__________________________________________")

for (let i = 0; i < testArr.length; i++) {
    if (testArr[i] % 2 !== 0) {
        console.log(testArr[i])
    }
}

console.log("Task 7.3__________________________________________")
iterator = 0;

while (iterator < testArr.length) {
    if (testArr[iterator] % 2 === 0) {
        console.log(testArr[iterator])
    }
    iterator += 1;
}
console.log("Task 7.4__________________________________________")

for (let i = 0; i < testArr.length; i++) {
    if (testArr[i] % 2 === 0) {
        console.log(testArr[i])
    }
}

console.log("Task 7.5__________________________________________")

for (let i = 0; i < testArr.length; i++) {
    if (testArr[i] % 3 === 0) {
        testArr[i] = "okten"
        console.log(testArr[i] + "index: " + i)
    }
}

console.log("Task 7.6___while_______________________________________")

while (iterator > 0) {
    if (testArr[iterator - 1] % 2 !== 0) {
        console.log(testArr[iterator - 1])
    }
    iterator--;
}
console.log("Task 7.6___for_______________________________________")

for (let i = testArr.length - 1; i > 0; i--) {
    if (testArr[i] % 2 !== 0) {
        console.log(testArr[i])
    }
}
console.log("Task 7.6___while_______________________________________")
iterator = testArr.length - 1;

while (iterator > 0) {
    testArr[iterator] % 2 === 0 ? console.log(testArr[iterator]) : ""
    iterator--
}

console.log("Task 7.6___for_______________________________________")

for (let i = testArr.length - 1; i > 0; i--) {
    testArr[i] % 2 === 0 ? console.log(testArr[i]) : ''
}


// 8.1- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let tenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("task 8.1____________________________")
for (let i = 0; i < tenNumbers.length; i++) {
    console.log(tenNumbers[i])
}
//8.2 - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
console.log("task 8.2____________________________")
let tenStrings = ["word", "word", "word", "word", "word", "word", "word", "word", "word", "word"];

for (let i = 0; i < tenStrings.length; i++) {
    console.log(tenStrings[i] + i)
}

//8.3 - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
console.log("task 8.3____________________________")
let tenMix = ["word", 1, true, {field1: "empty"}, false, 'ch', 1.5, "test", 100000, null];

for (let i = 0; i < tenMix.length; i++) {
    console.log(tenMix[i])
}

//8.4 - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
console.log("task 8.4____________________________")

for (let i = 0; i < tenMix.length; i++) {
    typeof tenMix[i] === "boolean" ? console.log(tenMix[i]) : ''
}

//8.5 - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
console.log("task 8.5____________________________")

for (let i = 0; i < tenMix.length; i++) {
    typeof tenMix[i] === "number" ? console.log(tenMix[i]) : ''
}

//8.6 - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
console.log("task 8.6____________________________")

for (let i = 0; i < tenMix.length; i++) {
    typeof tenMix[i] === "string" ? console.log(tenMix[i]) : ''
}

//8.7 - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

console.log("task 8.7____________________________")

let emptyTenMix = []

for (let i = 0; i < 10; i += 3) {
    emptyTenMix[i] = i + 1
}
for (let j = 1; j < 10; j += 3) {
    emptyTenMix[j] = true;
}
iterator = 0
for (let k = 2; k < 10; k += 3) {
    emptyTenMix[k] = "word" + ++iterator
}
for (let i = 0; i < emptyTenMix.length; i++) {
    console.log(emptyTenMix[i])
}

//8.8 - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

console.log("task 8.8____________________________")
document.write('<div class="separator">Task 8.8</div>')

for (let i = 0; i < tenMix.length; i++) {
    document.write('<div class="smallCard">' +
        '<h3 class="smallField">' + tenMix[i] + '</h3>'
        + '</div>')
    console.log(tenMix[i])
}

//8.9 - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log("task 8.9____________________________")
document.write('<div class="separator">Task 8.9</div>')


for (let i = 1; i <= 100; i++) {
    document.write('<div class="smallCard">' +
        '<h3 class="smallField">' + "Iteration: " + i + '</h3>'
        + '</div>')
    console.log("Iteration: " + i)
}
// 9.1 - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
console.log("Task 9.1________________________")
document.write('<div class="separator">Task 9.1</div>');

for (let i = 1; i <= 100; i += 2) {
    document.write('<div class="smallCard">' +
        '<h3 class="smallField">' + "Iteration: " + i + '</h3>'
        + '</div>')
    console.log("Iteration: " + i)
}

//9.2 - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
console.log("Task 9.2________________________")
document.write('<div class="separator">Task 9.2</div>');

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        document.write('<div class="smallCard">' +
            '<h3 class="smallField">' + "Iteration: " + i + '</h3>'
            + '</div>')
        console.log("Iteration: " + i)
    }
}

//9.3 - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
console.log("Task 9.3________________________")
document.write('<div class="separator">Task 9.3</div>');

for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        document.write('<div class="smallCard">' +
            '<h3 class="smallField">' + "Iteration: " + i + '</h3>'
            + '</div>')
        console.log("Iteration: " + i)
    }
}
/*


10 - стоврити масив книжок (назва, кількість сторінок, автори , жанри).
-знайти наібльшу книжку.
- знайти книжку/ки з найбільшою кількістю жанрів
- знайти книжку/ки з найдовшою назвою
- знайти книжку/ки які писали 2 автори
- знайти книжку/ки які писав 1 автор
*/
let books = [
    {title: "War and Peace", pages: 1225, authors: ["Leo Tolstoy"], genres: ["Novel"]},
    {title: "1984", pages: 328, authors: ["George Orwell"], genres: ["Dystopia"]},
    {title: "To Kill a Mockingbird", pages: 281, authors: ["Harper Lee"], genres: ["Novel"]},
    {title: "The Great Gatsby", pages: 180, authors: ["F. Scott Fitzgerald"], genres: ["Novel"]},
    {title: "Lord of the Flies", pages: 224, authors: ["William Golding"], genres: ["Allegory"]},
    {title: "Pride and Prejudice", pages: 279, authors: ["Jane Austen"], genres: ["Novel"]},
    {title: "The Chronicles of Narnia", pages: 767, authors: ["C. S. Lewis", "Another Author"], genres: ["Fantasy"]},
    {title: "Animal Farm", pages: 112, authors: ["George Orwell"], genres: ["Allegory"]},
    {title: "Dune", pages: 412, authors: ["Frank Herbert"], genres: ["Science Fiction"]},
    {title: "The Shining", pages: 447, authors: ["Stephen King"], genres: ["Horror", "Thriller"]}
];

let biggestBook = books[0];
let manyGenres = books[0];
let largestTitle = books[0];
let twoAuthors = books[0];
let oneAuthor = [books[0]]

console.log("Task 10__________________________")

for (let i = 1; i < books.length; i++) {
    if (books[i].pages > biggestBook.pages) biggestBook = books[i]
}
console.log("Biggest book is: " + biggestBook.title + " (" + biggestBook.pages + ")");

for (let i = 1; i < books.length; i++) {
    if (books[i].genres.length > manyGenres.genres.length) manyGenres = books[i];
}
console.log("The largest number of genres has: " + manyGenres.title + " (" + manyGenres.genres + ")");

for (let i = 1; i < books.length; i++) {
    if (books[i].title.length > largestTitle.title.length) largestTitle = books[i];
}
console.log("The longest name has: " + largestTitle.title + " (" + largestTitle.title.length + ")");

for (let i = 1; i < books.length; i++) {
    if (books[i].authors.length > twoAuthors.authors.length) twoAuthors = books[i];
}
console.log("The largest count of authors has: " + twoAuthors.title + " (" + twoAuthors.authors + ")");

for (let i = 1; i < books.length; i++) {
    if (books[i].authors.length === oneAuthor[0].authors.length) {
        oneAuthor[oneAuthor.length] = books[i]
    } else if (books[i].authors.length < oneAuthor[0].authors.length) {
        oneAuthor.length = 1;
        oneAuthor[0] = books[i]
    }
}

console.log("Books which have no more than one author: ");
for (let i = 0; i < oneAuthor.length; i++) {
    console.log(i + 1 + ": " + oneAuthor[i].authors)
}


// 11.1 - Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
console.log("Task 11.1__________________________")
let emptyArrayTest = [];

for (let i = 0; i < 50; i++) {
    if (emptyArrayTest.length < 1) {
        emptyArrayTest[i] = 2
    } else emptyArrayTest[i] = emptyArrayTest[i - 1] + 2;
}
console.log(emptyArrayTest)
//     b. заповнити його 50 непарними числами за допомоги циклу.

console.log("_______________________________")
emptyArrayTest.length = 0;

for (let i = 0; i < 50; i++) {
    if (emptyArrayTest.length < 1) {
        emptyArrayTest[i] = 1
    } else emptyArrayTest[i] = emptyArrayTest[i - 1] + 2;
}
console.log(emptyArrayTest)

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
console.log("_______________________________")

emptyArrayTest.length = 0;

for (let i = 0; i < 20; i++) {
    emptyArrayTest.push(Math.floor(Math.random() * 10) + 1);

}

console.log(emptyArrayTest)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
console.log("_______________________________")
emptyArrayTest.length = 0;

for (let i = 0; i < 20; i++) {
    emptyArrayTest.push(Math.floor(Math.random() * 732) + 8)
}
console.log(emptyArrayTest)


// 11.2 - Вивести за допомогою console.log кожен третій елемен
console.log("__11.2_____________________________")

for (let i = 0; i < emptyArrayTest.length; i += 3) {
    console.log(emptyArrayTest[i])
}

// 11.3 - Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
console.log("__11.3_____________________________")

for (let i = 0; i < emptyArrayTest.length; i += 3) {
    emptyArrayTest[i] % 2 === 0 ? console.log(emptyArrayTest[i]) : ''
}
// 11.4 - Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
console.log("__11.4_____________________________")

let newArr = [];

for (let i = 0; i < emptyArrayTest.length; i += 3) {
    if (emptyArrayTest[i] % 2 === 0) {
        newArr.push(emptyArrayTest[i])
    }
}
console.log(newArr)

// 11.5 - Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
console.log("__11.5_____________________________")

console.log(emptyArrayTest)
for (let i = 0; i < emptyArrayTest.length - 1; i++) {
    if (emptyArrayTest[i + 1] % 2 === 0) {
        console.log(emptyArrayTest[i])
    }
}

// 11.6 - Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
console.log("__11.6_____________________________")

let averageCheck = 0
let shoppingCart = [100, 250, 50, 168, 120, 345, 188];

for (let i = 0; i < shoppingCart.length; i++) {
    averageCheck += shoppingCart[i]
}
averageCheck = Math.floor(averageCheck / shoppingCart.length)
console.log(averageCheck)

// 11.7 Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
console.log("__11.7_____________________________")
shoppingCart.length = 0;

for (let i = 0; i < emptyArrayTest.length; i++) {
    shoppingCart.push(emptyArrayTest[i] * 5)
}
console.log(shoppingCart)

// 11.8 Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
shoppingCart.length = 0;
console.log("__11.8_____________________________")


console.log(emptyTenMix)

for (let i = 0; i < emptyTenMix.length; i++) {
    emptyArrayTest
    typeof emptyTenMix[i] === 'number' ? shoppingCart.push(emptyTenMix[i]) : ''
}
console.log(shoppingCart)


// 12 - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
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

let usersWithCities = []

for (let i = 0; i < usersWithId.length; i++) {
    for (let j = 0; j < citiesWithId.length; j++) {
        if (usersWithId[i].id === citiesWithId[j].user_id) {
            usersWithCities.push({
                id: usersWithId[i].id,
                name: usersWithId[i].name,
                age: usersWithId[i].age,
                status: usersWithId[i].status,
                address: {
                    user_id: citiesWithId[j].user_id,
                    country: citiesWithId[j].country,
                    city: citiesWithId[j].city
                }
            })
        }
    }
}

console.log(usersWithCities)
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]
//


/*
----------------------------------------------------------------------------
13
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

 */
console.log("__13_____________________________")

let abc = ['a', 'b', 'c'];
console.log(abc)

for (let i = 1; i < abc.length; i++) {
    abc[0] += abc[i]
}
abc = abc[0]
console.log(abc)

abc = ['a', 'b', 'c'];

console.log("__13___while__________________________")

iterator = 1;

while (iterator < abc.length) {
    abc[0] += abc[iterator]
    iterator++
}
abc = abc[0]

console.log(abc)

abc = ['a', 'b', 'c'];
iterator = 1;
console.log("__13___for_of__________________________")

for (let value of abc.slice(1)) {

    abc[0] += value
}

abc = abc[0]
console.log(abc)