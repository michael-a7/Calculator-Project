const element = document.getElementById("myIn");
let value1 = "";
let value2 = "";
let operation = "";
// Digits
function Insert0(){
        value1 = value1 + "0";
    element.innerHTML = value1;
}
function Insert1() {
    value1 = value1 + "1";
    element.innerHTML = value1;
}
function Insert2() {
        value1 = value1 + "2";
    element.innerHTML = value1;
}
function Insert3() {
    value1 = value1 + "3";
element.innerHTML = value1;
}
function Insert4() {
    value1 = value1 + "4";
element.innerHTML = value1;
}
function Insert5() {
    value1 = value1 + "5";
element.innerHTML = value1;
}
function Insert6() {
    value1 = value1 + "6";
element.innerHTML = value1;
}
function Insert7() {
    value1 = value1 + "7";
element.innerHTML = value1;
}
function Insert8() {
    value1 = value1 + "8";
element.innerHTML = value1;
}
function Insert9() {
    value1 = value1 + "9";
element.innerHTML = value1;
}
// Operations
function Addition(){//PROBLEM
    if(value2!==''){
        value2= parseFloat(value2)+parseFloat(value1);
        value1= '';
        element.innerHTML = parseFloat(value1);
    }
    else{
    value2 = value1;
    value1 = "";
    operation = "+";
    }
}
function Subtraction(){
    if(value2!==''){
        value2= value2-value1;
        value1= ''; 
    }
    else{
    value2 = value1;
    value1 = "";
    operation = "-";
    }
}
function Multiplication(){
    if(value2!==''){
        value2= value2*value1;
        value1= ''; 
    }
    else{
    value2 = value1;
    value1 = "";
    operation = "*";
    }
}
function Division(){
    if(value2!==''){
        value2= value2/value1;
        value1= ''; 
    }
    else{
    value2 = value1;
    value1 = "";
    operation = "/";
    }
}
//Output
function Output(){
    //Single value w/o operation = value
    if(value1!=='' && value2==''){
        value1=value1;
    }
    else{
    switch(operation){
        case '+':
            value1 = parseFloat(value2) + parseFloat(value1);
            break;
        case '-':
            value1 = value2-value1;
            break;
        case '*':
            value1 = value2*value1;
            break;
        case '/':
            value1 = value2/value1;    
        }
        element.innerHTML = parseFloat(value1);
        value2 = "";
    }      
}

// Misc
function Insertdec() {
    if(value1.includes(".")===true){
        value1 = value1;
    }else{
        value1 = value1 + ".";
    }
    element.innerHTML = value1;
}
function AC() {
    value1 = "0";
    value2 = "";
    element.innerHTML = value1;
}
function Negate() {
    value1 = -1*value1;
    element.innerHTML = value1;
}
function Percent(){
    value1 = 0.01*value1;
    element.innerHTML = value1;
}
