// ==============================================================
//                          Letter
// ==============================================================

// BACKGROUND STARS
const stars = document.getElementById("stars");

for (let i = 0; i < 45; i++) {

    const star = document.createElement("span");

    star.className = "star";
    star.textContent = "✦";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.fontSize = (Math.random() * 9 + 5) + "px";
    star.style.animationDelay = Math.random() * 3 + "s";

    stars.appendChild(star);

}


// =========================
// OPEN THE ENVELOPE
// =========================

let letterOpened = false;

function openLetter() {

    if (letterOpened) return;

    letterOpened = true;

    const envelope = document.getElementById("envelope");
    const envelopeArea = document.getElementById("envelopeArea");
    const hint = document.getElementById("clickHint");
    const letterContainer = document.getElementById("letterContainer");

    // Open envelope flap and slide paper out

    envelope.classList.add("open");

    // Remove instruction text

    hint.style.display = "none";

    // Wait for the paper to slide out

    setTimeout(() => {

        envelopeArea.classList.add("leaving");

        // Show the complete letter after extraction

        setTimeout(() => {

            envelopeArea.style.display = "none";

            letterContainer.classList.add("show");

            // Bring the letter into view

            letterContainer.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 600);

    }, 1650);

}
