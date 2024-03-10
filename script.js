// modifier heure si nécessaire
const endDate = new Date("2024-03-22T13:00:00").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = endDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `<p>${days}<span>J</span></p>`;
    document.getElementById("countdown").innerHTML += `<p>${hours}<span>H</span></p>`;
    document.getElementById("countdown").innerHTML += `<p>${minutes}<span>M</span></p>`;
    document.getElementById("countdown").innerHTML += `<p>${seconds}<span>S</span></p>`;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML ="Le countdown est terminé !";
    }
}, 1000);


