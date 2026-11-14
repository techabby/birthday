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

