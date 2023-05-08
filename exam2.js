// average 함수 구현
function average(...a) {
    let sum = a.reduce((result, i) => result + i, 0) 
    return sum/a.length; 
}

console.log(average(1, 2, 3, 4));
console.log(average(1, 2, 3, 4, 5));
console.log(average(1, 2, 3, 4, 5, 6));
