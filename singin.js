
const inpname = document.getElementById('name');
const submit = document.getElementById('click');

if (submit && inpname) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        
        const nameValue = inpname.value.trim();
        if (nameValue !== "") {
            localStorage.setItem('savedInfo', nameValue);
            window.location.href = 'HP2.html'; 
        } else {
            alert("Vui lòng nhập tên!");
        }
    });
}
const savedName = localStorage.getItem('savedInfo');
const displayTag = document.getElementById('userContent');

if (displayTag) {
    if (savedName) {
        displayTag.textContent = savedName;
    } else {
        displayTag.textContent = "12TN3";
    }
}