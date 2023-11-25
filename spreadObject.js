// Challenge: Spread with Objects
// 1.กำหนดให้มีวัตถุสองวัตถุ รวมเข้าด้วยกันเป็นวัตถุเดียว.

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = {
    ...obj1,
    ...obj2
}

console.log(mergedObj);
// 2.ใช้ตัวดำเนินการ spread เพื่อสร้าง Object ใหม่ที่มีคุณสมบัติเดียวกันกับObject { x: 10, y: 20 } แต่เพิ่มคีย์ z ให้มีค่าเป็น 30 เข้าไปด้วย. 

const obj = { x: 10, y: 20 };
const newObj = {
    ...obj,
    z : 30
}

console.log(newObj);
// 3.กำหนดให้มีObject { a: 1, b: 2, c: 3 } และ { c: 4, d: 5 } รวมเข้าด้วยกันโดยให้ค่าของ c ในObjectแรกถูกแทนที่ด้วยค่าของ c ในObjectที่สอง.

const obj11 = { a: 1, b: 2, c: 3 };
const obj22 = { c: 4, d: 5 };
const mergedObj1 = {
    ...obj11,
    ...obj22
}

console.log(mergedObj1);
