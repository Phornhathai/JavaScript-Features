const nums = [3,5,1,7,4,8]
console.log(Math.max(...nums));

const num1 = [2,4,6]
const num2 = [8,10,43]

console.log(...num1 , ...num2);

let student = {
    name : "Tommy",
    age : 29,
    score : 70
}

// let studentNew = {
//     name : student.name,
//     age : student.age,
//     score : student.score,
//     isPass : true
// }

let studentNew = {
    ...student,
    isPass :true
}

console.log(studentNew);