window.onload = () => {
    const savedName = localStorage.getItem('user');
    const greetTxt = document.getElementById('greet');

    if (greetTxt) {
        if (savedName) {
            greetTxt.innerText = savedName;
        }
    }
};