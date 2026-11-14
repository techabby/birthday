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