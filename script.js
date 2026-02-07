const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseenter', (e) => {
    const btnRect = noBtn.getBoundingClientRect();
    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;
    
    let newX, newY;
    
    if (btnCenterX < window.innerWidth / 2) {
        newX = Math.random() * (window.innerWidth - 300) + 200;
    } else {
        newX = Math.random() * 200;
    }
    
    if (btnCenterY < window.innerHeight / 2) {
        newY = Math.random() * (window.innerHeight - 200) + 150;
    } else {
        newY = Math.random() * 200;
    }
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
});

noBtn.addEventListener('click', (e) => {
    e.preventDefault();
});

yesBtn.addEventListener('click', () => {
    window.location.href = 'celebration.html';
});


// Create rising hearts like incense
function createRisingHeart() {
    const heart = document.createElement('div');
    heart.textContent = '💕';
    heart.style.position = 'fixed';
    heart.style.fontSize = Math.random() * 20 + 20 + 'px';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.bottom = '-50px';
    heart.style.opacity = '0';
    heart.style.zIndex = '0';
    heart.style.pointerEvents = 'none';
    heart.style.animation = `riseUp ${Math.random() * 3 + 6}s ease-in forwards`;
    
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 9000);
}

setInterval(createRisingHeart, 800);
