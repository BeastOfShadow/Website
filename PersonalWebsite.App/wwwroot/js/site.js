// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
/*document.addEventListener("DOMContentLoaded", function () {
    let textElement = document.querySelector(".animated-text");
    let text = textElement.innerText;
    textElement.innerHTML = ""; // Svuota il contenuto originale

    // Divide il testo in lettere e le racchiude in <span>
    text.split("").forEach((letter, index) => {
        let span = document.createElement("span");
        span.innerText = letter;
        textElement.appendChild(span);
    });

    // Seleziona tutte le lettere
    let letters = textElement.children;

    // Anima ogni lettera con effetto ondulatorio alternato
    gsap.from(letters, {
        x: () => gsap.utils.random(-200, 200), // Movimento orizzontale randomico
        y: () => gsap.utils.random(-100, 100), // Movimento verticale randomico
        rotation: () => gsap.utils.random(-180, 180), // Rotazione casuale
        opacity: 0,
        duration: () => gsap.utils.random(1, 2), // Durata variabile
        stagger: 0.1, // Ritardo tra le lettere
        ease: "back.out(1.7)", // Rende l'animazione più naturale
    });
});*/

document.addEventListener("DOMContentLoaded", function () {
    const tl = gsap.timeline();
    tl.to(".animated-text", { duration: 1, text: "シモネ"});
    tl.to(".animated-text", { delay: 1, duration: 1, text: "Simone"});
    tl.to(".animated-text", { delay: 1, duration: 1, text: "BeastOfShadow"});
});


