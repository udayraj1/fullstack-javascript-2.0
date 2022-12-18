// Calculator app that accepts addition subtraction division multiplication and remainder operations

function calculator(operator,value1,value2){
    switch(operator){
        case "+":
            console.log(value1+value2);
            break;
        case "-":
            console.log(value1-value2);
            break;
        case "*":
            console.log(value1*value2);
            break;
        case "/":
            console.log(value1/value2);
            break;
        case "%":
            console.log(value1%value2);
            break;
        default:
            console.log("PLease enter the correct operator sir");
    }
}

calculator("%",16,9);
