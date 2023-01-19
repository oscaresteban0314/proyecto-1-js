const num1  = document.querySelector('#num1');
const num2  = document.querySelector('#num2');
const result = document.querySelector('#result');
const resultp = document.querySelector('#resultp');
function sumar() {
    let n1 =Number(num1.value);
    let n2 =Number(num2.value);
    let suma = n1 + n2;
    resultp.innerText = "la suma de "+n1+"+"+n2+"="+suma
    return; 
}