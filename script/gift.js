
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




