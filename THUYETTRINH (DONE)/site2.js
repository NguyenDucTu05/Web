const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


const userInp = document.getElementById('username'); 
const loginBt = document.getElementById('btnShow');

loginBt.addEventListener('click', (e) => {
    e.preventDefault(); 

    const name = userInp.value;
    if (name) {
        localStorage.setItem('user', name);
        window.location.href = 'HomePage.html';
    } else {
        alert("Nhập tên đăng nhập đã bạn ơi!");
    }
});