"use strict";


/*
 https://beautifier.io/
 http://test2.mjack.com.ua/
 -//codedokode//-

 №1
 Напиши функцию создания генератора sequence(start, step).
 Она при вызове возвращает другую функцию-генератор, которая при каждом вызове дает число на 1 больше, и так до бесконечности.
 Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора.
 Шаг можно не указывать, тогда он будет равен одному. Начальное значение по умолчанию равно 0.
 Генераторов можно создать сколько угодно.
 */


function sequence(start = 0, step = 1) {
  var result = start - step;
  return function () {
    return result += step;
  };
};

/* 2-й вариант, он мне нравится меньше
 function sequence(start, step) {
 var startNew = start ? start : 0;
 var stepNew = step ? step : 1;
 var count = 0;
 return function() {
 count++;
 return (count<=1) ? startNew : startNew += stepNew;
 };
 };
 */

var generator = sequence(10, 3);
var generator2 = sequence(7, 1);

console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator2()); // 7

console.log(generator()); // 16

console.log(generator2()); // 8


/*
 №2
 Также, нужна функция take(gen, x) которая вызвает функцию gen заданное число (x) раз и возвращает массив с результатами вызовов.
 Она нам пригодится для отладки.

 */

function take(func, count) {
  var arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(func());
  }
  return arr;
}
var gen2 = sequence(0, 2);
take(gen2, 5);

/*
 №3
 Напиши функцию map(fn, array), которая принимает на вход функцию и массив,
 и обрабатывает каждый элемент массива этой функцией, возвращая новый массив
 */

function map(fn, array) {
  return array.map(function (item) {
    return fn(item);
  });
}

function square(x) {
  return x * x;
} // возведение в квадрат
console.log(map(square, [1, 2, 3, 4]));
console.log(map(square, []));

/*
 №4
 Напиши функцию map(fn, array), которая принимает на вход функцию и массив,
 и обрабатывает каждый элемент массива этой функцией, возвращая новый массив
 */

"use strict";
function sequence(start = 0, step = 1) {
  var result = start - step;
  return function () {
    return result += step;
  };
};

function fmap(sqe, func) {

  return function () {
    return sqe(func.apply(null, arguments));
  }
}

var gen = sequence(1, 1);
function square(x) {
  return x * x;
}
var squareGen = fmap(square, gen);
console.log(squareGen()); // 1
console.log(squareGen()); // 4
console.log(squareGen()); // 9
console.log(squareGen()); // 16

/*--------------------------------------*/

function add(a, b) {
  return a + b;
};
var squareAdd = fmap(square, add);
console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2


/*
 №5
 Частичное применение (partial application).
 Напиши функцию partial(fn, a1, a2, ....), которая позволяет зафиксировать один или несколько аргументов функции
 */

function add(a, b) {
  return a + b;
}
function mult(a, b, c, d) {
  return a * b * c * d;
}

function partial() {

  let func = arguments[0];
  let fixArg = [].slice.call(arguments, 1);

  return function (...arg) {
    return func.apply(null, fixArg.concat(arg));
  }
}

var add5 = partial(add, 5); // Мы получили функцию с 1 аргументом, которая прибавляет к любому числу 5

console.log(add5(2)); // 7
console.log(add5(10)); // 15
console.log(add5(8)); // 13

/*--------------------------*/
var mult23 = partial(mult, 2, 3); // мы зафиксировали первые 2 аргумента mult() как 2 и 3

console.log(mult23(4, 5)); // 2*3*4*5 = 120
console.log(mult23(1, 1));

/*--------------------------*/
function f1(a, b, c, d) {
  console.log(arguments);
}

var f2 = partial(f1, 1, 2);
f2("x", "y"); // f1(1, 2, x, y)

/*
 №6
 Наша функция partial позволяет фиксировать только первые аргументы.
 Усовершенствуй ее, чтобы зафиксировать можно было любые аргументы, пропущенные аргументы обозначаются с помощью undefined.
 Обрати внимание, что теперь мы переименовали ее в partialAny, чтобы не путать с предыдущей
 */


function partialAny() {
  let func = arguments[0];
  let fixArg = [].slice.call(arguments, 1);
  return function (...newArg) {
    let copyArg = fixArg.slice();

    for (let i = 0; i < copyArg.length; i++) {
      if (copyArg[i] === undefined && newArg[0] !== undefined) {
        copyArg[i] = newArg[0];
        newArg.shift();
      }
    }

    if (newArg.length > 0) {
      copyArg.push(...newArg);
    }
    return func.apply(null, copyArg);
  }
}


function test(a, b, c) {
  return 'a=' + a + ',b=' + b + ',c=' + c;
}
var test1_3 = partialAny(test, 1, undefined, 3, undefined);
console.log(test1_3(5)); // a=1,b=5,c=3
console.log(test1_3(10));

/*
 №7
 Напиши функцию bind, которая позволяет привязать контекст (значение this) к функции.
 В новых браузерах и функций есть метод bind(), делающий аналогичную вещь.
 */

function bind(func1, func2) {
  return function (...arg) {
    return func1.apply(func2, arg);
  }

}

window.x = 1;
var ctx = {x: 2};

function testThis(a) {
  console.log("x=" + this.x + ", a=" + a);
}
console.log(testThis(100)); // x=1, a=100
var boundFunction = bind(testThis, ctx);
console.log(boundFunction(100)); // x=2, a= 100

/*
 №8
 Напиши функцию pluck, которая берет массив объектов и возвращает массив значений определенного поля.
 Функция не должна изменять исходный массив.
 */

function pluck(arr, property) {
  return arr.map(function (item) {
    return item[property];
  });
}

var characters = [
  {'name': 'barney', 'age': 36},
  {'name': 'fred', 'age': 40}
];
console.log(pluck(characters, 'name'));
console.log(pluck(characters, 'age'));


/*
 №9
 Напиши функцию filter, которая принимает функцию-предикат и массив.
 Возвращает она массив значений, для которых предикат вернет true.
 Функция не должна изменять исходный массив.
 */
function filter(arr, fn) {
  let filtArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      filtArr.push(arr[i]);
    }
  }

  return filtArr;

  /* return arr.map(function(item){if(fn(item)){return item;}}); */
}
var input = [1, 2, 3, 4, 5, 6];
function isEven(x) {
  return x % 2 == 0;
} // проверяет на четность
console.log(filter(input, isEven)); // [2, 4, 6]

/*
 №10
 Напиши функцию, считающую число свойств в объекте.
 Кстати, в новых браузерах с поддержкой Javascript ES5 есть метод Object.keys(x), возвращающий массив ключей у объекта.
 */

function count(arr) {
  let count = 0;
  for (let key in arr) {
    count++;
  }
  return count;
}

var a = {a: 1, b: 2};
console.log(count(a)); // 2
var b = function () {
};
console.log(count(b)); // 0
var c = [1, 2, 3];
console.log(count(c)); // 3
var d = [];
d[100] = 1;
console.log(count(d)); // 1

/*
 №11
 Напиши функцию, считающую число свойств в объекте.
 Кстати, в новых браузерах с поддержкой Javascript ES5 есть метод Object.keys(x), возвращающий массив ключей у объекта.
 */

var objCountry = [
  {sity: "Шанхай", country: "КНР", population: 24115},
  {sity: "Дели", country: "Индия", population: 27280},
  {sity: "Джакарта", country: "Индонезия", population: 32275},
  {sity: "Манила", country: "Филиппины", population: 24650},
  {sity: "Токио — Иокогама", country: "Япония", population: 38050}
];

function filtrPopulation(arr, filtInput, order, len) {
  let count = 0;
  let returnArr = [];
  arr.sort(function (a, b) {
    switch (order) {
      case "asc":
        return a[filtInput] - b[filtInput];
        break;
      case "desc":
        return b[filtInput] - a[filtInput];
        break;
      default:
        return a[filtInput] + b[filtInput];
        break;
    }

  });

  for (let i = 0; i < len; i++) {
    returnArr.push(arr[i].sity);
  }
  return returnArr;
}

console.log(filtrPopulation(objCountry, "population", "asc", "5"));
console.log(filtrPopulation(objCountry, "population", "desc", "5"));

/*
 №12
 Некая сеть фастфудов предлагает несколько видов гамбургеров:

 маленький (50 тугриков, 20 калорий)
 большой (100 тугриков, 40 калорий)
 Гамбургер может быть с одним из нескольких видов начинок (обязательно):

 сыром (+ 10 тугриков, + 20 калорий)
 салатом (+ 20 тугриков, + 5 калорий)
 картофелем (+ 15 тугриков, + 10 калорий)
 Дополнительно, гамбургер можно посыпать приправой (+ 15 тугриков, 0 калорий) и полить майонезом (+ 20 тугриков, + 5 калорий).
 Напиши программу, расчиытвающую стоимость и калорийность гамбургера. Используй ООП подход (подсказка: нужен класс Гамбургер,
 константы, методы для выбора опций и рассчета нужных величин).
 */

/*
 №13
 В одном городе есть электрическая сеть. К ней могут быть подключены:

 электростанции, вырабатывают мощность от 1 до 100 мегаватт
 солнечные панели, генерируют от 1 до 5 мегаватт днем (в зависимости от вида панели, то есть некоторые панели генерируют 1 мегаватт, некоторые 2 и так далее) и 0 ночью
 жилые дома, в них от 1 до 400 квартир, потребляют 4 кВт на квартиру днем и 1 кВт ночью.
 линии электропередач, ведущие в другие города, по ним может подаваться недостающая или отдаваться лишняя энергия.
 У линий есть свойство «мощность», которая определяет, сколько мегаватт можно передать по ней, а также «цена мегаватта»,
 которое показывает сколько можно получить или придется заплатить за переданный/полученный мегаватт. На разных линиях может быть разная цена.

 Дан список всех элементов электросети. Напиши программу, рассчитывющую,
 сколько электричества необходимо закупить (или можно продать) днем и ночью для обеспечения баланса и сколько это будет стоить (или принесет прибыли).
 Используй продвинутый ООП подход для решения задачи.
 */

/*
 №14
 Напиши функцию, определяющую тип переменной. Результат должен быть одной из строк:
 'undefined', 'boolean' (для true/false), 'null', 'number', 'string', 'function', 'array', 'array-like', 'object'

 array-like — это псевдомассив, то есть объект, у которого есть неотрицательное свойство length и элементы с 0 до length - 1. Примеры псевдомассивов:

 { length: 2, 0: 'a', 1: 'b', hello: 'world'}
 псевдопеременная arguments
 коллекции, которые возвращают функции работы с DOM, вроде document.images, document.getElementsByTagName(..), document.body.children
 */

function detectType(who) {

  let typeResult;

  if (who === null) {
    typeResult = null;
  } else if (typeof who != "object") {
    typeResult = typeof who;
  } else if (typeof who == "object" && who.hasOwnProperty("length")) {
    return "array-like";
  }
  else {
    let toString = Object.prototype.toString;
    typeResult = toString.call(who).replace("[object ", "").replace("]", "");
  }
  console.log(typeResult);
}

detectType(1);
detectType("1");
detectType(null);
detectType(false);
detectType(undefined);
detectType(function () {
  return 3
});
detectType({age: 43});
detectType(new Date(2018 - 10 - 10));
detectType({length: 2, 0: 'a', 1: 'b', hello: 'world'});

/*
 №15
 Напиши функцию неглубокого копирования объектов и массивов.
 Функция неглубокого копирования должна создавать новый массив/объект, и копировать в него элементы из старого.
 При этом сами элементы копируются по ссылке.
 */

function shallowCopy(obj) {
  let newObj = {};
  if (obj.getDate) {
    newObj = new Date(obj.getTime());
  } else {
    for (let key in obj) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

var a = {x: 1, y: 2, z: [1, 2, 3]};
var b = shallowCopy(a); // b — это отдельный объект
b.x = 10;
console.log(a.x); // 1
console.log(b.x); // 10

// Но a.z и b.z указывают на один и тот же массив:
b.z.push(4);
console.log(a.z); // [1, 2, 3, 4]

var c = new Date(2014, 1, 1);
var d = shallowCopy(c);
d.setFullYear(2015);
console.log(c.getFullYear()); // 2014
console.log(d.getFullYear()); // 2015

/*
 №16
 Напиши функцию глубокого копирования объектов и массивов.
 Она должна делать не только копию переданного объекта/массива, но и копии вложенных них объектов/массивов.
 Также, копироваться должны объекты встроенного в JS конструктора Date
 */

function deepCopy(obj) {
  let newObj = {};
  if (obj.getDate) {
    newObj = new Date(obj.getTime());
  } else {
    for (let key in obj) {
      if (typeof obj[key] == "object") {
        console.log("obj[key]", obj[key]);
        if (obj[key] != null && obj[key].getDate) {
          newObj[key] = new Date(obj[key].getTime());
        } else {
          newObj[key] = [];
          for (let key1 in obj[key]) {
            newObj[key][key1] = obj[key][key1];
          }
        }
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  return newObj;
};

var a = {x: 1, y: 2, z: [1, 2, 3], u: undefined, v: null, w: new Date(2014, 1, 1, 12, 0, 0)};
var b = deepCopy(a); // b — это отдельный объект
b.x = 10;
console.log(a.x); // 1
console.log(b.x); // 10

// a.z и b.z указывают на разные массивы:
b.z.push(4);
console.log(a.z); // [1, 2, 3]
console.log(b.z); // [1, 2, 3, 4]

// a.w и b.w независимы друг от друга
b.w.setFullYear(2015);
console.log(a.w.getFullYear()); // 2014
console.log(b.w.getFullYear()); // 2015