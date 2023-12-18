// let h1 = document.getElementsByTagName('h1');

// console.log(h1);                                            
// console.log(h1[0]);
// h1[0].style.color ='red';
// // console.log(Array.isArray(h1));

// let p = document.getElementsByTagName('p');
// console.log(p);

// // for(let i=0; i <= p.length; i++){
// //     p[i].innerText = `Codecamp Academy 0${i+1}`
// // }
// let i=1;
// for(let el of p){
//     el.innerText =  `Codecamp Academy 0${i++}`
// }


// let ctn = document.getElementsByClassName('container');
// console.log(ctn[0]);
// ctn[0].style.background = 'pink';

// let para1 = document.getElementsById('para1');
// console.log(para1);

// para1.innerText = new Date();

// let p3 = document.querySelector('.item03');
// console.log(p3);
// p3.innerText = 'Good boy';

// let allp = document.querySelectorAll('.item');
// console.log(allp);

// allp.forEach((el, i) => {
//     el.innerText = `Codecamp Academy 00${i++}`;
// })

// let qpara1 = document.querySelector('#para1');
// console.log(qpara1);
// para1.style.color = 'red';

// let qa_para1 = document.querySelectorAll('#para1');
// console.log(qa_para1[0]);

// let item = document.querySelector('.item');  
// console.log(item);
// item.style.color = 'pink';


// matches
// console.log();


// let item03 = document.querySelector('.container');
// console.log(item03);

// let ctn = item03.closest('body');
// console.log(ctn);


// ************ contains

// -
// -
// -



// ************ Nodetype

// let ctn = document.querySelector('.container');
// console.log(ctn.childNodes);
// console.log(ctn.childNodes[0].nodeType);
// console.log(ctn.childNodes[3].nodeType);


// ************ contains

// let para1 = document.querySelector('#para1');
// para1.innerHTML = 'Hello <mark><b><i>Boi</i></b></mark>'
// para1.innerText = 'Hello <mark><b><i>Boi</i></b></mark>'
// para1.innerContent = 'Hello <mark><b><i>Boi</i></b></mark>'
// console.log(para1.outerHTML);
// para1.outerHTML = '   <img src="https://m.media-amazon.com/images/I/71AdSChz33L._AC_UF1000,1000_QL80_.jpg" alt="">'

// ******* Attributes

// let para1 = document.querySelector('#para1');
// console.log(para1.attributes);
// console.log(typeof para1.attributes);
// console.log(Array.isArray(para1.attributes));
// console.log(para1.attributes[1].value);
// console.log(para1.hasAttributes9('id'));


// const newDiv = document.createElement('div');
// newDiv.setAttribute('class', 'wrapper');
// console.log(newDiv);

// const newItem = document.createAttribute('p');
// newItem.setAttribute('class','item item01');
// newItem.textContent = 'NEW ITEM';
// console.log(newItem.outerHTML);

// const ctn = document.querySelector('.container');
// ctn.after(newDiv);
// newDiv.append(newItem);


// function makeElement(tag, atrName, atrValue, content) {
//     let output = document.createElement(tag)
//     output.setAttribute(atrName, atrValue)
//     output.textContent = content
//     return output
//   }
  
//   let wrapper = makeElement('div','class','wrapper','')
//   // console.log(wrapper)
//   for(let i=1; i<=4; i++) {
//     let newItem = makeElement('p', 'class', `item item0${i}`,`NEW ITEM0${i}`)
//     wrapper.append(newItem)
//   }
  
//   const ctn = document.querySelector('.container')
//   ctn.after(wrapper)


  // ********remove

//   const n3 = document.querySelectorAll('.wepper > .item03');
//   n3.remove();

//   const n2 = document.querySelectorAll('.item02');
//   console.log(n2);
//   n2.forEach(el=> el.remove());



// const ctn = document.querySelector('.container');
// ctn.onclick = function(){
//     ctn.classList.toggle('hilight');
// }


// const h1 = document.querySelector('h1');
// h1.style.borderTopStyle= 'Dashed';
// h1.style.color = 'red';

// setTimeout(()=> {
//     h1.style.removeProperty('border-top-style');
// },1500);

// console.log(getComputedStyle(h1));
// console.log(getComputedStyle(h1).marginTop);
// console.log(getComputedStyle(h1).color);
// console.log(getComputedStyle(h1).borderTop);
// console.log(getComputedStyle(h1).width);
// console.log(getComputedStyle(h1).height);


// const h1 = document.querySelector('h1');
// function h1click(){
//     h1.classList.toggle('hilight');
// }

// function btn2Click(){
//     h1.sddEventListener('click',h1click );

// }
// h1.addEventListener('click',h1click );
// function btnClick(){
//     // alert('Helo boi');
//     h1.removeEventListener('click',h1click );
// }

// const btn = document.createElement('bottom');
// btn.innerText ='Click Me'

// h1.after(btn);
// btn.style.padding = '1.4rem';
// btn.addEventListener('click', btnClick);

// const btn2 = btn.cloneNode(true);
// btn2.innerText = 'add ha event';
// btn.addEventListener('click', btn2Click);
// h1.after(btn2);
// ********** Event


const h1 = document.querySelector('h1')
function h1Click() {
  h1.classList.toggle('hilight')
}

function btnClick() {
  h1.removeEventListener('click', h1Click )
}

function btn2Click() {
  h1.addEventListener('click', h1Click )
}

const btn = document.createElement('button')
btn.innerText = 'remove h1 event'
btn.style.padding = '0.4rem'
h1.after(btn)
btn.addEventListener('click', btnClick)
const btn2 = btn.cloneNode(true)
btn2.innerText = "add h1 event"
btn2.addEventListener('click', btn2Click)
btn.after(btn2)