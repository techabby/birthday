// ==============================================================
//                          Laterns
// ==============================================================

// BACKGROUND STARS

const background = document.getElementById("backgroundStars");

for (let i = 0; i < 120; i++) {

    const star = document.createElement("span");

    star.className = "bg-star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 4 + "s";

    background.appendChild(star);

}


// 30 LANTERN MESSAGES

const messages = [

    {
        title: "Your Smile",
        text: "I hope you never run out of reasons to smile. Your happiness is one of the most beautiful things in this world."
    },
    {
        title: "Your Dreams",
        text: "I hope every dream you've ever quietly wished for finds its way into your life."
    },
    {
        title: "Endless Happiness",
        text: "May happiness find you in the smallest moments and stay with you through every season of life."
    },
    {
        title: "Beautiful Days",
        text: "I hope your days are filled with little surprises, unexpected laughter, and beautiful memories."
    },
    {
        title: "Peace",
        text: "I wish you peaceful nights, a calm heart, and a mind that never has to carry too much."
    },
    {
        title: "Your Future",
        text: "I hope the future is kinder, brighter, and more beautiful than anything you have imagined."
    },
    {
        title: "Always Loved",
        text: "I hope you always feel appreciated, understood, respected, and loved exactly as you are."
    },
    {
        title: "Little Adventures",
        text: "May life surprise you with spontaneous adventures, new places, and stories worth remembering."
    },
    {
        title: "Your Strength",
        text: "Whenever life becomes difficult, I hope you remember just how strong and capable you are."
    },
    {
        title: "Little Things",
        text: "I hope you never stop finding magic in sunsets, favourite songs, warm conversations, and tiny moments."
    },
    {
        title: "Your Success",
        text: "May all your hard work take you closer to the success you have always wanted."
    },
    {
        title: "Good People",
        text: "I hope life always surrounds you with people who bring out the best in you."
    },
    {
        title: "Your Confidence",
        text: "Never forget your worth. I hope you always see the beautiful person that everyone else gets to see."
    },
    {
        title: "More Laughter",
        text: "May your life always have silly jokes, uncontrollable laughter, and moments that make your cheeks hurt."
    },
    {
        title: "New Beginnings",
        text: "Every new chapter deserves a little hope. I hope yours keeps getting more beautiful."
    },
    {
        title: "Favourite Things",
        text: "I hope life gives you more of everything that makes your heart happy."
    },
    {
        title: "Your Spark",
        text: "No matter how much life changes, I hope you never lose the little spark that makes you who you are."
    },
    {
        title: "Unexpected Magic",
        text: "May the universe surprise you with beautiful things when you least expect them."
    },
    {
        title: "Everything You Deserve",
        text: "I wish you every bit of kindness, happiness, love, and success that you truly deserve."
    },
    {
        title: "A Lifetime of Smiles",
        text: "I hope that even years from now, you will have a thousand little reasons to smile."
    },
    {
        title: "I'll Listen",
        text: "I promise to listen to you, even when you don't know exactly how to explain what's on your mind."
    },
    {
        title: "I'll Cheer for You",
        text: "I promise to celebrate your little victories just as much as your biggest achievements."
    },
    {
        title: "I'll Remember",
        text: "I promise to remember the little things about you, because sometimes those are the most important things."
    },
    {
        title: "I'll Be There",
        text: "I promise to make time for you and remind you that you don't have to face every difficult day alone."
    },
    {
        title: "More Memories",
        text: "I promise to keep creating little moments with you that someday we'll look back on and smile about."
    },
    {
        title: "New Places",
        text: "I dream of exploring new places together, getting lost in unfamiliar streets, and finding our own adventures."
    },
    {
        title: "A Thousand Pictures",
        text: "I dream of taking a thousand pictures together, each one holding a different little memory."
    },
    {
        title: "Beautiful Sunsets",
        text: "I dream of watching beautiful sunsets together, with nowhere else we need to be."
    },
    {
        title: "More Birthdays",
        text: "I dream of celebrating many more birthdays with you, each one more memorable than the last."
    },
    {
        title: "Our Little Universe",
        text: "I dream that years from now, we'll still have countless stories to tell and countless reasons to smile."
    }

];


// LANTERN POSITIONS

const positions = [

    [8, 15], [23, 12], [39, 18], [57, 12], [75, 17], [91, 13],
    [14, 34], [31, 32], [49, 35], [68, 32], [85, 36],
    [7, 53], [24, 53], [43, 52], [61, 53], [80, 54], [94, 54],
    [13, 73], [32, 72], [50, 75], [69, 72], [88, 74],
    [6, 91], [22, 91], [40, 91], [59, 91], [77, 91], [94, 91],
    [48, 15], [53, 88]

];

const lanternArea = document.getElementById("lanternArea");

const released = new Set();
const lanternElements = [];

let activeLantern = null;
let finalShown = false;


// CREATE THE 30 LANTERNS

messages.forEach((message, index) => {

    const lantern = document.createElement("button");

    lantern.className = "lantern";

    lantern.setAttribute(
        "aria-label",
        "Open lantern " + (index + 1)
    );

    lantern.style.left = positions[index][0] + "%";
    lantern.style.top = positions[index][1] + "%";

    lantern.style.setProperty(
        "--delay",
        (index % 7) * 0.35 + "s"
    );

    lantern.innerHTML = `
        <span class="lantern-top"></span>
        <span class="lantern-body"></span>
        <span class="lantern-flame"></span>
        <span class="lantern-bottom"></span>
        <span class="lantern-number">${String(index + 1).padStart(2, "0")}</span>
    `;

    lantern.addEventListener("click", () => {
        openMessage(index);
    });

    lanternArea.appendChild(lantern);

    lanternElements.push(lantern);

});


// OPEN MESSAGE

function openMessage(index) {

    if (released.has(index)) return;

    activeLantern = index;

    const message = messages[index];

    document.getElementById("messageNumber").textContent =
        "LANTERN NO. " + String(index + 1).padStart(2, "0");

    document.getElementById("messageTitle").textContent =
        message.title;

    document.getElementById("messageText").textContent =
        message.text;

    document.getElementById("messageModal").classList.add("show");

}


// CLOSE MESSAGE AND RELEASE LANTERN

function closeMessage() {

    document.getElementById("messageModal").classList.remove("show");

    if (activeLantern === null) return;

    const index = activeLantern;

    if (!released.has(index)) {

        released.add(index);

        const lantern = lanternElements[index];

        lantern.classList.add("discovered");

        updateProgress();

        createMeteor();

        if (released.size === 30) {

            document.getElementById("bottomNote").textContent =
                "Every lantern has found its way into the sky. ❤️";

            setTimeout(showFinal, 2700);

        }

    }

    activeLantern = null;

}


// CLOSE BY CLICKING OUTSIDE

function closeOutside(event) {

    if (event.target.id === "messageModal") {
        closeMessage();
    }

}


// ESCAPE KEY

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeMessage();
    }

});


// UPDATE PROGRESS

function updateProgress() {

    const count = released.size;

    document.getElementById("progressText").textContent =
        count + " OF 30 LANTERNS RELEASED";

    document.getElementById("progressFill").style.width =
        (count / 30 * 100) + "%";

}


// SHOOTING STAR EFFECT

function createMeteor() {

    const meteor = document.createElement("div");

    meteor.className = "meteor";

    meteor.style.left = Math.random() * 45 + "%";
    meteor.style.top = Math.random() * 35 + "%";

    document.body.appendChild(meteor);

    setTimeout(() => meteor.remove(), 1400);

}


// FINAL CELEBRATION

function showFinal() {

    if (finalShown) return;

    finalShown = true;

    document.getElementById("finalScreen").classList.add("show");

}

function closeFinal() {

    document.getElementById("finalScreen").classList.remove("show");

}


// RANDOM SHOOTING STARS

setInterval(createMeteor, 8000);