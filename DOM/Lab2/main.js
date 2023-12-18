const ctn = document.querySelector('.container');
const item04 = document.querySelector('.item04');

ctn.addEventListener('click', (e) => {
    // alert('9999');
    console.log('on Container');
    console.log(e.target);
    e.target.style.color = "pink"
})

item04.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('onItem04');

})

document.body.addEventListener('click', (e) => { 
    console.log('on body');
})

document.addEventListener('click', (e) => {
    console.log('on document');
})