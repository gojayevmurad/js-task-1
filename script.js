// let numbers = prompt('Numbers')
// let arr = numbers.split(',')
// let num = 0;
// for(let i = 0; i<arr.length; i++){

//     if(+arr[i]>num){
//         num = +arr[i]
//     }

// }
// console.log(num)

// Input ile daxil olunan ədədin sade bolenlerini cixartsin

// let num = +prompt('Number:');

// for (let i = 2; i <= num; i++) {
//   let counter = 0;
//   if (num % i == 0) {
//     for (let a = 1; a <= i; a++) {
//       if (i % a == 0) {
//         counter += 1;
//       }
//     }

//     if (counter == 2) {
//       console.log(i);
//     }
//   }
// }

// *** 3 reqemli eded daxil edirik ededin evveline ve sonuna string ile 3 elave edirik

// let num = prompt("Number");
// if (num.length == 3) {
//   console.log(`3${num}3`);
// }

// Input ile daxil olunan ədədin rəqəmlərindən ən böyüyünü tapın.

// let num = prompt('Enter number'),
// biggerNum= -1,
// arr = []

// arr = num.split('')

// for(let i = 0; i<num.length; i++){

//     if(num[i]>biggerNum){
//         biggerNum=num[i]
//     }

// }

// console.log(biggerNum)

// Input ile daxil olunan ədədin rəqəmlərindən tam ədədləri göstərin.

// const num = prompt('enter number:')
// let arr = num.slice('')

// for(let i = 0; i<arr.length; i++){

//     console.log(arr[i])

// }

// Input ile daxil olunan ədədin rəqəmlərindən cüt ədədi göstərin.

// let num = prompt('Enter number:')

// for( let i = 0; i<num.length; i++){

//     if(+num[i]%2 == 0 && num[i]!=0){
//         console.log(num[i])
//     }

// }

// Input ile daxil olunan ədədin rəqəmlərindən sadə ədədləri göstəri

// let num = prompt('Enter number:')

// for(let i=0; i<num.length; i++){

//     var counterDividers = 0;
//     for(let k = 1; k<=Number(num[i]); k++){
//         if(+num[i] % k == 0){
//             counterDividers+=1
//         }
//     }
//     if(counterDividers==2){
//         console.log(num[i])
//     }

// }

// Input ile daxil olunan ədədin rəqəmlərindən mükəmməl ədəd olub olmadığını tapın.

// Input ile daxil olunan ədədin reqmelerin sayi ve string ile tərsini tapın.

// let num = prompt('Enter number'),
// reserve = '';

// console.log(num.length)

// for(let i = num.length-1; i>=0; i--){
//     reserve+=num[i]
// }
// console.log(reserve)

// Input ile daxil olunan 1 ci ədədi daxil olunan 2 ci ədədin qüvvətinə yüksəldin.

// let firstNum = +prompt('Enter first number:'),
// secondNum = +prompt('Enter second number:');

// console.log(secondNum**firstNum)

// Input ile daxil olunan ədədin rəqəmlərinin kvadratları cəmini tapın.

// let num = '12345',
// total = 0;

// for(let i = 0; i<num.length; i++){
//     total+= (Number(num[i])**2)
// }

// console.log(total)

// Input ile daxil olunan ədədin 3 ededi string ile yan-yana yigilsin. Misal ucun: 3, 45, 10

// let total = "";
// for (let i = 0; i < 3; i++) {
//   let num = prompt("Enter number: ");

//   total += num;
// }

// console.log(total);

// Isifadeciden alinan n sayda ededden necesinin tam eded oldugunu tapin

// let numbers = prompt('Enter numbers: "," '),
// arr = numbers.split(',')

// for(let num in arr){

//     if(num%1==0){
//         console.log(num)
//     }

// }

// sifadeciden alinan n sayda ededden necesinin sade eded oldugunu tapin

// let numbers = prompt('Enter numbers: "," ').split(',')

// for(let num in numbers){
//     let counter = 0
//     for(let i = 0; i<=num; i++){
//         if(num%i == 0){
//             counter++;
//         }
//     }
//     if(counter==2){
//         console.log(num)
//     }
// }

// Istifadeciden alinan n sayda ededden necesinin murekkeb eded oldugunu tapin

// let numbers = prompt('Enter numbers: "," ').split(',')

// for(let num in numbers){
//     let counter = 0
//     for(let i = 0; i<=num; i++){
//         if(num%i == 0){
//             counter++;
//         }
//     }
//     if(counter>2){
//         console.log(num)
//     }
// }

// Input ile daxil olunan ededden sonraki ilk sade ededi tapin

// let num = +prompt('Enter number:'),
//   simpleNum = num;

// while (true) {
//   simpleNum++;
//   let counter = 0;
//   for (let i = 1; i <= simpleNum; i++) {
//     if (simpleNum % i == 0) {
//       counter++;
//     }
//   }
//   if(counter==2) {
//      console.log(simpleNum)
//      break;
//   };
// }

// Istifadecinin daxil etdiyi ededin kok altini tap

// let num = +prompt('Enter number:')
// console.log(num**.5)

// Istifadeci 0 daxil edenedek edelerin cemini tapin

// let total = 0;
// while (true) {
//   let num = +prompt("Enter number:");

//   total += num;

//   if (num == 0) {
//     console.log(total);
//     break;
//   }
// }

// *** Vurma cedveli (string methodu ile)

// Input ile daxil olunan 3 ededden ortancili tapan funksiya yazin.

let numbers = ["1", "2", "3"];

function findNum(numbers) {
  let biggest = +numbers[0];
  let second = +numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > biggest) {
      biggest = +numbers[i];
    } else if (numbers[i-1] < biggest && numbers[i-1] > second) {
      second = +numbers[i-1];
    }
  }

  return second;
}


console.log(findNum(numbers))