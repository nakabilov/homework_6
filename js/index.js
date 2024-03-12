// Задание 1
// Написать функцию, которая будет конвертировать температуру из шкалы цельсия в шкалу фаренгейта. Функция принимает один аргумент - температуру в цельсиях, и возвращает значение в фаренгейтах. Расчет производится по следующей формуле:

// let tempCelsius;

// tempFahrenheit  = () => {
//     tempCelsius = prompt('Введите температуру в цельциях');
//     if(!isNaN(tempCelsius) && tempCelsius !== '')
//     {
//         resultFahrenheit = (tempCelsius*9 / 5) + 32;
//         alert(resultFahrenheit); 
//     }else {
//         alert('Проверьте правильность градуса')
//     }
// }

// Задание 2
// Напишите функцию-валидатор, которая запрашивает и проверяет целое число, введенное пользователем, и возвращает следующие сообщения, в зависимости от ввода пользователя:

// Вы ввели положительное число
// Вы ввели отрицательное число
// Вы ввели ноль
// Вы ввели не число
// Вы нажали "Отмена"

// let result;


// number = () => {

//     if (result < 0){

//         alert('вы ввели отрицательное число');

//     }else if (result === ''){

//         alert('вы ввели пустую строку');

//     }
//     else if (result === null){

//         alert('вы ввели отмена');

//     }else if (!isNaN(result)){

//         alert('вы ввели число');

//     } else{

//         alert('Вы ввели не число');

//     }
// }

// number();


// Задание 3
// Создайте функцию multiply, которая будет принимать 2 числа и умножать первое на второе. Если какой-то из параметров не был передан, нужно показать пользователю ошибку с сообщением о том, что оба параметра обязательны.

// let firstNumber;
// let secondNumber;
// let result;
// let res = 0;
// multiply = () => {
//     firstNumber = prompt('Введите первое число');
//     secondNumber = prompt('Введите первое число');
//     if(isNaN(firstNumber) || isNaN(secondNumber) || firstNumber === '' || secondNumber === '' || firstNumber === null || secondNumber === null){
//         alert('ОШИБКА!');
//     }else {
//         result = parseInt(firstNumber) * parseInt(secondNumber);
//         alert(`multiply(${firstNumber}, ${secondNumber}); \n < ${result}`);
//         res = 2 / (1 /5);
//         console.log(`multiply(2, 5) \n < ${res}`);
//     }

// }

// multiply();


// Задание 4
// Создайте функцию power, которая будет делать то же самое, что и Math.pow - возводить указанное число в степень. При этом, если второй параметр не был передан, считать, что мы возводим в квадрат.

// let number;
// let degree;
// let result = 1;
// power = () => {
//     number = parseInt(prompt('Введите число'));
//     degree = parseInt(prompt('Введите степень'));
//     if(!isNaN(number) && !isNaN(degree))
//     {
//         for(let i = 1; i < degree + 1; i++ ){
//             result *= number;
//         }
//         alert(result); 
//     }else {
//         alert('Проверьте значений')
//     }
// }

// power();


// 5.Создайте функцию countChars, которая считает количество символов в строке. Она должна принимать два аргумента: символ, который надо найти и строку, в которой искать. Функция должна возвращать целое число - количество найденных символов (или ноль, если символ не найден). Под символом будем понимать строку, содержащую из одного символа.

// let chars = '';
// let count = '';
// let symbol = '';
// countChars = () => {
   

//     chars = prompt('Введите строку');
//     count = prompt('Введите символ');
//     if(chars !== '' && count !== ''){

//         for(let i = 0; i < chars.length; i++){
//             if(chars[i]===count){
//                 symbol +=count;
//             }else{
//                 console.log(`не совпадающие символы ${chars[i]}`);
//             }
            
//         }
//         alert(`countChars('${chars}', '${symbol}')`)

//     }else {
//         alert('Напишите строку и символ')
//     }
// }

// countChars();


// Задание 6 ===================================================

// let southData = [13, 15, 19, 26, 21, 22, 23];
// let westData = [15, 14, 16, 18, 17, 24, 25];
// let eastData = [20, 17, 19, 15, 24, 25, 26];
// let northData = [19, 18, 23, 20, 23, 19, 31];
// let southResult = 0;
// let westResult = 0;
// let eastResult = 0;
// let northResult = 0;
// const count = 7;
// middleNumber = () => {
//     for(let i = 0; i < count; i++){
//         southResult += southData[i];
//         westResult += westData[i];
//         eastResult += eastData[i];
//         northResult += northData[i];
//     }
//     console.log(`Среднее значение --'{${southData}}' = ${southResult/southData.length}`);
//     console.log(`Среднее значение --'{${westData}}' = ${westResult/westData.length}`);
//     console.log(`Среднее значение --'{${eastData}}' = ${eastResult/eastData.length}`);
//     console.log(`Среднее значение --'{${northData}}' = ${northResult/northData.length}`);

// }
// middleNumber();




// Задание 7 =====================================
// Создайте функцию, которая проверяет, является ли заданная строка палиндромом (читается одинаково с начала и с конца). Например, "топот" или "анна" - палиндромы.


// let string;
// let polinString;
// polindrom = () => {
//     string = prompt('Введите строку');  
//     for(let i = 0; i < string.length/2; i++){
//         if (string[i] === string[string.length - i - 1]){
//             polinString = string[i];
//             if(polinString === string[i]){
//                 console.log('Polindrom');             
//             }else{ 
//                 console.log('no');
//             }
//         }else{
//             console.log('no');
//         }
//     }
// }
// polindrom();


// Задание 8
// Генератор случайного пароля: Напишите функцию, которая генерирует случайный пароль заданной длины. Пользователь должен иметь возможность указать длину пароля в аргументе функции.
// function gen_password(len){
//     if(len > 10) len = 10;
//     len = len * (-1);
//     return Math.random().toString(36).slice(len);
// }
// console.log(gen_password(6));
// Задание 9
// Факториал: Напишите функцию для вычисления факториала числа. Факториал числа n - это произведение всех целых чисел от 1 до n. Например, факториал 5 равен 5! = 5 × 4 × 3 × 2 × 1 = 120.


// let fact;
// let result = 1;

// factorial = () => {
//     factZero = prompt('введите число');
//     fact = Number(factZero);
//     if(Number.isInteger(fact) && fact !== null && fact != ''){

//         for(let i = fact; i >= 1; i--){
    
//             result *= i;
    
//         }
//         console.log(result);
//     }else if (factZero === '0'){
//         console.log(0);
//     }else {
//         alert('Факториал принимает только целое число');
//     }

// }

// factorial();
