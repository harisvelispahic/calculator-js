// + −×÷ %
let calculationField = document.getElementById("calculation-field");
let plusMinusSwitch = true;

let updateOperatorColor = () => {
    let text = "";
    for(let el of calculationField.innerText){
        if(el=='+'){
            text+=`<span style="color: #a7e34d;">+</span>`;
        }
        else if(el=='−'){
            text+=`<span style="color: #a7e34d;">−</span>`;
        }
        else if(el=='×'){
            text+=`<span style="color: #a7e34d;">×</span>`;
        }
        else if(el=='÷'){
            text+=`<span style="color: #a7e34d;">÷</span>`;
        }
        else if(el=='%'){
            text+=`<span style="color: #a7e34d;">%</span>`;
        }
        else{
            text+=el;
        }
    }
    calculationField.innerHTML=text;
}

let changeOperator = (char) => {
    let last = calculationField.innerText.slice(-1);
    console.log("Operator:", last);
    
    console.log("Operand: ", calculationField.innerText.slice(0, -1));
    let newText = calculationField.innerText.slice(0, -2) + char;
    console.log("Operand and new operator",newText,char);
    // console.log("New text", newText);
    calculationField.innerHTML = newText;
    updateOperatorColor();
    
}

let clearField = () => {
    calculationField.innerHTML="";
    plusMinusSwitch = true;
}

let button = (char) => {
    calculationField.innerHTML += char;
}

let add = () => {
    let last = calculationField.innerText.slice(-1);
    if(last != '+' && last !='−' && last != '×' && last != '÷' && last != '%') {
        calculationField.innerHTML += '+';
    }
    else if(last == '+' || last =='−' || last == '×' || last == '÷' || last == '%') {
        calculationField.innerHTML = calculationField.innerText.slice(0, -1) + '+';
    }
    updateOperatorColor();
}
let subtract = () => {
    let last = calculationField.innerText.slice(-1);
    if(last != '+' && last !='−' && last != '×' && last != '÷' && last != '%') {
        calculationField.innerHTML += '−';
    }
    else if(last == '+' || last =='−' || last == '×' || last == '÷' || last == '%') {
        calculationField.innerHTML = calculationField.innerText.slice(0, -1) + '−';
    }
    // console.log(last);
    updateOperatorColor();
}

let multiply = () => {
    let last = calculationField.innerText.slice(-1);
    if(last != '+' && last !='−' && last != '×' && last != '÷' && last != '%') {
        calculationField.innerHTML += '×';
    }
    else if(last == '+' || last =='−' || last == '×' || last == '÷' || last == '%') {
        calculationField.innerHTML = calculationField.innerText.slice(0, -1) + '×';
    }
    // console.log(last);
    updateOperatorColor();
}
let divide = () => {
    let last = calculationField.innerText.slice(-1);
    if(last != '+' && last !='−' && last != '×' && last != '÷' && last != '%') {
        calculationField.innerHTML += '÷';
    }
    else if(last == '+' || last =='−' || last == '×' || last == '÷' || last == '%') {
        calculationField.innerHTML = calculationField.innerText.slice(0, -1) + '÷';
    }
    // console.log(last);
    updateOperatorColor();
}
let percentage = () => {
    let last = calculationField.innerText.slice(-1);
    if(last != '+' && last !='−' && last != '×' && last != '÷' && last != '%') {
        calculationField.innerHTML += '%';
    }
    else if(last == '+' || last =='−' || last == '×' || last == '÷' || last == '%') {
        calculationField.innerHTML = calculationField.innerText.slice(0, -1) + '%';
    }
    // console.log(last);
    updateOperatorColor();
}

let parentheses = () => {

}


let comma = () => { // NE RADI KAKO TREBA
    let val = calculationField.innerHTML.toString();
    // console.log(val);
    if(val.includes("."))
        return;
    if(calculationField.innerHTML == "")
        return;
    calculationField.innerHTML += ".";
}


let plusMinus = () => { // NE RADI KAKO TREBA
    if(plusMinusSwitch) {
        calculationField.innerHTML = "−" + calculationField.innerHTML;
        // console.log(calculationField.innerHTML);
        plusMinusSwitch = !plusMinusSwitch;
        return;
    }
    else {
        calculationField.innerHTML = calculationField.innerHTML.slice(1);
        plusMinusSwitch = !plusMinusSwitch;
        // console.log(calculationField.innerHTML);
    }

}

let calculateResult = () => {
    const operands = calculationField.innerText.split(/[\+−×÷%]/);
    for(let i=0; i<operands.length; i++){
        operands[i] = Number(operands[i]);
    }
    console.log(operands);
    const operators = [];
    for(let el of calculationField.innerText){
        if(el.match(/[\+−×÷%]/))
            operators.push(el);
    }
    console.log(operators);

    let counter=0;
    let result = operands.reduce((acc,val) => {
        if(operators[counter]=='+') acc+=val;
        else if(operators[counter]=='−') acc-=val;
        else if(operators[counter]=='×') acc*=val;
        else if(operators[counter]=='÷') acc/=val;
        else acc%=val;

        console.log(acc, val);

        counter++;

        return acc;
    })

    document.getElementById("result-field").innerText = result;
}

document.getElementById("clear").addEventListener("click", clearField);

document.getElementById("divide").addEventListener("click", divide);
document.getElementById("percentage").addEventListener("click", percentage);
document.getElementById("multiply").addEventListener("click", multiply);
document.getElementById("subtract").addEventListener("click", subtract);
document.getElementById("add").addEventListener("click", add);

document.getElementById("zero").addEventListener("click", button.bind(null, '0'));
document.getElementById("one").addEventListener("click", button.bind(null, '1'));
document.getElementById("two").addEventListener("click", button.bind(null, '2'));
document.getElementById("three").addEventListener("click", button.bind(null, '3'));
document.getElementById("four").addEventListener("click", button.bind(null, '4'));
document.getElementById("five").addEventListener("click", button.bind(null, '5'));
document.getElementById("six").addEventListener("click", button.bind(null, '6'));
document.getElementById("seven").addEventListener("click", button.bind(null, '7'));
document.getElementById("eight").addEventListener("click", button.bind(null, '8'));
document.getElementById("nine").addEventListener("click", button.bind(null, '9'));

document.getElementById("comma").addEventListener("click", comma);
document.getElementById("plus-minus").addEventListener("click", plusMinus);
document.getElementById("equals").addEventListener("click", calculateResult);


/* evaluacija rezultata: proci sa while petljom dok izraz ne bude !isNaN 
najprioritetniji izraz mijenjati sa njegovom evaluiranom vrijednoscu kroz iteracije
sve dok se ne dodje do vrijednosti koja nije isNaN, tj rezultat,
postujuci prioritet PEMDAS
*/