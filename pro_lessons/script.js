// 7)Написать функцию, которая получает в качестве аргумента массив из объектов и возвращает объект с самым дорогим товаром.


  // let object = [
  //   {
  //    name:'BMW',
  //    price: 3000,
  //   },
  //   {
  //     name:'MERCEDES',
  //    price: 4000,
  //   },
  //   {
  //     name:'MINI',
  //    price: 15000,
  //   },
  //   {
  //     name:'ALFA ROMEO',
  //    price: 6000,
  //   },
  // ];


  // function maxValue(){

    
  //   let max = 0;
  //   for(let i = 0;i < object.length;i++){

  //     if(object[i].price > max){
  //       max =  object[i].price
     
  //     }
  
  //     }
  //     return max
    
  // }
 
  // console.log(maxValue())





// 6)Напишите функцию, которая в качестве аргументов получает слово и определяет, является ли оно палиндромом. Если да, функция возвращает true, в ином случае false.


// function polindrom(pol){
// let polStr = ""

// for(let i = pol.length-1;i >=0;i-- ){
  
// polStr+=pol[i]

// }
// if(pol === polStr){

//   return true
// }else {
//   return false
// }

// }
// console.log(polindrom('gogd'))




// 5)Создайте функцию, которая как аргумент принимает одну строку.Функция возвращает это слово в развернутов виде. Пример: “cat” => “tac”


// function reverse(str){
//   let string = ""
// for(let i = str.length-1;i >= 0;i--){
// string  +=str[i]

// }

// return string
// }

// console.log(reverse('reverse'))





// 4)Описать функцию, которая получает в качестве аргумента число и строку, где число обозначает сколько раз должна быть добавлена эта строка в массив. Возвращает массив из этих строк. Например: передаем строку “dog” и цифру 3, в результате мы получаем [“dog”,”dog”,”dog”].

// function arrey(num,str){
// let arr = [];

// for(let i = 0;i < num;i++){

// arr[i]= str;

// }
// return arr;

// }

// console.log(arrey(3,"dog"))





// 3)Предыдущее задание делаем с объектом. (как ключ передаем i).

// function number(num){

// let arr = []

// for(let i = 0;i <= num;i++){

// arr.push(i)
// }

// return arr 
// }

// console.log(number(5))



// 2)Создать функцию, которая получает в качестве аргумента число и возвращает массив из чисел от 0 до указанного числа.

// function number(num){
//   let obj = {}
//   for(let i = 0;i <= num;i++){
//   obj[i]= i

//   }
//   return obj
//   }
  
//   console.log(number(5))



// 1)Найдите общие элементы(в виде массива) между двумя массивами.
// Пример: [1,2,3], [4,2,1] => [1,2]

// let arr = [1,3,5,4,3];
// let arr1 = [2,1,5,6,3];
// let array = []
// for(let i = 0;i < arr.length;i++){
// for(let j = 0;j < arr1.length;j++){

// if(arr[i]===arr1[j]){

//  array.push(arr[i])
// }

// }
// }

// console.log(array)



