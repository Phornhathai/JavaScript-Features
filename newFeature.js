//Old feature default params
function add (x , y){
    if( y == undefined){
        y = 0
    }
    return x + y
}

console.log(add(9));

//New feature default params

function minus (x , y = 1){
    return x - y
}

console.log(minus(5));