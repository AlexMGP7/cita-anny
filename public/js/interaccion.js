let clickCount = 0;
let shownIndexes = [];
const container = document.getElementById("container");
const result = document.getElementById("result");

const frasesGraciosas = [
    "¿Segura que no? Te daré besitos 😞",
    "Sé que quieres, dame una oportunidad",
    "Te tengo una sorpresita 😊",
    "Te daré heladito si aceptas 😖",
    "Sé que vendrás cansada de la uni, pero igual quiero salir contigo 💜",
    "vamo, será divertido <3",
    "Veremos tienditas agarrados de la mano, anda",
    "Te voy a consentir para que estés feli",
    "Podríamos ir a Ilahui a ver cositas 👀",
];

document.getElementById("noButton").addEventListener("click", () => {
    clickCount++;
    noButton.style.filter = `blur(${clickCount / 3}px)`;

    let fontSize = parseInt(window.getComputedStyle(siButton).fontSize);
    let paddingVert = parseInt(
        window.getComputedStyle(siButton).paddingTop
    );
    let paddingHoriz = parseInt(
        window.getComputedStyle(siButton).paddingRight
    );

    siButton.style.fontSize = `${fontSize + 1}px`;
    siButton.style.padding = `${paddingVert + 1}px ${paddingHoriz + 5}px`;

    if (shownIndexes.length === frasesGraciosas.length) {
        document.getElementById("noButton").style.display = "none";
        result.innerHTML = "Ya no tienes opción";
        siButton.style.margin = `${paddingVert + 4}px`;
    } else {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * frasesGraciosas.length);
        } while (shownIndexes.includes(randomNumber));

        shownIndexes.push(randomNumber);
        let randomNumberImg = Math.floor(Math.random() * 7 + 1);
        result.innerHTML = `<p>${frasesGraciosas[randomNumber]}</p><img src="images/${randomNumberImg}.jpg" width="200px" height="100px">`;
    }
});

document.getElementById("siButton").addEventListener("click", () => {
    siButton.style.padding = `15px 30px`;
    siButton.style.fontSize = `18px`;

    noButton.style.filter = "none";
    clickCount = 0;

    document.getElementById("siButton").style.display = "none";
    document.getElementById("noButton").style.display = "none";
    
    const audio = new Audio('./audio/chipichipidaba.mp3');
    audio.play();

    result.innerHTML = `<p>Yeei 💜</p><img src="images/happy.jpg" width="200px" height="100px">`;
    for (let i = 0; i < 300; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💜";
    document.body.appendChild(heart);
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Duración entre 3-5s
    heart.addEventListener("animationend", function () {
        heart.remove();
    });
}