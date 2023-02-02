// Input ile daxil olunan ədədin sade bolenlerini cixartsin

// let num = +prompt("Number:");
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

// let num = prompt("Enter number"),
//   biggerNum = -1;

// for (let i = 0; i < num.length; i++) {
//   if (num[i] > biggerNum) {
//     biggerNum = num[i];
//   }
// }

// console.log(biggerNum);

// Input ile daxil olunan ədədin rəqəmlərindən tam ədədləri göstərin.

// const num = prompt("enter number:").slice("");

// for (let i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }

// Input ile daxil olunan ədədin rəqəmlərindən cüt ədədi göstərin.

// let num = prompt("Enter number:");
// for (let i = 0; i < num.length; i++) {
//   if (+num[i] % 2 == 0 && num[i] != 0) {
//     console.log(num[i]);
//   }
// }

// Input ile daxil olunan ədədin rəqəmlərindən sadə ədədləri göstəri

// let num = prompt("Enter number:");

// for (let i = 0; i < num.length; i++) {
//   var counterDividers = 0;
//   for (let k = 1; k <= Number(num[i]); k++) {
//     if (+num[i] % k == 0) {
//       counterDividers += 1;
//     }
//   }
//   if (counterDividers == 2) {
//     console.log(num[i]);
//   }
// }

// Input ile daxil olunan ədədin rəqəmlərindən mükəmməl ədəd olub olmadığını tapın.

// Input ile daxil olunan ədədin reqmelerin sayi ve string ile tərsini tapın.

// let num = prompt("Enter number"),
//   reserve = "";
// console.log(num.length);
// for (let i = num.length - 1; i >= 0; i--) {
//   reserve += num[i];
// }
// console.log(reserve);

// Input ile daxil olunan 1 ci ədədi daxil olunan 2 ci ədədin qüvvətinə yüksəldin.

// let firstNum = +prompt("Enter first number:"),
//   secondNum = +prompt("Enter second number:");
// console.log(secondNum ** firstNum);

// Input ile daxil olunan ədədin rəqəmlərinin kvadratları cəmini tapın.

// let num = prompt("Enter number:"),
//   total = 0;
// for (let i = 0; i < num.length; i++) {
//   total += Number(num[i]) ** 2;
// }
// console.log(total);

// Input ile daxil olunan ədədin 3 ededi string ile yan-yana yigilsin. Misal ucun: 3, 45, 10

// let total = "";
// for (let i = 0; i < 3; i++) {
//   let num = prompt("Enter number: ");
//   total += num;
// }
// console.log(total);

// Isifadeciden alinan n sayda ededden necesinin tam eded oldugunu tapin

// let numbers = prompt('Enter numbers: ","').split(","),
//   counter = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 1 == 0) {
//     counter++;
//   }
// }
// console.log(counter);
// sifadeciden alinan n sayda ededden necesinin sade eded oldugunu tapin

// let numbers = prompt('Enter numbers: "," ').split(",");

// for (let a = 0; a < numbers.length; a++) {
//   let counter = 0;
//   for (let i = 0; i <= numbers[a]; i++) {
//     if (numbers[a] % i == 0) {
//       counter++;
//     }
//   }
//   if (counter == 2) {
//     console.log(numbers[a]);
//   }
// }

// Istifadeciden alinan n sayda ededden necesinin murekkeb eded oldugunu tapin

// let numbers = prompt('Enter numbers: "," ').split(",");

// for (let a = 0; a<numbers.length; a++) {
//   let counter = 0;
//   for (let i = 0; i <= numbers[a]; i++) {
//     if (numbers[a] % i == 0) {
//       counter++;
//     }
//   }
//   if (counter > 2) {
//     console.log(numbers[a]);
//   }
// }

// Input ile daxil olunan ededden sonraki ilk sade ededi tapin

// let num = +prompt("Enter number:"),
//   simpleNum = num;

// while (true) {
//   simpleNum++;
//   let counter = 0;
//   for (let i = 1; i <= simpleNum; i++) {
//     if (simpleNum % i == 0) {
//       counter++;
//     }
//   }
//   if (counter == 2) {
//     console.log(simpleNum);
//     break;
//   }
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

// let numbers = prompt('Enter numbers : "," ').split(",");

// function findNum(numbers) {
//   let biggest = numbers[0],
//     second = numbers[0];

//   for (let i = 0; i < numbers.length; i++) {
//     if (+numbers[i] > biggest) {
//       second = biggest;
//       biggest = numbers[i];
//     } else if (+numbers[i] < biggest && +numbers[i] > second) {
//       second = numbers[i];
//     }
//   }

//   return second;
// }

// console.log(findNum(numbers));

// Array icerisinde en kicik ededi tapin ( home work )

// let numbers = prompt('Enter numbers : ","').split(",");

// function findLeast(numbers) {
//   let leastNum = numbers[0];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < leastNum) {
//       leastNum = numbers[i];
//     }
//   }

//   return leastNum;
// }

// console.log(findLeast(numbers));

// Array icersisinde sonu 9 olan nece elemet var

// let arr = prompt('Enter number:').split(','),
//   filteredArr = [];

// function checkLastNum(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 10 == 9) {
//       filteredArr[filteredArr.length] = arr[i];
//     }
//   }

//   return true;
// }
// checkLastNum(arr);

// console.log(filteredArr);

// Array icerisinde nece cut element var
// let arr = [1,2,3,4,5,6,7,8,9,0];

// for(let i = 0; i<arr.length; i++){

//     if(arr[i]%2 == 0 && !(arr[i]<0) && arr[i] != 0 ){
//         console.log(arr[i])

//     }

// }

// Array icerisinde nece tek element var
// let arr = [1,2,3,4,5,6,7,8,9,0];

// for(let i = 0; i<arr.length; i++){

//     if(arr[i]%2 != 0 && !(arr[i]<0) && arr[i] != 0 ){
//         console.log(arr[i])

//     }

// }

// Array icerisindeki tam ededlerin cemini tapin (while ile). ( home work )
// let arr = prompt('Enter numbers: ","').split(',')
// i = 0,
// total =0;
// while (i < arr.length) {
//     if(arr[i]%1==0){
//         total+= +arr[i]
//     }
//   i++;
// }

// console.log(total)
