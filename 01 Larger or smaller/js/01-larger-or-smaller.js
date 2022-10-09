var num1 = parseInt(window.prompt("Enter the number 1"));
var num2 = parseInt(window.prompt("Enter the number 2"));

if(isNaN(num1) || isNaN(num2)){
    alert("Enter the appropriate number!!");
    document.write("Please enter the input as numbers.");
}
else if(num1 === num2){
    document.write("Both the numbers are equal.");
}
else if(num1 > num2){
    document.write(num1 +  " is larger.");
}else{
    document.write(num2 +  " is larger.");
}