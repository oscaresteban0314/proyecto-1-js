const num1  = document.querySelector('#num1');
const num2  = document.querySelector('#num2');
const result = document.querySelector('#result');
const resultp = document.querySelector('#resultp');
const form = document.querySelector('#form');
const btn = document.querySelector('#result');
console.log(form);
/* tn =addEventListener('click',sumar); */
form = addEventListener('submit', sumar);
/* num2.value=addEventListener('change',sumar)
num1.value=addEventListener('change',sumar) */
resultp.innerText="";
function sumar(event) {
    event.preventDefault();
    let n2 =Number(num2.value);
    let n1 =Number(num1.value);
    let suma = n1 + n2;
    resultp.innerText = "Resultado: "+suma; 
}
