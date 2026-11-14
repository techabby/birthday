
(function () {

    "use strict";

    const STORAGE_KEY = "birthdayGiftProgress_v1";

    // These filenames must match your actual HTML files.
    const giftPages = {
        "memories.html": "memories",
        "letters.html": "letter",
        "reasons.html": "reasons",
        "book.html": "book"
    };

    // Read saved progress.
    function readProgress() {

        try {

            const saved = JSON.parse(
                localStorage.getItem(STORAGE_KEY) || "{}"
            );

            return {
                memories: saved.memories === true,
                letter: saved.letter === true,
                reasons: saved.reasons === true,
                book: saved.book === true
            };

        } catch (error) {

            return {
                memories: false,
                letter: false,
                reasons: false,
                book: false
            };

        }

    }

    // Save progress.
    function saveProgress(progress) {

        try {

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(progress)
            );

        } catch (error) {

            console.warn("Could not save gift progress:", error);

        }

    }

    const currentPage = decodeURIComponent(
        window.location.pathname.split("/").pop() || ""
    ).toLowerCase();

    const progress = readProgress();

    // Mark a gift as explored when its page opens.
    if (giftPages[currentPage]) {

        progress[giftPages[currentPage]] = true;

        saveProgress(progress);

    }

    // Count completed gifts.
    const completedCount = Object.values(progress)
        .filter(Boolean).length;

    const allComplete = completedCount === 4;

    // Unlock the final section on gifts.html.
    const unlock = document.getElementById("finalUnlock");

    if (unlock) {

        const progressText = document.getElementById(
            "giftProgressText"
        );

        if (progressText) {

            progressText.textContent =
                completedCount + " OF 4 GIFTS EXPLORED";

        }

        if (allComplete) {

            unlock.classList.add("show");

        }

    }

    // Keep the final page locked until all four gifts are explored.
    if (currentPage === "final-surprise.html" && !allComplete) {

        const locked = document.getElementById("lockedMessage");
        const content = document.getElementById("finalContent");

        if (locked) locked.hidden = false;
        if (content) content.hidden = true;

    }

})();
