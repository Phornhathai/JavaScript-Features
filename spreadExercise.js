// Challenge: Spread in Function Calls and Array Literals
// 1.กำหนดให้มีอาร์เรย์ของตัวเลข หาตัวเลขที่มากที่สุดโดยใช้ตัวดำเนินการ spread.

const numbers = [3, 7, 2, 8, 6];

let maxNumber = Math.max(...numbers)
console.log(maxNumber);
// 2.เขียนฟังก์ชัน combineArrays ที่รับอาร์เรย์สองอาร์เรย์และคืนค่าอาร์เรย์ใหม่ที่รวมทั้งสองอาร์เรย์โดยใช้ตัวดำเนินการ spread.

const num1 = [1,2,3,4,5]
const num2 = [6,7,8,9,0]
function combineArrays(arr1, arr2) {
    return console.log(...arr1 , ...arr2);
}

combineArrays(num1,num2)
// 3.ใช้ตัวดำเนินการ spread เพื่อแปลงสตริง "hello" เป็นอาร์เรย์ของตัวอักษร.

const word = "hello";
const chars = [...word]
console.log(chars);
// 4.กำหนดให้มีอาร์เรย์สองอาร์เรย์ รวมเข้าด้วยกันเป็นอาร์เรย์เดียว.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1,...arr2]
console.log(merged);

