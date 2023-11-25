// method 1
// function sum() {
//     console.log(arguments.length);
//     let sum = 0
//     for (let i = 0; i < arguments.length; i++) {
//         sum+= arguments[i]
//     }

//     return sum
    
// }

// console.log(sum(6,6,8,8));

// method 2

// function sum(...num) {
//     let sum = 0
//     for (let i = 0; i < num.length; i++) {
//         sum += num[i]
        
//     }
//     return sum
// }

// console.log(sum(6,4,3,5,4,2));
// console.log(sum("d","u"));

// Challenge: Rest Params
// 1.เขียนฟังก์ชัน includeLast ที่รับพารามิเตอร์จำนวนเท่าใดก็ได้และคืนค่าพารามิเตอร์สุดท้าย.

function includeLast() {
    let str = ""
    for (let i = 0; i < arguments.length; i++) {
        str += arguments[i]
    }
    return console.log(str.charAt(arguments.length-1));
}

includeLast(2,3,4,1) 
includeLast("A","B","C","D") 
// 2.เขียนฟังก์ชัน excludeLast ที่รับพารามิเตอร์จำนวนเท่าใดก็ได้และคืนค่าพวกเขาเป็นอาร์เรย์โดยไม่รวมพารามิเตอร์สุดท้าย.

function excludeLast(...args) {
    let result = [...args]
    return console.log(result.slice(0,result.lastIndexOf()));
}

excludeLast(2,3,4,1) 
excludeLast("A","B","C","D") 
// 3.เขียนฟังก์ชัน sumFirstLast ที่รับพารามิเตอร์จำนวนเท่าใดก็ได้และคืนค่าพวกเขาเป็นผลรวมของพารามิเตอร์ตัวแรกและตัวสุดท้าย

function sumFirstLast(...nums) {
    let temp = [...nums]
    return console.log(temp[0] , temp[temp.length-1]);
}
sumFirstLast(2,3,4,1) 
sumFirstLast(4,2,1,8) 
