// factory 함수 구현
function factory(add) {
    function add(a, b) {
        return a+b; 
    }
    return add; 
}


const add = factory();
console.log(add(3, 4));
console.log(add(4, 5));

