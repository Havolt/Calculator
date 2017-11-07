
//Number buttons 10

//arithmetic buttons 4

//equals button 1

//decimal button 1

//clear button 1

// 17 buttons

  let calcHead;

  function buildCalc(){
    console.log('building');
    const calcTop = document.createElement('div');
    calcTop.id = "calcHead";
    app.appendChild(calcTop);

    const calcPreviDisp = document.createElement('p');
    calcPreviDisp.id = "calcPrevDisp";
    calcPreviDisp.innerHTML = "12232 + 342203 + 345221 + 12342123";
    calcTop.appendChild(calcPreviDisp);
  }

  function idAssign(){
    calcHead = document.getElementById('calcHead');
  }

 (function init(){
   buildCalc();
   idAssign();
 })()
