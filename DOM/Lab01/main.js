let h1 = document.getElementsByTagName('h1');

console.log(h1);                                            
console.log(h1[0]);
h1[0].style.color ='red';
// console.log(Array.isArray(h1));

let p = document.getElementsByTagName('p');
console.log(p);

// for(let i=0; i <= p.length; i++){
//     p[i].innerText = `Codecamp Academy 0${i+1}`
// }
let i=1;
for(let el of p){
    el.innerText =  `Codecamp Academy 0${i++}`
}


let ctn = document.getElementsByClassName('container');
console.log(ctn[0]);
ctn[0].style.background = 'pink';

let para1 = document.getElementsById('para1');
console.log(para1);

para1.innerText = new Date();