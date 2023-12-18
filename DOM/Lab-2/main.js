const counter = document.querySelector('.counter');
const btnInc = document.querySelector('.btn-inc');
const btnDec = document.querySelector('.btn-dec');
const btnClr = document.querySelector('.btn-clr');
const number = document.querySelector('.number');

let countNum = 0;

//*** function updateCounter(n){
//     countNum += n;
//     number.textContent = countNum;
// }
function updateCounter(n){
    if(countNum + n < 0){
        return;
    }
    countNum += n;
    number.textContent = countNum;
    suminfo.textContent = total;

}
//***btnInc.addEventListener('click', () => updateCounter(countNum += 1));
btnInc.addEventListener('click', () => updateCounter(100));
btnDec.addEventListener('click', () =>updateCounter(-100));
btnClr.addEventListener('click', () => updateCounter(-countNum));