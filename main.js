// Написать функцию, которая принимает два числа и возращает результат их умножения
// function calcMultiply(a, b){
//     return a * b
// }
// let result = calcMultiply(5,500)
// alert(result)


// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
// let Day = function(day){
//     switch(day){
//         case 1: return "Понедельник"
//         case 2: return "Вторник"
//         case 3: return "Среда"
//         case 4: return "Четверг"
//         case 5: return "Пятница"
//         case 6: return "Суббота"
//         case 7: return "Воскресенье"
//         default: return "Вы ввели некорректное число"
//     }
// }
// document.write(Day(1))


// Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17 лет" (только здесь данные, которые были переданы в функцию)
// const data = (name, family, age) =>{
//    return 'Привет' + name  +  family  + 'с возрастом' +  age
// }
// console.log(data('Иван', 'Петров', '17лет'))


// Перевернуть число 
// function reverse_a_number(n){
//     преобразуем число в строку
//     n=n + ""
//     создаем масив строки с подстроками,переворачиваем и обьединяем все элементы в строку
//     return n.split("").reverse().join("")
// }
// document.writeln(reverse_a_number(12345))


// Получить текущую дату. Передайте разделитель в качестве аргумента.
// let curday = function(sp){
//     today =new Date()
//     let dd = today.getDate()
//     let mm = today.getMonth()+1
//     let yyyy = today.getFullYear()

//     if(dd<10) dd='0'+dd
//     if(mm<10) mm='0'+mm
//     return (mm+sp+dd+sp+yyyy)
// }
// document.write(curday('/'))
// document.write("<br>")
// document.write(curday('-'))



// функцию JavaScript для сравнения дат (т.е. больше, меньше или равно)

// let compare_dates = function(date1, date2){
//     if (date1 >date2) return ("Date1 >Date2")
//     else if (date1 < date2) return ("Date2 >Date1")
//     else return ("Date2 >Date1")
// }

// document.write (compare_dates(new Date('11/14/2022 00:01'), new Date('11/14/2022 00:00')))
// document.write("<br>")
// document.write (compare_dates(new Date('11/14/2022 00:00'), new Date('11/14/2022 00:01')))


// добавления указанных минут к объекту Date
// let add_minutes = function(dt, minutes){
//     return new Date(dt.getTime() + minutes * 60000)
// }
// document.write(add_minutes(new Date(2022, 7, 8),30).toString())


// Узнайте, какой день был вчера
// let yesterday = function(date1){
//     let dt = new Date(date1)
//     return new Date((dt.setDate(dt.getDate()-1))).toString()
// }
// document.write(yesterday('Aug 07, 2022'))


// Напишите программу на JavaScript для расчета возраста.
// function calculate_age(dob){
//     let diff_ms = Date.now() -dob.getTime()
//     let age_dt = new Date(diff_ms)

//     return Math.abs(age_dt.getUTCFullYear() - 2022)
// }
// document.write(calculate_age(new Date(5,12,1962)))


// сумма элементов масива


// Сделай функцию, которая принимает массив любых целых чисел, которая возращает новый массив, где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15])
// let arr=[1,2,5,6,10,12,15,21,20,30,35,39]
// let filt = arr.filter(function(el) {
//     return(el % 5)==0
// })
// console.log(filt)



// функция принимает массив сотрудников и возвращает массив, где каждый элемент представляет из себя строку  "Имя: Иван, возвраст: 23"

// let arr = ["Имя":"Иван", "возраст":"23","Николай", "возраст": "18 " ]
// let str1 = arr.toString()

// document.join(str1)


// Написать функцию, которая принимает массив , например ['First', 'Second', 'Third', 'Fourth'], и переносит первый элемент массива в конец

// const array = ['First', 'Second', 'Third', 'Fourth'];

// const next = [...array]
// next.push(next.shift())
// console.log(next); 


// ОБЬЕКТЫ


// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };
  
//   let sum = 0;
//   for (let key in salaries) {
//     sum += salaries[key];
//   }
  
//   alert(sum); 


// Создайте функцию multiplyNumeric(objectExample) которая умножает все числовые свойства objectExample на 2
// let objectExample = {
//     width: 200,
//     height: 300,
//     title: 'example'
//   }
  
//   let multiplyNumeric = obj => {
//     for (let [key, value] of Object.entries(obj)) {
//       if (typeof value === 'number') {
//         obj[key] = value * 2;
//       }
//     }
//   }
  
//   multiplyNumeric(objectExample);
//   console.log(objectExample);


// Написать объект ladder - объект, который позволяет подниматься вверх и спускаться.
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     alert( this.step );
//     return this;
//   }
// }

// ladder.up().up().down().up().down().showStep(); 




// Выводим синий квадрат, при наведении на него он становиться розовый, а когда уводим курсор от него, обратно синий.
// ячейка <td> под курсором в данный момент (если есть)
let currentElem = null;
table.onmouseover = function(event) {
//   перед тем, как войти на следующий элемент, курсор всегда покидает предыдущий
//   если currentElem есть, то мы ещё не ушли с предыдущего <td>,

  let target = event.target.closest('td');

//   переход не на <td> - игнорировать
  if (!target) return;

//   ура, мы зашли на новый <td>
  currentElem = target;
  target.style.background = 'pink';
};

table.onmouseout = function(event) {

  let relatedTarget = event.relatedTarget;

  while (relatedTarget) {
//     поднимаемся по дереву элементов 

    relatedTarget = relatedTarget.parentNode;
  }

//   мы действительно покинули элемент
  currentElem.style.background = '';
  currentElem = null;
};


// Создайте ассоциативный массив (объект) заработных плат obj. Выведите на экран зарплату Пети и Коли.
// let obj ={'Коля': 1000, 'Вася': 500, 'Петя': 200}
// alert(obj['Коля'])
// alert(obj['Петя'])


// Работа c DOM


// Вывести кнопку с текстом "Привет", при нажатии на неё выводим alert c текстом "Привет Мир!"
// function buttonClick(elem){
//     elem.value = "Привет Мир!"
// }


// Выводим две кнопки "заблокировать" и "разблокировать" и инпут. Одна из них блокирует инпут с помощью атрибута disabled, а другая разблокирует
// function button1Click(){
//     let input =document.getElementById('input')
//     input.disabled = true
// }

// function button2Click(){
//     let input =document.getElementById('input')
//     input.disabled = false
// }

