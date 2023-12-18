const root = document.querySelector('#root');
// <div class="counter">
//     <button class="btn btn-inc">+</button>
//     <h3 class="number">0</h3>
//     <button class="btn btn-dec">-</button>
//     <button class="btn btn-clr">C</button>
// </div> 

function makeElemete(tag, attr_n, attr_v, content) {
    let output = document.createElement(tag);
    output.setAttribute(attr_n, attr_v);
    output.textContent = content;
    return output;
}

const counter = makeElemete('div', 'class', 'counter', '');
const btnInc = makeElemete('buttom', 'class', 'counter', '');