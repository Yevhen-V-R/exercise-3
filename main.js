/* Задание на урок:

1) Первую часть задания повторить по уроку т.е. создать функции с определенным функционалом

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных genres

P.S. Функции вызывать не обязательно*/

"use strict";

// Код возьмите из предыдущего домашнего задания

// ----------------------
// #1 Создаем функции
// ----------------------
// #1.1 declare global variable as undefined
// ......................
let numberOfFilms;

// #1.2 - declare function
// ......................
function start() {
  // instructions to do or functionality to do

  // 1.2.1 modify variable to store answer data value from user
  // ...................
  numberOfFilms = Number(prompt(`Сколько фильмов вы уже посмотрели?`));

  // 1.2.2 создаем цикл где делаем проверку на пустую строку '', || или на нажатие клавиши ОТМЕНА null, || или введено не числовое значение isNaN() т.е. если пользователь ввел не число то это true
  // ....................
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    // 1.2.3 повторяем вопрос пльзователю если одно из условий является true
    // ..................
    numberOfFilms = Number(prompt(`Сколько фильмов вы уже посмотрели?`));
  }
}

// #1.3 - call function to run its functionality
// .....................
start();

// Создаем базу данных т.е. Создать объект personalMovieDB и в него поместить такие переменные count, movies, actors, genres для помещения value данных create object to store data of key value pairs
const personalMovieDB = {
  // key value pairs

  // ответ пользователя
  count: numberOfFilms,
  // пустой объект
  movies: {},
  // пустой объект
  actors: {},
  // пустой массив
  genres: [],
  // boolean data value of database values
  privat: false,
  // privat: true,
};
// т.о. мы создали объект с данными, где key is simply variable of data value

// #1.4 - вызываем цикл потребованию
// ......................
function rememberMyFilms() {
  // Автоматизировать вопросы пользователю про фильмы при помощи цикла
  for (let i = 0; i < 2; i++) {
    // Задайте пользователю по два раза вопросы и ответы стоит поместить в отдельные переменные
    const a = prompt("Один из последних просмотренных фильмов?"),
      b = prompt("На сколько оцените его?");
    // т.о. мы создали переменные const a, b чтоб сохранить полученные ответы от пользователей

    // Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки, отменить ответ или ввести название фильма длинее, чем 50 символов.
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      // если все хорошо то помещаем полученное значение от пользователя в переменную

      // т.е. записать ответы в объект movies
      personalMovieDB.movies[a] = b;

      // to test in console
      console.log("done");

      // А иначе Если пользователь сделал что-то не так то возвращаем пользователя к вопросам опять.
    } else {
      // to test in console
      console.log("error");

      // use decrement js operator to return back to questions
      i--;
    }
  }
}

// #1.5 - call function to run its functionality code
// ......................
rememberMyFilms();

// #1.6 - create function for checking condition
// ......................
function detectPersonalLevel() {
  // При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
  // --------------------
  // если меньше 10
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");

    // а иначе если от 10 до 30
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");

    // а иначе если больше или равно 30
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");

    // а иначе если не подошло ни к одному варианту
  } else {
    console.log("Произошла ошибка");
  }
}

// #1.7 - call function to run its functionality code
// ......................
detectPersonalLevel();

// т.о. мы создали алгоритм действий из функций (start(), rememberMyFilms(), detectPersonalLevel()), которые выполняют свои определенные действия и данные функции вызыватся только тогда когда они действительно необходимы, а в будущем можно их подвязать к пользователю когда кликая на кнопку показывать его уровень и вызовится данная функция detectPersonalLevel() и т.д.

// ----------------------
// #2 Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции false - выводит в консоль главный объект программы
// ----------------------
function showMyDB(hidden) {
  // делаем проверку условия если наша база данных не скрыта то мы ее показываем используя js оператор отрицания '!'
  if (!hidden) {
    // Проверить, чтобы все работало без ошибок в консоли т.е. показываем базу данных в консоле
    console.log(personalMovieDB);
  }
}
// т.о. мы создали паттерн '(hidden)' т.е. шаблон поведения
// NOTE: variable 'privat' is with initial value of false will be changed to value of true because of NOT '!' js negative operator

// #2.1 call function to run its functionality & pass argument
// ......................
showMyDB(personalMovieDB.privat);
// NOTE: мы передаем часть нашей базы данных как аргумент

// т.о. в результате покажет базу данных т.к. privat:false, а если мы его изменим на privat:true то ничего не покажет

// ----------------------
// #3 Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных genres
// ----------------------

// #3.1 function declaration
// ......................
function writeYourGenres() {
  // #3.2 цикл из 3x вопросов для пользователя т.е. задем пользователю вопрос
  for (let i = 1; i <= 3; i++) {
    // #3.3 задаем вопрос пользователю 'prompt()' и помещаем ответ в переменную 'const genreQ'
    // ..................
    // const genreQ = prompt(`Ваш любимый жанр под номером ${i}`);

    // #3.4 помещаем ответы пользователя 'genreQ' в базу данных
    // ..................
    // personalMovieDB.genres[i - 1] = genreQ;

    // ЛИБО SHORT WAY SYNTAX можно таким способом записать код объединив две задачи 3.3 и 3.4 в один код
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    // т.о. помещаем ответы от пользователя в переменную массива 'genres' объекта нашей базы данных 'personalMovieDB' созданной выше

    // т.о. наш короткий код работает быстрее чем используя отдельную переменную в которой зранили бы ответ и потом обращались бы к этой переменной
  }
}
// т.о. мы используем синтакс [i - 1] - означает что первый элемент, который помещаем в базу данных должен быть под индексом 0, НО при пользователю мы показываем цифру 1 т.е. указав переменную цикла 'let i = 1' в FOR цикле т.к. пользовательский интерфейс начинается с цифры 1, а не с 0 как массив, т.к. если не сделав данный синтаксис [i - 1] мы получим массив начиная с [empty, ...] и это empty создает дырку в массиве почем и указываем [i - 1] чтоб получить 0 для первого элемента массива

// #3.2 call function to run its functionality
// ......................
writeYourGenres();

// Далее создайте точку контроля данного кода и сохраните его в репозитории GitHub

// Steps to create commit on Git
// ----------------------
/*
1. Go to your folder then click on right mouse button to open up terminal & choose:
// ......................
'Open in Integrated Terminal'

2. Change directory command if need to: 
// ......................
// cd projectName

3. Добавляем все '-A' файлы с измпенениями в репазиторий для работы с ними
// ......................
// git add -A

ИЛИ по отдельности
// git add index.html
// git add style.css
// git add main.js

4. Проверить статус репозитория
// ......................
// git status

5. Далее создаем контрольную точку т.е. папку с файлами для работы с ними
// ......................
// git commit -a -m"message about what changes are done in file or files"

6. Проверить статус
// ......................
// git status
*/
