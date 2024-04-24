//factorial of the number
let fact = parseInt(prompt("Enter the factorial of the number"));
let flag = true;
while(flag){
    if(Number.isNaN(fact)){
        fact = parseInt(prompt("Enter valid number"));
    }else{
        let sum = 1;
        for(let i=1;i<=fact;i++){
           sum*=i;
        }
        console.log(sum);
        flag = false;
    }
}

//Remove element
const fruits = ["banana", "mango", "apple", "kiwi"];
let removeEle = "apple";
let i;
for(i=0 ; i<fruits.length;i++){
    if(fruits[i] == removeEle){
        fruits.splice(i,1);
        console.log(fruits);
        break;
    }
}
if(i==fruits.length){
    console.log("Element not found in array");
}

//Reverse Array
const numbers6 = [23, 45, 12, 67, 89, 34];
numbers6.sort((a, b) => b - a);
console.log(numbers);
console.log(numbers6.reverse());
//OR
let left =0;
let right = numbers6.length-1;
let temp =0;
while(left<right){
    swap = left;
    left = right;
    right = swap;
    left++;
    right++;
}
console.log(numbers6);

//Find Maximum
const numbers1 = [23, 45, 12, 67, 89, 34];
let max = numbers1[0];
for(let ele of numbers1){
    if(ele>max) max=ele;
}
console.log(max);

//second largest number
function findSecondLargest(numbers) {
    if (numbers.length < 2) {
        return "Array should have at least two numbers";
    }

    let largest = numbers[0];
    let secondLargest = -1;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            secondLargest = largest;
            largest = numbers[i];
        } else if (numbers[i] > secondLargest && numbers[i] < largest) {
            secondLargest = numbers[i];
        }
    }
    return secondLargest;
}
const numbers = [10, 5, 8, 20, 15, 12];
console.log(findSecondLargest(numbers)); 

//Find Second Largest
function secLarg(num){
    num.sort((a,b)=>a-b);
    // console.log(numbers2);
    console.log(numbers2[numbers2.length-2]);
}
const numbers2 = [10, 5, 8, 20, 15, 12];
secLarg(numbers2);

//Find sum
function sumOfEvenNumbers(numbers5) {
    let sum = 0;
    for (let i = 0; i < numbers5.length; i++) {
        if (numbers5[i] % 2 === 0) {
            sum += numbers5[i];
        }
    }
    return sum;
}
const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sumOfEvenNumbers(numbers5));