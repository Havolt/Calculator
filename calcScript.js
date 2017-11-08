
//108 * 4 == keypad width

// button width == 100px
// amount inbetween == 8px


//Number buttons 10

//arithmetic buttons 4

//equals button 1

//decimal button 1

//clear button 1

// 17 buttons

  let calcHead;
  let calcPrevDisp;
  let calcMainDisp;
  let firstNum = true;
  let inputListAll = [];
  let inputListNum = [];
  let inputListArith = [];
  let floatTrue = false;
  let total;
  let tempTotal;
  let afterEqual = false;



  //Button Assigns
  let clearButton;
  let divideButton;
  let multiplyButton;
  let subtractButton;
  let additionButton;

  function buildCalc(){
    console.log('building');
    const calcTop = document.createElement('div');
    calcTop.id = "calcHead";
    app.appendChild(calcTop);

    const calcPrevDispl = document.createElement('p');
    calcPrevDispl.id = "calcPrevDisp";
    calcPrevDispl.innerHTML = "";
    calcTop.appendChild(calcPrevDispl);

    const calcMainDispl = document.createElement('input');
    calcMainDispl.id = "calcMainDisp";
    calcMainDispl.value = "0";
    calcTop.appendChild(calcMainDispl);

    const keypad = document.createElement('div');
    keypad.id = "calcPad";
    app.appendChild(keypad);

    const clearB = document.createElement('button');
    clearB.id = 'clearButton';
    clearB.innerHTML = "C";
    keypad.appendChild(clearB);

    const decimalB = document.createElement('button');
    decimalB.id = "decimalButton";
    decimalB.innerHTML = ".";
    keypad.appendChild(decimalB);

    const divideB = document.createElement('button');
    divideB.id = 'divideButton';
    divideB.innerHTML = "&#247";
    keypad.appendChild(divideB);



    function multipleButton(num1, num2){
      for(var i = num1; i <= num2; i++){
        const numButt = document.createElement('button');
        numButt.id = "num" + i + 'Button';
        numButt.value = i;
        numButt.innerHTML = i;
        numButt.addEventListener('click', numToMainDisp);
        keypad.appendChild(numButt);
      }
    }

    multipleButton(7,9);

    const multiplyB = document.createElement('button');
    multiplyB.id = "multiplyButton";
    multiplyB.innerHTML = "&times";
    keypad.appendChild(multiplyB);



    multipleButton(4,6);

    const subtractB = document.createElement('button');
    subtractB.id = 'subtractButton';
    subtractB.innerHTML = "-";
    keypad.appendChild(subtractB);

    multipleButton(1,3);

    const additionB = document.createElement('button');
    additionB.id = 'additionButton';
    additionB.innerHTML = '+';
    keypad.appendChild(additionB);

    multipleButton(0,0);

    const equalsB = document.createElement('button');
    equalsB.id = "equalsButton";
    equalsB.innerHTML = "=";
    keypad.appendChild(equalsB);
  }

  function idAssign(){
    calcHead = document.getElementById('calcHead');
    calcPrevDisp = document.getElementById('calcPrevDisp');
    calcMainDisp = document.getElementById('calcMainDisp');
    clearButton = document.getElementById('clearButton');
    divideButton = document.getElementById('divideButton');
    multiplyButton = document.getElementById('multiplyButton');
    subtractButton = document.getElementById('subtractButton');
    additionButton = document.getElementById('additionButton');
  }

  function numToMainDisp(num){
    console.log(num);
    if(!isNaN(num)){
      calcMainDisp.value += num;
    }
    else{
      if(firstNum == true){
        calcMainDisp.value = '';
        firstNum = false;
      }
      calcMainDisp.value += num.srcElement.value;
    }
  }

  //Arithmetic Functions

  function arithmeticFunction(symbol){
    if(calcMainDisp.value != ''){
      inputListAll.push(parseFloat(calcMainDisp.value));
      inputListNum.push(parseFloat(calcMainDisp.value));
    }
    else{
      inputListAll.push(0);
      inputListNum.push(0);
    }
    inputListAll.push(symbol);
    inputListArith.push(symbol);
    calcMainDisp.value = 0;
    firstNum = true;
    console.log(inputListAll);
    floatTrue = false;
    afterEqual = false;
  }

  function additionFunc(){
    arithmeticFunction('+');
  }

  function subtractFunc(){
    arithmeticFunction('-');
  }

  function multiplyFunc(){
    arithmeticFunction('&times');
  }

  function divideFunc(){
    arithmeticFunction('&#247');
  }

  //End Arithmetic Functions

  //Decimal Place Function

  function decimalFunc(){
    if(firstNum == true){
      calcMainDisp.value = '';
      firstNum = false;
    }
    calcMainDisp.value += '.';
    floatTrue = true;
  }

  //End Decimal Place function

  //Utility Functions

  function clearFunc(){
    firstNum = true;
    inputListAll = [];
    inputListNum = [];
    inputListArith = [];
    floatTrue = false;
    total = undefined;
    calcMainDisp.value = 0;
  }

  var calculations = function(operator, num1, num2){
    if(operator == '+'){
      tempTotal = num1 + num2;
      console.log(tempTotal);
      //console.log(inputListNum);
      inputListNum.shift();
      inputListNum[0] = tempTotal;
      console.log(inputListNum);
    }
  }

  function equalsFunc(){

    if(calcMainDisp.value != ''){
      inputListAll.push(parseFloat(calcMainDisp.value));
      inputListNum.push(parseFloat(calcMainDisp.value));
    }
    else{
      inputListAll.push(parseFloat(0));
      inputListNum.push(parseFloat(0));
    }
    calcMainDisp.value = '';

    for(var i = 0; i < inputListArith.length; i++){
      console.log(inputListArith[i]);
      calculations(inputListArith[i], inputListNum[0], inputListNum[1]);
    }
    calcMainDisp.value = inputListNum[0];
    afterEqual = true;
    inputListNum.shift();
    inputListArith = [];
  }



  //End Utility Functions

  function control(event){
    event.preventDefault();
    if(firstNum == true){
      calcMainDisp.value = '';
      firstNum = false;
    }
    if(!isNaN(parseInt(event.key))  && afterEqual == false ){
      numToMainDisp(event.key);
    }
    else if(event.key == '+'){
      additionFunc();
    }
    else if(event.key == '-'){
      subtractFunc();
    }
    else if(event.key == '*'){
      multiplyFunc();
    }
    else if(event.key == '/'){
      divideFunc();
    }
    else if(event.key == '.'){
      decimalFunc();
    }
    else if(event.key == 'c' || event.key == 'Delete'){
      clearFunc();
    }
    else if(event.key == '=' || event.key == "Enter"){
      equalsFunc();
    }
  }



 (function init(){
   buildCalc();
   idAssign();
   calcMainDisp.addEventListener('keydown', control);
   additionButton.addEventListener('click', additionFunc);
   subtractButton.addEventListener('click', subtractFunc);
   multiplyButton.addEventListener('click', multiplyFunc);
   divideButton.addEventListener('click', divideFunc);
   decimalButton.addEventListener('click', decimalFunc);
   clearButton.addEventListener('click', clearFunc);
   equalsButton.addEventListener('click', equalsFunc);
 })();
