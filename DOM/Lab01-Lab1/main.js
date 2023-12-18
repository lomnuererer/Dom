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



function makeElement(tag, atrName, atrValue, content) {
    let output = document.createElement(tag)
    output.setAttribute(atrName, atrValue)
    output.textContent = content
    return output
  }
  
  let wrapper = makeElement('div','class','wrapper','')
  // console.log(wrapper)
  for(let i=1; i<=4; i++) {
    let newItem = makeElement('p', 'class', `item item0${i}`,`NEW ITEM0${i}`)
    wrapper.append(newItem)
  }
  
  const ctn = document.querySelector('.container')
  ctn.after(wrapper)