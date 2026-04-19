document.addEventListener('DOMContentLoaded', function() {
    new Typed('#typed', {
        strings: [
            "Connecting to Saumya's heart...",
            "Searching for my Cutee 🙂...",
            "Found it: Banjaare ❤️",
            "I Love You Meri Pagli!",
            // Ye special span class se text colorful aur bold banega
            "<span class='final-wish'>Chummi to dedo pagli meri 🙂</span>"
        ],
        typeSpeed: 60,
        backSpeed: 30,
        loop: false,
        contentType: 'html' // Isse HTML tags kaam karenge
    });
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-rain');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 5000);
}

function startExperience() {
    const audio = document.getElementById("loveMusic");
    audio.play().catch(e => console.log("Music error"));
    alert("Surprise for Saumya! ❤️");
    setInterval(createHeart, 300);
}
