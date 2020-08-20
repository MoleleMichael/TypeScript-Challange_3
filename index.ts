// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

//TypeScript Challange 3
function Numerical(Digits1:Number,Digits2:Number){
  if (Digits1 > Digits2){
    return Digits2;
  }else{
    return Digits1; 
  }
}
let sum = Numerical(1,5);
console.log(sum);
