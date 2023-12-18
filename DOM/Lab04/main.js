const loginform = document.querySelector('.login-form');
const inp_username = document.querySelector('#username');
const inp_password = document.querySelector('#password');
const inp_role = document.querySelector('#role');


const validateInput = (inputObj) => {

}

const hdlLogin = e => {
    e.preventDefault();

    // alert('Submit ...');
    // console.log(document.querySelector('#username').value);
    // console.log(document.querySelector('#password').value);
    // console.log(inp_username.value);
    // console.log(inp_password.value);
    // console.log(loginform.username.value);
    let allinp = loginform.elements
    let inputObj = {}
    for (let el of loginform.elements) {
        inputObj[el.id] = el.value
    }
    console.log(inputObj)
    // console.log(allinp[0].value);
    // console.log(allinp.username.value);
    // console.log(allinp.password.value);


    // console.log(allinp['username'].id);
    // console.log(allinp['username'].value);

    // console.log(allinp['password'].id);
    // console.log(allinp['password'].value);

    // console.log(allinp['role'].id);
    // console.log(allinp['role'].value);


    // const data = [
    //     inp_username.value,
    //     inp_password.value,
    //     inp_role.value,
    // ];
    // console.log(data);

}

loginform.addEventListener('submit', hdlLogin);