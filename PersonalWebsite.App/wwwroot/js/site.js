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




//document.addEventListener("DOMContentLoaded", function () {
// const tl = gsap;
// tl.to(".animated-text", { duration: 1, text: "Who am I?"});
// tl.to(".elevation", { opacity: 1, duration: 1});
// tl.to(".animated-text", { opacity: 1, duration: 1});
/*tl.to(".animated-text", { delay: 1, duration: 1, text: "Simone"});
tl.to(".animated-text", { delay: 1, duration: 1, text: "BeastOfShadow"});*/

/*tl.to(".animated-text", { duration: 0.1, onComplete: () => {
    document.querySelector(".animated-text").innerHTML += '<span class="blinking-dot">.</span>';

    // Dopo che il punto è stato aggiunto, farlo lampeggiare
    gsap.to(".blinking-dot", { opacity: 0, duration: 0.5, repeat: 8, yoyo: true });
}});*/
// });


var map = L.map('map').setView([45.4654219, 9.1859243], 7); // Imposta la vista iniziale (Parigi)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: ''
}).addTo(map);

/* Aggiungi marker per le città visitate
var cities = [
  { name: "London", lat: 51.507351, lng: -0.127758 },
  { name: "Rome", lat: 41.9028, lng: 12.4964 },
  { name: "New York", lat: 40.7128, lng: -74.0060 }
];

cities.forEach(city => {
  L.marker([city.lat, city.lng]).addTo(map)
    .bindPopup(`<b>${city.name}</b>`);
});
*/

// Funzione per lo stile del poligono
function style(feature) {
  return {
    color: 'rgba(0, 0, 0, 0.4)',            // Colore del contorno
    weight: 2,                // Spessore del contorno
    opacity: 1,               // Opacità del contorno
    fillColor: 'rgba(130, 127, 127, 0.7)',       // Colore di riempimento
    fillOpacity: 0.5          // Opacità di riempimento
  };
}

L.geoJSON(window.geoJsonData, {
  style: style
}).addTo(map);


