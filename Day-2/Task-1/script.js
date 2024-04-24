let value = parseInt(prompt("Enter value of Celsius or Fahrenheit"));
console.log(value);

let convert = prompt("Enter Celsius or Fahrenheit");
console.log(convert);

//Fahrenheit to Celsius
let celsius = (value)=>{
    let C = (value - 32) * 5/9;
    return C;
}

//Celsius to Fahrenheit
let fahrenheit = (value) => {
    let F = ((9/5 * value) + 32);
    return F;
}

let flag = true;
while(flag){
    if(convert === "Celsius"){
        console.log(celsius(value));
        flag = false;
    }else if(convert === "Fahrenheit"){
        console.log(fahrenheit(value));
        flag = false;
    }else{
        convert = prompt("You Entered wrong data , please choose Celsius or Fahrenheit");
    }
}
