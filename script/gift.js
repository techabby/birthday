
const surprises = [
    {
        emoji: "📸",
        title: "The Memories",
        text: "This is where our favourite pictures and memories will go. Every little moment deserves a place here. ♡"
    },
    {
        emoji: "💌",
        title: "A Little Letter",
        text: "There are some things that are easier to write than say. This space is for a personal letter, written especially for you. 💗"
    },
    {
        emoji: "⭐",
        title: "Reasons I Love You",
        message: "A little collection of all the reasons you make my world brighter. ❤️"
    },
    {
        emoji: "🎁",
        title: "One More Thing",
        text: "You thought that was everything? Not quite. The biggest surprise is still waiting. Happy Birthday!! ❤️"
    }
];

function openGift(index) {

    const gift = surprises[index];

    document.getElementById("modalEmoji").textContent = gift.emoji;
    document.getElementById("modalTitle").textContent = gift.title;
    document.getElementById("modalText").textContent = gift.text;

    document.getElementById("giftModal").classList.add("show");
}

function closeGift() {
    document.getElementById("giftModal").classList.remove("show");
}

function closeOutside(event) {
    if (event.target.id === "giftModal") {
        closeGift();
    }
}

// ==============================================================
//                          Reasons
// ==============================================================

// Background stars
const starsContainer = document.getElementById("stars");

for (let i = 0; i < 65; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";
    starsContainer.appendChild(star);
}

// Edit these reasons to make them personal

const reasons = [
    { icon: "😊", title: "Your Smile", text: "Your smile can make even my worst days feel better." },
    { icon: "💗", title: "Your Heart", text: "You have a beautiful heart, and I love that about you." },
    { icon: "😂", title: "Your Laugh", text: "Your laugh is one of my favourite sounds." },
    { icon: "🌷", title: "Your Kindness", text: "You have a way of making people feel cared for." },
    { icon: "✨", title: "Your Personality", text: "There is something about you that nobody else can replace." },
    { icon: "🫶", title: "Being Yourself", text: "I love that you are simply and completely yourself." },
    { icon: "🌙", title: "Your Presence", text: "Everything feels a little better when you're around." },
    { icon: "🥹", title: "Your Soft Side", text: "Your gentle side makes me fall for you even more." },
    { icon: "💫", title: "Your Energy", text: "You bring a special kind of happiness wherever you go." },
    { icon: "🌻", title: "Your Strength", text: "I admire how you keep going, even when things get difficult." },

    { icon: "❤️", title: "Our Memories", text: "Every moment with you becomes something worth remembering." },
    { icon: "♾️", title: "Simply You", text: "I don't need a reason. I love you because you're you." },
    { icon: "🌸", title: "Your Beauty", text: "You are beautiful in ways that go far beyond appearance." },
    { icon: "🥰", title: "Your Cuteness", text: "Sometimes you're so cute that I genuinely have no words." },
    { icon: "☀️", title: "Your Sunshine", text: "You make ordinary days feel a little brighter." },
    { icon: "🦋", title: "Your Uniqueness", text: "There is nobody quite like you in this world." },
    { icon: "💌", title: "Your Messages", text: "Even a simple message from you can make me smile." },
    { icon: "🌍", title: "Your World", text: "I love getting to know all the little things that make you who you are." },
    { icon: "🎀", title: "Your Little Habits", text: "Even your smallest habits have become things I adore." },
    { icon: "🥺", title: "Your Expressions", text: "Your facial expressions sometimes say more than words ever could." },

    { icon: "🌹", title: "Your Sweetness", text: "You have a sweetness that makes you unforgettable." },
    { icon: "💞", title: "Your Care", text: "The way you care about the people you love means so much." },
    { icon: "⭐", title: "Your Spark", text: "You have something special that makes you stand out." },
    { icon: "☁️", title: "Your Comfort", text: "Talking to you can make everything feel less heavy." },
    { icon: "🎶", title: "Your Voice", text: "I could listen to you talk about random things for hours." },
    { icon: "🧸", title: "Your Innocence", text: "There is something so precious about your little innocent moments." },
    { icon: "🌈", title: "Your Happiness", text: "Seeing you happy is one of the nicest feelings." },
    { icon: "💎", title: "Your Value", text: "You are priceless, and I hope you always remember that." },
    { icon: "🌺", title: "Your Grace", text: "There is a beautiful grace in the way you carry yourself." },
    { icon: "🫧", title: "Your Randomness", text: "Your random thoughts and unexpected moments make me smile." },

    { icon: "💕", title: "Your Affection", text: "The little ways you show affection mean more than you know." },
    { icon: "🌙", title: "Late Conversations", text: "I love those conversations that make us forget about time." },
    { icon: "📸", title: "Your Pictures", text: "Every picture of you feels like a little memory worth keeping." },
    { icon: "🍓", title: "Your Favourite Things", text: "I love learning about the things that make you happy." },
    { icon: "🕊️", title: "Your Peace", text: "You bring a kind of peace that is difficult to explain." },
    { icon: "🎨", title: "Your Creativity", text: "I love the way your mind sees things differently." },
    { icon: "🌼", title: "Your Optimism", text: "Your hopeful side reminds me that beautiful things are possible." },
    { icon: "💐", title: "Your Thoughtfulness", text: "You remember little things, and those little things matter." },
    { icon: "🪄", title: "Your Magic", text: "You make the simplest moments feel a little magical." },
    { icon: "🥳", title: "Your Excitement", text: "Your excitement about things you love is contagious." },

    { icon: "💖", title: "Your Love", text: "The love and warmth you give make me feel incredibly lucky." },
    { icon: "🌷", title: "Your Patience", text: "I appreciate the patience you show, even in difficult moments." },
    { icon: "🧡", title: "Your Honesty", text: "I value how you can be genuine and honest with me." },
    { icon: "🌟", title: "Your Dreams", text: "I love hearing about the things you hope to achieve." },
    { icon: "🐣", title: "Your Playfulness", text: "You make life feel less serious and much more fun." },
    { icon: "🍯", title: "Your Sweet Words", text: "Sometimes the smallest things you say stay with me all day." },
    { icon: "🌻", title: "Your Courage", text: "You are stronger than you sometimes give yourself credit for." },
    { icon: "🎈", title: "Your Fun Side", text: "You know how to turn an ordinary moment into a fun one." },
    { icon: "🪷", title: "Your Calmness", text: "I love the calm and gentle moments we share." },
    { icon: "💘", title: "Your Effect on Me", text: "You can make me smile without even trying." },

    { icon: "🫠", title: "Your Silly Side", text: "Your silly moments are some of the most lovable things about you." },
    { icon: "🍀", title: "My Good Luck", text: "Meeting you feels like one of life's sweetest surprises." },
    { icon: "💝", title: "Your Generosity", text: "I admire how you give your time and care to others." },
    { icon: "🦢", title: "Your Elegance", text: "You have a beauty and elegance that is completely your own." },
    { icon: "🌌", title: "Your Imagination", text: "I love the little worlds and ideas inside your mind." },
    { icon: "🐻", title: "Your Warmth", text: "You have a way of making people feel welcome." },
    { icon: "🎧", title: "Your Music Taste", text: "I love discovering the songs and music that remind you of things." },
    { icon: "🪻", title: "Your Details", text: "I notice the little things about you, and I love them." },
    { icon: "💓", title: "Your Heartbeat", text: "Just knowing you are part of my life makes it feel more special." },
    { icon: "🌠", title: "Your Possibilities", text: "There are so many wonderful things waiting for you, and I believe in you." },

    { icon: "🥹", title: "Your Vulnerability", text: "I appreciate the moments when you let me see the real you." },
    { icon: "🧁", title: "Your Sweet Moments", text: "You have a talent for making little moments unforgettable." },
    { icon: "💬", title: "Our Conversations", text: "I love how we can talk about almost anything." },
    { icon: "🪐", title: "Your Mind", text: "Your thoughts, opinions, and ideas make you fascinating." },
    { icon: "🌹", title: "Your Confidence", text: "I love seeing you believe in yourself." },
    { icon: "🫶", title: "Your Support", text: "The support you give means more to me than I can explain." },
    { icon: "☕", title: "Ordinary Days", text: "You make even the most ordinary days worth remembering." },
    { icon: "🧚", title: "Your Charm", text: "You have a charm that is impossible to copy." },
    { icon: "💟", title: "Your Forgiveness", text: "I appreciate your understanding when things aren't perfect." },
    { icon: "🌈", title: "Your Colours", text: "You bring so many different kinds of happiness into my life." },

    { icon: "📖", title: "Your Stories", text: "I could listen to your stories again and again." },
    { icon: "🍒", title: "Your Preferences", text: "I love knowing your favourite foods, places, colours, and little things." },
    { icon: "🌙", title: "Thinking of You", text: "You somehow find your way into my thoughts throughout the day." },
    { icon: "💗", title: "Your Imperfections", text: "You don't have to be perfect to be someone extraordinary." },
    { icon: "🌺", title: "Your Growth", text: "I love watching you learn, grow, and become more yourself." },
    { icon: "🧩", title: "Your Little Quirks", text: "The things that make you different are the things I adore." },
    { icon: "🕯️", title: "Your Light", text: "Even when things feel dark, you have a beautiful light inside you." },
    { icon: "🎀", title: "Your Style", text: "You have your own way of making everything look like you." },
    { icon: "💌", title: "Your Reminders", text: "The little reminders you give me show how much you care." },
    { icon: "🦋", title: "Your Changes", text: "I love every version of you, including the person you're becoming." },

    { icon: "🌻", title: "Your Determination", text: "When you set your mind to something, I admire your effort." },
    { icon: "💞", title: "Your Affectionate Nature", text: "Your loving nature makes the people around you feel special." },
    { icon: "🥰", title: "Your Blush", text: "Even the thought of you getting shy makes me smile." },
    { icon: "🌤️", title: "Your Good Days", text: "Your happiness makes my day better too." },
    { icon: "🌧️", title: "Your Hard Days", text: "You deserve love and care even on the days when you're not okay." },
    { icon: "🎁", title: "Your Surprises", text: "You make unexpected little moments feel like gifts." },
    { icon: "🫂", title: "Your Hugs", text: "There is something special about feeling close to you." },
    { icon: "💫", title: "Your Dreams for Us", text: "I love imagining all the beautiful memories still ahead of us." },
    { icon: "🌍", title: "Your Perspective", text: "You help me see little things in a different way." },
    { icon: "❤️", title: "Your Existence", text: "The world is a better place simply because you are in it." },

    { icon: "🌷", title: "Your Gentleness", text: "I love how gentle you can be with the people you care about." },
    { icon: "😚", title: "Your Little Teasing", text: "Even when you tease me, somehow I end up smiling." },
    { icon: "💝", title: "Your Generous Spirit", text: "You give so much of yourself, and I hope you receive that same love." },
    { icon: "🌟", title: "Your Potential", text: "I see so many amazing things in you, even when you don't." },
    { icon: "🪄", title: "Your Surprises", text: "You always find ways to make life a little less predictable." },
    { icon: "💓", title: "The Way You Make Me Feel", text: "You make me feel things that are difficult to put into words." },
    { icon: "🧸", title: "Your Comforting Nature", text: "Sometimes just knowing you're there is enough." },
    { icon: "🌸", title: "Your Little Details", text: "There are a hundred tiny things about you that I could never list completely." },
    { icon: "♾️", title: "Every Version of You", text: "I love you on your best days, your messy days, and every day in between." },
    { icon: "❤️", title: "Because It's You", text: "After all these reasons, the simplest truth is that my heart chooses you." }
];


const grid = document.getElementById("reasonGrid");
const progress = document.getElementById("progress");

let discovered = 0;

reasons.forEach((reason, index) => {

    const card = document.createElement("div");
    card.className = "reason-card";

    card.innerHTML = `
                <div class="card-inner">

                    <div class="card-front">
                        <div class="number">
                            REASON NO. ${String(index + 1).padStart(2, "0")}
                        </div>

                        <div class="card-icon">${reason.icon}</div>

                        <div class="card-title">${reason.title}</div>

                        <div class="tap">TAP TO REVEAL</div>
                    </div>

                    <div class="card-back">
                        <div class="back-heart">♡</div>
                        <p class="reason-text">${reason.text}</p>
                    </div>

                </div>
            `;

    card.addEventListener("click", () => {

        const isOpening = !card.classList.contains("open");

        card.classList.toggle("open");

        if (isOpening) {
            discovered++;
        } else {
            discovered--;
        }

        progress.textContent =
            `${discovered} of ${reasons.length} little reasons discovered ❤️`;

    });

    grid.appendChild(card);
});

// ==============================================================
//                          Memories
// ==============================================================

const memories = [

    {
        title: "That Beautiful Day",
        date: "ADD DATE HERE",
        day: "ADD DAY HERE",
        note: "I don't know if you remember this moment the same way I do, but I remember how happy I felt. It wasn't even about doing something special. Just being there made an ordinary day feel different. ♡"
    },

    {
        title: "A Moment of Happiness",
        date: "ADD DATE HERE",
        day: "ADD DAY HERE",
        note: "Sometimes the smallest moments become the biggest memories. This is one of those moments I would love to experience all over again. ❤️"
    },

    {
        title: "One of My Favorites",
        date: "ADD DATE HERE",
        day: "ADD DAY HERE",
        note: "Looking at this picture reminds me how lucky I am to have moments like these. I wish I could pause time sometimes. ♡"
    },

    {
        title: "The Little Things",
        date: "ADD DATE HERE",
        day: "ADD DAY HERE",
        note: "It is funny how a simple moment can stay in your heart for so long. This is one of those memories that always brings a smile to my face."
    },

    {
        title: "A Memory Worth Keeping",
        date: "ADD DATE HERE",
        day: "ADD DAY HERE",
        note: "If I could keep one feeling from this day, it would be the happiness I felt. Some memories really do deserve their own little place in our hearts. 💗"
    },

    {
        title: "To Many More",
        date: "ADD DATE HERE",
        day: "ADD DAY HERE",
        note: "This is just one little chapter. There are so many more moments waiting for us, and I cannot wait to make them with you. ♡"
    }

];


function openMemory(index) {

    const card = document.querySelectorAll(".polaroid")[index];
    const image = card.querySelector("img");
    const memory = memories[index];

    document.getElementById("memoryImage").src = image.src;
    document.getElementById("memoryTitle").textContent = memory.title;
    document.getElementById("memoryDate").textContent = memory.date;
    document.getElementById("memoryDay").textContent = memory.day;
    document.getElementById("memoryNote").textContent = memory.note;

    document.getElementById("memoryNumber").textContent =
        "MEMORY NO. 0" + (index + 1);

    document.getElementById("memoryViewer").classList.add("show");

    document.body.style.overflow = "hidden";
}


function closeMemory(event) {

    if (
        event.target.id === "memoryViewer" ||
        event.target.classList.contains("memory-close")
    ) {
        document.getElementById("memoryViewer").classList.remove("show");
        document.body.style.overflow = "";
    }

}


document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        document.getElementById("memoryViewer").classList.remove("show");
        document.body.style.overflow = "";
    }

});

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