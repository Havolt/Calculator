
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



  //Button Assigns
  let clearButton;
  let divideButton;
  let multiplyButton;

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

    const divideB = document.createElement('button');
    divideB.id = 'divideButton';
    divideB.innerHTML = "&times";
    keypad.appendChild(divideB);

    const multiplyB = document.createElement('button');
    multiplyB.id = "multiplyButton";
    multiplyB.innerHTML = "&#247";
    keypad.appendChild(multiplyB);
  }

  function idAssign(){
    calcHead = document.getElementById('calcHead');
    calcPrevDisp = document.getElementById('calcPrevDisp');
    calcMainDisp = document.getElementById('calcMainDisp');
    clearButton = document.getElementById('clearButton');
    divideButton = document.getElementById('divideButton');
    multiplyButton = document.getElementById('multiplyButton');
  }

 (function init(){
   buildCalc();
   idAssign();
 })()
