// Typing effect setup
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed', {
        strings: [
            "Connecting to Saumya's heart...",
            "Searching for the perfect song...",
            "Found it: Banjaare ❤️",
            "I Love You So Much Saumya!"
        ],
        typeSpeed: 60,
        backSpeed: 30,
        loop: true
    });
});

// Music function setup
function startExperience() {
    var audio = document.getElementById("loveMusic");
    
    // Alert pehle taaki pata chale button kaam kar raha hai
    alert("Surprise for Saumya! ❤️");
    
    audio.play().then(() => {
        console.log("Music playing successfully");
    }).catch(function(error) {
        console.log("Music play failed:", error);
        alert("Please tap again to unlock music!");
    });
}
