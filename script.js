let currentPage = 1;

function nextPage() {
    document.getElementById('page1').classList.remove('active');
    document.getElementById('page2').classList.add('active');
    currentPage = 2;
}

function handleYes() {
    document.getElementById('page2').classList.remove('active');
    document.getElementById('page3').classList.add('active');
    createConfetti();
}

function handleNo() {
    const noBtn = event.target;
    noBtn.style.position = 'absolute';
    noBtn.style.left = Math.random() * 80 + '%';
    noBtn.style.top = Math.random() * 80 + '%';
}

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.textContent = ['❤️', '💕', '💖', '💗', '🎉'][Math.floor(Math.random() * 5)];
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-50px';
        confetti.style.fontSize = '30px';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}

const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to { transform: translateY(100vh) rotate(360deg); }
    }
`;
document.head.appendChild(style);

