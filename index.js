// let mark = 96;
// let grade;
// // grade = "Not yet grade";

// // mark = prompt("Please input the mark(%)");
// // mark = parseInt(mark, 10);

// if (mark > 80) {
//   grade = "Jane and me have got A+";
//   console.log(grade);
// } else if (mark > 70) {
//   grade = "There ie no holder to get the number";
//   console.log(grade);
// } else if (mark > 60) {
//   grade = "Tom has got A- ";
//   console.log(grade);
// } else if (grade > 50) {
//   grade = "Peter has got B";
//   console.log(grade);
// } else if (mark >= 40) {
//   grade = "John has got D";
//   console.log(grade);
// } else if (mark < 40) {
//   grade = "Fail";
//   // console.log(grade);
// } else {
//   // console.log("Invalid mark, outside range 0-100");
// }
// let num1 = 1000;
// let num2 = 59;
// let num3 = 300;
// if (num1 > num2) {
//   if (num1 > num3) {
//     console.log(`The gretest number is ${num1}`);
//   } else {
//     console.log(`The greatest number is ${num3}`);
//   }
// } else {
//   if (num2 > num3) {
//     console.log(`The greatest number is ${num2}`);
//   } else {
//     console.log(`The greatest number is ${num3}`);
//   }
// }
// let String = 0;
// while (String < 39) {
//   console.log("Alhamdulillah, Today i am well", String);
//   String++;
// }
// for (let i = 581; i <= 623; i += 2) {
//   console.log(i);
// }
let Array = ["Html", "Css", "Bootstrap", "Javascript"];
for (let i = 0; i < Array.length; i++) {
  let showResult = Array[i];
  // console.log(showResult);
}
// let n = 0;
// // while (n <= 10) {
//   let phoneName = [
//     "Apple",
//     "Xiomi",
//     "Samphoney",
//     "Samsung",
//     "Motorolla",
//     "Nokia",
//   ];
//   // console.log(phoneName, n);
//   n++;
// }
// let n = 30;
// while (n <= 86) {
//   if (n > 44) {
//     break;
//   }
//   console.log(n);
//   n++;
// }

// let bookPrice = [128, 20, 44, 220, 150, 96, 120, 160];
// for (let i = 0; i < bookPrice.length; i++) {
//   let result = bookPrice[i];
//   if (result >= 220) {
//     continue;
//   }
//   console.log(result);
// }
// let bookPrice = "Mamunur rashid";
// let result = bookPrice.includes("id");
// let result = bookPrice.substring(0, 6);
// let result = bookPrice.slice(0, 7);
// console.log(result);

// declaration of a function
// function nameOfFunction(a, b) {
//   let result = a + b;
//   // console.log("The result is yours", result);
// }
// let taka1 = 100;
// let taka2 = 300;
// nameOfFunction(taka1, taka2);
// let name = "Monipur Sadar Dinajpur Bangladesh";
// let showResult = name.substring(0, 10);
// // console.log(showResult);

// function summationReturn(x, y) {
//   let multiPlication = x * y;
//   return multiPlication;
//   // console.log(multiPlication);
// }
// let resultShow = summationReturn(10, 20);
// // console.log(resultShow);

// function addNumber(Price) {
//   let pricePerUnit = 10;
//   let quntity = Price / pricePerUnit;
//   return quntity;
// }
// let value = addNumber(500);
// // console.log(value);
// function myName(a, b) {
//   return a + b;
// }
// console.log(myName(10, 20));

// let objName = {
//   id: 1,
//   name: "Mamunur rashid",
//   class: 11,
//   marks: 109,
// };
// // console.log(objName);

// let phoneDetails = {
//   name: "Apple",
//   about: {
//     model: "M-14",
//     color: "Black",
//     quantity: 400000,
//   },
//   price: 175000,
//   gen: "14gen",
//   Origin: "USA",
// };
// let find = Object.values(phoneDetails.about);
// console.log(find);
// // console.log(phoneDetails.keys);
// phoneDetails.about.model = "i20";
// // console.log(phoneDetails);
// let find1 = phoneDetails["price"];
// // console.log(find1);
// let find3 = "gen";
// let find4 = phoneDetails[find3];
// console.log(find4);
// let person = {
//   name: "Mamunur rashid",
//   age: 35,
//   qualification: "HSC",
//   institution: "Shankar pur",
//   year: 2007,
//   cgpa: 2.5,
//   occupation: "private tutor",
// };
// let findKeys = Object.keys(person);
// console.log(findKeys);
// for (let i = 0; i < findKeys.length; i++) {
//   let showResult = findKeys[i];
//   let findResult = person[showResult];
//   // console.log(showResult + " : " + findResult);
// }
// for (let findKeys in person) {
//   let showMe = findKeys;
//   let finalResult = person[showMe];
//   console.log(finalResult);
// }
let shoppingCart = {
  mobile: 555,
  book: 850,
  writer: "Mamunur rashid",
  proccessor: 780,
  mouse: 60,
  model: "i14",
};
let Entries = Object.entries(shoppingCart);
// console.log(Entries);
for (let i = 0; i < Entries.length; i++) {
  let getValue = Entries[i];
  // console.log(getValue);
}
// console.log(shoppingCart);
// shoppingCart["book"] = 1000;
// console.log(shoppingCart.proccessor);
let shpp = Object.keys(shoppingCart);
let val = Object.values(shoppingCart);
// console.log(val);
// for (let i = 0; i < shpp.length; i++) {
//   let showMe = shpp[i];
//   console.log(showMe + " : " + shoppingCart[showMe]);
// }
for (let property in shoppingCart) {
  let getResult = shoppingCart[property];
  // console.log(property, getResult);
}
function make_avg(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}
let array = [10, 12, 14, 15, 20];
// console.log(make_avg(array));
// let color = red;
// switch ("Yellow") {
//   case "green":
//     console.log("This is green Color");
//     break;
//   case "Yellow":
//     console.log("This is yellow color");
//     break;
//   case "blue":
//     console.log("This is Blue color");
//     break;
//   case "red":
//     console.log("This is red color");
//     break;
//   default:
//     console.log("There is no color selected");
// }

// function foo() {
//   console.log("foo");
// }
// function bar() {
//   console.log("bar");
// }

// foo();
// bar();
// function make_avg(num1, num2, num3) {
//   let total = num1 + num2 + num3;
//   return total / 3;
// }
// let result = make_avg(10, 20, 30);
// // console.log(result);
// function avg(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }
// let arr = [10, 20, 45, 63, 80];
// let getResult = avg(arr);
// // console.log(getResult);
// function odd_even(num1) {
//   let result = num1 % 2;
//   if (result === 0) {
//     console.log("The number is even");
//   } else {
//     console.log("The number is odd");
//   }
//   return result;
// }
// let number = 16;
// // let finalResult = odd_even(number);
// // console.log(finalResult);
// function another(num1) {
//   let getParameter = num1 % 2;
//   if (getParameter === 0) {
//     console.log("This is even number");
//   } else {
//     console.log("This number is odd number");
//   }
// }
// another(131);

switch ("red") {
  case "red":
    console.log("If you will try to cross the road, you be in danger");
    break;
  case "yellow":
    console.log("You should stop now");
    break;
  case "green":
    console.log("You should cross the road");
    break;
  default:
    console.log("There is no signal right now");
}
