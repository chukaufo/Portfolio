const starContainer = document.querySelector('.stars');

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');

    star.innerText = "+";

    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;

    starContainer.appendChild(star);
}

for (let i = 0; i < 150; i++) {
    createStar();
}
