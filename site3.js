
document.querySelectorAll('.dalat-slider').forEach(slider => {
    const track = slider.querySelector('.slider-track'),
          items = slider.querySelectorAll('.slider-item'),
          nav = slider.nextElementSibling;
    let index = 1;

    const move = () => {
        track.style.transform = `translateX(${-index * (items[0].offsetWidth + 30)}px)`;
        items.forEach((item, i) => item.classList.toggle('active', i === index));
    };

    nav.querySelector('.next').onclick = () => { index = (index < items.length - 1) ? index + 1 : 0; move(); };
    nav.querySelector('.prev').onclick = () => { index = (index > 0) ? index - 1 : items.length - 1; move(); };
    move();
});
const btn = document.querySelector("#send"),
      inp = document.querySelector("#inp"),
      box = document.querySelector("#box"),
      URL_SCRIPT = "https://script.google.com/macros/s/AKfycbzlMFYQLy5e0Tua7pwl08f4t1xoSIsBoScu2Qfv0tMIWifxkMxU5f-E8A5UB0Kn0JThew/exec";
const apiCall = (body) => fetch(URL_SCRIPT, { method: "POST", body: JSON.stringify(body) }).then(() => setTimeout(loadComments, 300));
const loadComments = () => {
    fetch(URL_SCRIPT).then(res => res.json()).then(data => {
        box.innerHTML = data.map(item => {
            const time = new Date(item.time);
            const timeStr = `${time.getHours()}:${time.getMinutes().toString().padStart(2, '0')}`;
            return `
                <div class="chat-row" style="position: relative; background: rgba(255,255,255,0.05); padding: 10px; border-radius: 8px; margin-bottom: 8px; border-left: 4px solid #ffa500; color: white;">
                    <div style="font-family: Denk One, sans-serif;">Comment của tao:</div>
                    <div style="font-size: 15px; margin-bottom: 4px;">${item.msg}</div>
                    <small style="color: #888; font-size: 11px;">${timeStr}</small>
                    <button onclick="deleteMsg(${item.stt})" style="position:absolute; right:10px; top:50%; transform:translateY(-50%); background:none; border:none; color:#555; cursor:pointer; font-size:18px;">×</button>
                </div>`;
        }).reverse().join('');
    });
};

btn.onclick = () => {
    const msg = inp.value.trim();
    if (!msg) return;
    btn.innerText = "Sending...";
    btn.disabled = true;
    apiCall({ type: "COMMENT", fullName: localStorage.getItem("fullName") || "Thành viên 12TN3", comment: msg })
    .then(() => {
        inp.value = "";
        btn.innerText = "Comment";
        btn.disabled = false;
        inp.focus();
    });
};

window.deleteMsg = (stt) => stt && confirm("Xóa bình luận này?") && apiCall({ type: "DELETE", stt });

loadComments();