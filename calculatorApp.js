const defaultValue = 0;
let currentResult = defaultValue;
let userEnteredValue;
let logEntries =[];

//Gets Input from the user.
function getUserInput(){
    userEnteredValue = userInput.value;
    return parseInt(userEnteredValue);
}

//Writes Result and Calculation step in the web page.
//Using function from Vendor.js
function CreateAndWriteOutput(currentResult,initialValue,operator,userInput ){
    const calcDescription = `${initialValue} ${operator} ${userInput}`;
    //outputResult(currentResult, initialValue+ operator + userInput);
    outputResult(currentResult, calcDescription);
}

//Logs the operation performed in detail
function WriteToLog(operation, numberEntered, prevResult, currentResult)
{
    /*logEntries.push({operation : operation,
                numberEntered : numberEntered,
                prevResult :prevResult,
                currentResult :currentResult});*/
    const logEntry ={operation : operation,
      numberEntered : numberEntered,
      prevResult :prevResult,
      currentResult :currentResult};
    console.log(logEntry);
}

function CalculateResult(calculationType){
  let enteredNumber = getUserInput(); 
  let initialValue = currentResult;
  let mathOperator;

  if(calculationType !== 'ADD' &&
      calculationType !== 'SUBTRACT' &&
      calculationType !== 'MULTIPLY' &&
      calculationType !== 'DIVIDE' ||
      !enteredNumber)//If its Zero and not an integer
      {
        return;
      }
  if(calculationType === 'ADD'){
    currentResult += enteredNumber;
    mathOperator = '+';
  }
  else if(calculationType === 'SUBTRACT'){
    currentResult += enteredNumber;
    mathOperator = '-';
  }
  else if(calculationType === 'MULTIPLY'){
    currentResult += enteredNumber;
    mathOperator = '*';
  }else(calculationType === 'DIVIDE'){
    currentResult += enteredNumber;
    mathOperator = '/';
  }   

  CreateAndWriteOutput(currentResult,initialValue,mathOperator,enteredNumber);
  WriteToLog(calculationType,enteredNumber, initialValue, currentResult);
}
    
function add(){
  CalculateResult('ADD');
  
}
function sub(){
  CalculateResult('SUBTRACT');
}
function multiply(){
  CalculateResult('MUULTIPLY');
}
function divide(){
  CalculateResult('DIVIDE');
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',sub);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);

