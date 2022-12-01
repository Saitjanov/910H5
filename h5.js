let numbers = [5,2,1,4,11,8,7,25, 37, 2,6,1]

let even = [];
let odd = [];

for (let i = 0; i < numbers.length; i++){
    if (i % 2 == 0) {
        even.push(numbers[i]);
    }
    else {
        odd.push(numbers[i]);
    }
}

console.log("Even is " + even);
console.log("Odd is " + odd);