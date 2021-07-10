class PlaybackSkip {
    constructor() {
        document.addEventListener("keydown", (e) => {
            if (e.code === "ArrowLeft") {
                for (const $video of document.querySelectorAll("video")) {
                    $video.currentTime = $video.currentTime - 5;
                    console.log("time changed");
                }
            } else if (e.code === "ArrowRight") {
                for (const $video of document.querySelectorAll("video")) {
                    $video.currentTime = $video.currentTime + 5;
                    console.log("time changed");
                }
            }
        });
    }
}
