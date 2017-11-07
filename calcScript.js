
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
    divideB.innerHTML = "&times";
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
    multiplyB.innerHTML = "&#247";
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

  function control(event){
    event.preventDefault();
    if(firstNum == true){
      calcMainDisp.value = '';
      firstNum = false;
    }
    if(!isNaN(parseInt(event.key))  ){
      numToMainDisp(event.key);
    }
  }

 (function init(){
   buildCalc();
   idAssign();
   calcMainDisp.addEventListener('keydown', control);
 })()
