var typed = new Typed('#typed', {
    strings: ["Connecting to Saumya's heart...", "Searching for the perfect song...", "Found it: Banjaare ❤️", "I Love You So Much Saumya!"],
    typeSpeed: 60, backSpeed: 30, loop: true
});
function startExperience() {
    var audio = document.getElementById("loveMusic");
    audio.play();
    alert("Music Started! For You Saumya ❤️");
}
