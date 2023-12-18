const root = document.querySelector('#root')
const btnAdd = document.querySelector('.btn-add')
const suminfo = document.querySelector('.show-sum')

let total = 0;

function Counter() {
    let countNum = 0
    const makeElement = (tag, attr_n, attr_v, content) => {
        let output = document.createElement(tag)
        output.setAttribute(attr_n, attr_v)
        output.textContent = content
        return output
    }

    function updateCounter(n) {
        if (countNum + n < 0) {
            return
        }
        countNum += n
        total += n
        number.textContent = countNum
        suminfo.textContent = `Sum = ${total}`

    }

    const del = (e) => {
        // counter.remove()
        updateCounter(-countNum)
        console.log(e.target.closest('.counter'));
        e.target.closest('.counter').remove();
    }

    const counter = makeElement('div', 'class', 'counter', '')
    const btnInc = makeElement('button', 'class', 'btn-inc', '+')
    const number = makeElement('h3', 'class', 'number', '0')
    const btnDec = makeElement('button', 'class', 'btn-dec', '-')
    const btnClr = makeElement('button', 'class', 'btn-clr', '0')
    const btnDel = makeElement('button', 'class', 'btn-del', 'X')

    btnInc.addEventListener('click', () => updateCounter(1))
    btnDec.addEventListener('click', () => updateCounter(-1))
    btnClr.addEventListener('click', () => updateCounter(-countNum))
    btnDel.addEventListener('click', del)

    counter.append(btnInc, number, btnDec, btnClr, btnDel)

    return counter
}

const hdlAddCounter = () => {
    root.append(Counter())
}

btnAdd.addEventListener('click', hdlAddCounter)
