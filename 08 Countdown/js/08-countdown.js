var input = parseInt(window.prompt("Enter the number"));

if(input < 0) {
    window.alert("Enter a valid number greater than zero");
}
else {
    for(var i = input; i >= 0; i--) {
        // To print the values in browser console
        window.console.log(i);
        // To print the values in browser window
        document.write(i + "<br>");
    }
}