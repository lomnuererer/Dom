const nav = document.querySelector('nav');

const blacklist = ['example', 'w3scools', 'YouTube'];


const aClick = e => {
  e.preventDefault();
  console.log(e.target.href);
  let idx = blacklist.findIndex(el => e.target.href.includes(el));
  if (idx !== -1) {
    alert(`ไม่สามารถไปยังเว็บไซต์นี้ได้: ${blacklist[idx]}`);
    return;
  }
  location.assign(e.target.href);
};

for (const el of nav.children) {
  el.addEventListener('click', aClick);
}
