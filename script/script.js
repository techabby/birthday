
const popSound = new Audio("./assets/sounds/pop.mp3");
popSound.volume = 0.5;

const btn = document.getElementById("lightBtn");
const party = document.querySelector(".party");

let partyStarted = false;

function randomBalloon() {
    createBalloon();
    const nextTime = 1500 + Math.random() * 4500;
    setTimeout(randomBalloon, nextTime);
}

const speaker = document.getElementById("speaker");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;
let noteInterval;

musicBtn.addEventListener("click", async () => {

    if (!playing) {

        try {
            await music.play();

            playing = true;

            speaker.classList.add("playing");

            musicBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';

            noteInterval = setInterval(createMusicNote, 600);

        } catch (error) {
            console.log("Music could not be played:", error);
        }

    } else {

        music.pause();

        playing = false;

        speaker.classList.remove("playing");

        musicBtn.innerHTML = '<i class="fa-solid fa-play"></i>';

        clearInterval(noteInterval);

    }

});

function createMusicNote() {

    const note = document.createElement("div");

    note.className = "note";

    const notes = ["♪", "♫", "♬", "♩"];

    note.innerHTML =
        notes[Math.floor(Math.random() * notes.length)];

    const rect = speaker.getBoundingClientRect();

    note.style.left =
        rect.left + 35 + "px";

    note.style.top =
        rect.top + 15 + "px";

    note.style.fontSize =
        (16 + Math.random() * 10) + "px";

    document.body.appendChild(note);

    setTimeout(() => {
        note.remove();
    }, 3000);

}

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (12 + Math.random() * 12) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);

}

function randomHeart() {

    createHeart();

    setTimeout(
        randomHeart,
        8000 + Math.random() * 7000
    );

}

btn.addEventListener("click", () => {

    if (partyStarted) return;

    partyStarted = true;
    btn.disabled = true;

    const flash = document.querySelector(".light-flash");

    flash.classList.add("show");

    document.body.classList.add("party-mode");

    setTimeout(() => {
        document.body.classList.add("party-mode");
    }, 500);

    document.querySelector(".container").style.opacity = "0";

    setTimeout(() => {

        document.querySelector(".container").style.display = "none";

        party.classList.add("show");

        // Fairy Lights
        document
            .querySelector(".fairy-lights")
            .classList.add("show");

        // Sprinkle Rain
        setTimeout(() => {
            sprinkleRain();
        }, 3800);

        // Happy Birthday
        setTimeout(() => {

            const birthdayWall = document.querySelector(".birthday-wall");

            birthdayWall.classList.add("show");

            setTimeout(() => {
                document.querySelector(".birthday-tag").classList.add("show");
            }, 400);

            setTimeout(() => {
                document.querySelector(".birthday-subtitle").classList.add("show");
            }, 900);

        }, 1000);

        // Floating Balloons
        setTimeout(() => {
            randomBalloon();
        }, 2500);

    }, 1000);

    // Random Heart
    setTimeout(() => {
        randomHeart();
    }, 9000);

    // Speaker
    setTimeout(() => {

        document
            .querySelector(".speaker")
            .classList.add("show");

    }, 7000);

    // Cake
    setTimeout(() => {
        showCake();
    }, 7000);

});

const colors = [
    "#ffe1aa",
    "#d9bafa",
    "#b995df",
    "#ffffff",
    "#a88acb",
    "#f5d6a5"
];

const balloonContainer =
    document.querySelector(".floating-balloons");

function createBalloon() {

    const balloon = document.createElement("div");

    balloon.className = "fly-balloon";

    const knot = document.createElement("div");
    knot.className = "knot";

    const string = document.createElement("div");
    string.className = "string";

    balloon.appendChild(knot);
    balloon.appendChild(string);

    const size = 45 + Math.random() * 30;

    balloon.style.width = size + "px";
    balloon.style.height = size * 1.3 + "px";

    let x;

    const r = Math.random();

    if (r < 0.4) {

        // Left
        x = Math.random() * 18;

    } else if (r < 0.8) {

        // Right
        x = 82 + Math.random() * 18;

    } else {

        // Center
        x = 25 + Math.random() * 50;

    }

    balloon.style.left = x + "vw";

    balloon.style.background =
        colors[Math.floor(Math.random() * colors.length)];

    knot.style.background = balloon.style.background;

    balloon.style.animationDuration =
        (10 + Math.random() * 8) + "s";

    balloon.style.setProperty(
        "--drift",
        (Math.random() * 180 - 90) + "px"
    );

    balloon.style.setProperty(
        "--rotate",
        (Math.random() * 24 - 12) + "deg"
    );

    balloonContainer.appendChild(balloon);

    balloon.addEventListener("click", () => {
        popBalloon(balloon);
    });

    balloon.addEventListener("touchstart", (e) => {
        e.preventDefault();
        popBalloon(balloon);
    }, { passive: false });

    balloon.addEventListener("animationend", () => {
        balloon.remove();
    });

}

function popBalloon(balloon) {

    if (!balloon.isConnected) return;

    const rect = balloon.getBoundingClientRect();

    balloon.remove();

    const particleColors = [
        "#ffe1aa",
        "#d9bafa",
        "#b995df",
        "#ffffff",
        "#a88acb",
        "#f5d6a5"
    ];

    for (let i = 0; i < 45; i++) {

        const p = document.createElement("div");

        p.className = "particle";

        if (Math.random() > .7) {

            p.classList.add("star");

            p.style.width = (4 + Math.random() * 5) + "px";

            p.style.height = (8 + Math.random() * 13) + "px";

        }

        p.style.background =
            particleColors[Math.floor(Math.random() * particleColors.length)];

        p.style.left =
            rect.left + rect.width / 2 + "px";

        p.style.top =
            rect.top + rect.height / 2 + "px";

        const angle = Math.random() * Math.PI * 2;

        const power = 80 + Math.random() * 120;

        const x = Math.cos(angle) * power;

        const y = Math.sin(angle) * power;

        p.style.setProperty("--x", x + "px");

        p.style.setProperty("--y", y + "px");

        document.body.appendChild(p);

        p.addEventListener("animationend", () => {
            p.remove();
        });

    }

}

function sprinkleRain() {

    const container = document.querySelector(".sprinkle-rain");

    const sprinkleColors = [
        "#ffe1aa",
        "#d9bafa",
        "#b995df",
        "#ffffff",
        "#a88acb"
    ];

    for (let i = 0; i < 180; i++) {

        setTimeout(() => {

            const s = document.createElement("div");

            s.className = "sprinkle";

            s.style.left = Math.random() * 100 + "vw";

            s.style.top = (-80 - Math.random() * 150) + "px";

            s.style.background =
                sprinkleColors[Math.floor(Math.random() * sprinkleColors.length)];

            s.style.animationDelay =
                Math.random() * 1.2 + "s";

            s.style.animationDuration =
                (2.5 + Math.random() * 2) + "s";

            s.style.transform =
                `rotate(${Math.random() * 360}deg)`;

            s.style.setProperty(
                "--drift",
                (Math.random() * 120 - 60) + "px"
            );

            container.appendChild(s);

            s.addEventListener("animationend", () => {
                s.remove();
            });

        }, Math.random() * 1200);

    }

}

function shootingStar() {

    const star = document.querySelector(".shooting-star");

    star.style.left = (-250 + Math.random() * 150) + "px";

    star.style.top = (-80 + Math.random() * 120) + "px";

    star.classList.remove("show");

    void star.offsetWidth;

    star.classList.add("show");

}

function randomShootingStar() {

    shootingStar();

    setTimeout(
        randomShootingStar,
        15000 + Math.random() * 20000
    );

}

randomShootingStar();

// ================= CAKE =================

const cake = document.querySelector(".cake-container");

const ribbon = document.querySelector(".ribbon");

const cakeBtn = document.querySelector(".cake-btn");

const cutBtn = document.querySelector(".cut-btn");

const wish = document.querySelector(".wish-message");

const flames = document.querySelectorAll(".flame");

const gift = document.querySelector(".gift-container");

function showCake() {

    cake.classList.add("show");

    setTimeout(() => {
        ribbon.classList.add("bounce");
    }, 2200);

    setTimeout(() => {
        cakeBtn.classList.add("show");
    }, 2800);

}

cakeBtn.addEventListener("click", () => {

    cakeBtn.classList.remove("show");

    flames.forEach(flame => {
        flame.classList.add("out");
    });

    setTimeout(() => {
        wish.classList.add("show");
    }, 1000);

    setTimeout(() => {
        wish.classList.remove("show");
    }, 4000);

    setTimeout(() => {
        cake.classList.add("hide");
    }, 5500);

    setTimeout(() => {

        gift.classList.add("show");

    }, 7000);

});

gift.addEventListener("click", () => {

    window.location.assign("gifts.html");

});

