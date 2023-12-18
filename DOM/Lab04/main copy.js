const loginform = document.querySelector('.login-form'); // ดึง element form ด้วย class (.login-form) เก็บไว้ในตัวแปร loginform
const inp_username = document.querySelector('#username'); // ดึง element input ด้วย id (#username) เก็บไว้ในตัวแปร inp_username
const inp_password = document.querySelector('#password'); // ดึง element input ด้วย id (#password) เก็บไว้ในตัวแปร inp_password

const hdlLogin = e => { // ฟังก์ชั่น hdlLogin รับ argument 1 ตัวคือ e สำหรับ event
  e.preventDefault(); // ป้องกันการ submit form ตามปกติ

  // แสดงข้อความแจ้งเตือน
  alert('Submit ...');

  // 3 วิธีในการเข้าถึงค่าของ inp_username
  console.log(document.querySelector('#username').value); // ใช้ selector เดียวกับตอนดึง element
  console.log(inp_username.value); // ใช้ตัวแปรที่เก็บ element inp_username
  console.log(loginform.username.value); // ใช้ .username จาก form (เนื่องจากมี input id="username")

  // 3 วิธีในการเข้าถึงค่าของ inp_password
  console.log(document.querySelector('#password').value); // ใช้ selector เดียวกับตอนดึง element
  console.log(inp_password.value); // ใช้ตัวแปรที่เก็บ element inp_password
  console.log(loginform.password.value); // ใช้ .password จาก form (เนื่องจากมี input id="password")

  // เข้าถึงค่าของ element ทั้งหมดใน form
  let allinp = loginform.elements; // เก็บ element ทั้งหมดใน form ไว้ในตัวแปร allinp

  // เข้าถึงค่าแต่ละ element ใน allinp
  console.log(allinp[0].value); // element แรก (index 0)
  console.log(allinp.username.value); // element ด้วย name="username"
  console.log(allinp.password.value); // element ด้วย name="password"

  // เข้าถึง attribute ID และ value ของ element username
  console.log(allinp['username'].id);
  console.log(allinp['username'].value);

  // เข้าถึง attribute ID และ value ของ element password
  console.log(allinp['password'].id);
  console.log(allinp['password'].value);

  // เข้าถึง attribute ID และ value ของ element role
  console.log(allinp['role'].id);
  console.log(allinp['role'].value);

  // TODO: เพิ่มการตรวจสอบข้อมูลว่าง และ logic เพิ่มเติม

};

loginform.addEventListener('submit', hdlLogin); // เพิ่ม event listener submit ให้กับ form และเรียกฟังก์ชั่น hdlLogin เมื่อ submit
