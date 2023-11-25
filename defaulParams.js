// Challenge: Default Params
// 1.เขียนฟังก์ชัน greet ที่รับชื่อเป็นพารามิเตอร์และทักทายคนนั้น หากไม่มีชื่อที่ให้มา ให้ทักทายว่า "Guest"

function greet(name = "Guest") {
    return `${name}`;
}

console.log(greet());
// 2.เขียนฟังก์ชัน multiply ที่รับตัวเลขสองตัวและคืนค่าผลคูณ หากให้ตัวเลขมาเพียงตัวเดียว ให้ถือว่าตัวเลขที่สองคือ 5.

function multiply(a, b = 5) {
    return a * b;
}
console.log(multiply(1));
// 3.เขียนฟังก์ชัน createPerson ที่รับชื่อและอายุ หากไม่มีอายุที่ให้มา ให้ถือว่าอายุคือ 18.

function createPerson(name,age = 18) {
    return { name, age };
}

console.log(createPerson("aum"));