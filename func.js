function printText(){
    console.log('hello Oldboy');
    
}
printText()

// console.log(num1+num22+num3+num4);
console.log(addTwoNumbers(8,7,56,67)) 

function addTwoNumbers(num1,num22,num3,num4){
    return (num1+num22+num3+num4);
    // console.log(num1+num22+num3+num4);
    
}
//addTwoNumbers
// console.log(addTwoNumbers(8,7,56,67)) 
// let x = addTwoNumbers(7,7,56,67)
// console.log(x);

function loginUserMessage(username){
    if (username===undefined){
        console.log('PLEASE ENTER A USERNAME');
        return
    }
    console.log(`${username} just logged in`);
    
}
loginUserMessage('oldboy')

// Celsius to Fahrenheit 
function celsiusToFahrenheit(celsius){
    return(celsius*9/5)+32;

}
console.log(celsiusToFahrenheit(32));
