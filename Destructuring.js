// const nums = [1,2,3,4]

// let [one , two , three] = nums

// console.log(one ,"one");
// console.log(two ,"two");
// console.log(three ,"three");

// let [first , ...everyoneElse] = nums
// console.log(first, "first");
// console.log(everyoneElse, "everyoneElse");


// Challenge: Destructuring Arrays
// 1.กำหนดให้มีอาร์เรย์ [1, 2, 3, 4, 5] แยกองค์ประกอบทุกตัวให้ออกมาเป็นตัวแปร a,b,c,d,e ตามลำดับ

// const arr1 = [1, 2, 3, 4, 5];
// const [a1,b1,c1,d1,e1] = arr1;

// // 2.กำหนดให้มีอาร์เรย์ [1, 2, 3, 4, 5] แยกองค์ประกอบตัวแรก ตัวที่สาม และตัวที่ห้าออกมาเป็นตัวแปร. a,b,c ตามลำดับ

// const arr2 = [1, 2, 3, 4, 5];
// const [a, , b , ,c] = arr2;
// console.log(a , b ,c);

// // 3.แยกค่าสองค่าแรกและค่าที่เหลือจากอาร์เรย์ [1, 2, 3, 4, 5]. โดยค่าที่เหลือให้ชื่อว่า rest

// const arr3 = [1, 2, 3, 4, 5];
// const [arr , ...rest] = arr3
// console.log(arr);
// console.log(rest);


//object Desctructuring

// let runner = {
//     first : "tommy",
//     last : "alice",
//     country : "USA"
// }

// let {first,last} = runner
// console.log(first);
// console.log(last);

// Challenge: Destructuring Objects
// 1.กำหนดให้มีObject { name: 'Alice', age: 25, city: 'Wonderland' } แยกคุณสมบัติ name และ city ออกมาเป็นตัวแปร.

// const person1 = { name1: 'Alice', age: 25, city: 'Wonderland' };
// const {name1 , city} = person1
// // 2.เปลี่ยนชื่อคีย์ name เป็น firstName ขณะทำการ destructuring วัตถุ { name: 'Bob', age: 30 }. (ตัวอย่าง)

// const person2 = { name: 'Bob', age: 30 };
// const {name : firstName , age} = person2
// // 3.แยกคุณสมบัติ country จากวัตถุ { name: 'Charlie', country: 'Chocolate Factory' } และให้ค่าเริ่มต้นเป็น 'Thailand' หากไม่มี. (ตัวอย่าง)

// const person3 = { name: 'Charlie', country: "" };
// const { country = "Thailand"} = person3


// Destructuring Params
// const fullName = ({first,last}) => {
//     console.log(first);
//     console.log(last);

// }

// let runner = {
//     first : "tommy",
//     last : "alice",
//     country : "USA"
// }
// console.log(fullName(runner));

// Challenge: Destructuring Params
// 1.เขียนฟังก์ชัน displayPerson ที่รับ Object เป็นพารามิเตอร์และพิมพ์คุณสมบัติ name และ age.

// function displayPerson({name1,age}) {
//     console.log(`Name: ${name1}, Age: ${age}`);
// }

// let profile = {
//     name1 : "Aum",
//     age : 20
// }
// displayPerson(profile)
// // 2.เขียนฟังก์ชัน getCoords ที่รับ Object ที่มีคุณสมบัติ x และ y และคืนค่าพวกเขาเป็นอาร์เรย์.

// function getCoords({x , y}) {
//     return console.log([x, y]);
// }

// let temp = {
//     x : 10,
//     y : 20
// }

// getCoords(temp)

// // 3.เขียนฟังก์ชัน config ที่รับวัตถุที่มีคุณสมบัติ width, height, และ color และตั้งค่าเริ่มต้นหากพวกเขาไม่ได้รับ. width = 100, height = 100, color = 'white' 

// function config({width, height, color}) {
//     return console.log(`${width} , ${height} , ${color}`)
// }

// let data = {
//     width : '100' ,
//     height : '',
//     color :  ''
// }

// config({width : 100 , height : 100 , color: 'white'})
