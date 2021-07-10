class PlaybackRatePanel {
    static HTML = `
        <div class='extension-playback-rate-panel'>
            <div class='extension-playback-rate-panel__inner'>
                <div class='extension-playback-rate-panel__rate-value'>1.00</div>
            </div>
        </div>
    `;

    constructor(hideTimeout) {
        this.hideTimeout = hideTimeout;
        this.hideTimeoutID = null;

        document.addEventListener("fullscreenchange", () => {
            const $playbackPanel = document.querySelector(
                ".extension-playback-rate-panel"
            );

            if (document.fullscreenElement) {
                document.fullscreenElement.prepend($playbackPanel);
            } else {
                document.body.append($playbackPanel);
            }
        });

        this.create();
    }

    create() {
        document.body.insertAdjacentHTML("beforeend", PlaybackRatePanel.HTML);

        this.setHideTimeout();
    }

    show() {
        document.querySelector(".extension-playback-rate-panel").style.display =
            "";

        this.setHideTimeout();
    }

    setHideTimeout() {
        clearTimeout(this.hideTimeoutID);
        this.hideTimeoutID = window.setTimeout(this.hide, this.hideTimeout);
    }

    hide() {
        document.querySelector(".extension-playback-rate-panel").style.display =
            "none";
    }

    setRate(rate) {
        document.querySelector(
            ".extension-playback-rate-panel__rate-value"
        ).textContent = rate.toFixed(2);
    }
}
