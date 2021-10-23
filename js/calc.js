var myOpr;
var lastNumber;
var isEqual;
var hasPoint;
var myRes;
var myEx;

function init(){
    myRes = document.getElementById("res");
    myEx = document.getElementById("showEx")
    myOpr="";
    lastNumber=0;
    isEqual = false;
    hasPoint = false;
}

//myRes.innerText = parseInt(myRes.innerText)*10+myNumber;
function num(myNumber){
    if (isEqual) return;
    if (myRes.innerText==="0"){
        myRes.innerText===myNumber;
        return;
    }
    myRes.innerText = myRes.innerText+myNumber;
}

function clr(){
    isEqual=false;
    myRes.innerText="";
    hasPoint = false;
}

function clrAll(){
    clr();
    clrEx();
}

function clrEx(){
    myEx.innerText="";
}

function opr(userOpr){
    isEqual=false;
    if (userOpr==='.'){
        if (hasPoint) return;
        myRes.innerText=myRes.innerText+".";
        hasPoint = true;
        return;
    }
    if (myOpr==="" && userOpr!="="){
        myOpr=userOpr;
        lastNumber=Number(myRes.innerText);
        myEx.innerText = lastNumber + myOpr;
        clr();
    } else {
        makeCalc();
    } 
}

function makeCalc(){
    let currentNumber = Number(myRes.innerText);
    let theResult = 0;
    myEx.innerText = myEx.innerText + currentNumber;
    switch (myOpr){
        case '/':
            theResult = lastNumber / currentNumber;
        break;
        case '*':
            theResult = lastNumber * currentNumber;
        break;
        case '-':
            theResult = lastNumber - currentNumber;
        break;
        case '+':
            theResult = lastNumber + currentNumber;
        break;
    }
    myOpr=userOpr;
    lastNumber=theResult;
    myRes.innerText = theResult;
    myEx.innerText = lastNumber;
  /*  if(myOpr==="="){
        isEqual=true;
    }
    */
}