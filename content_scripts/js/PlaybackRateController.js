class PlaybackRateController {
    constructor(options) {
        this.options = options;
        this.playbackRatePanel = null;

        this.listenKeys();
        this.listenWheel();
    }

    listenKeys() {
        document.addEventListener("keydown", (e) => {
            if (isEnteringText()) {
                return;
            }

            const keyCode = e.code;
            const {
                increaseRateKeys,
                decreaseRateKeys,
                resetRateKeys,
            } = this.options;

            if (increaseRateKeys.includes(keyCode)) {
                this.increaseVideoRate();
            } else if (decreaseRateKeys.includes(keyCode)) {
                this.decreaseVideoRate();
            } else if (resetRateKeys.includes(keyCode)) {
                this.resetVideoRate();
            }
        });
    }

    listenWheel() {
        const { isChangingRateByWheelEnabled } = this.options;
        if (!isChangingRateByWheelEnabled) {
            return;
        }

        document.addEventListener("wheel", (e) => {
            if (e.shiftKey) {
                if (e.deltaY < 0) {
                    this.increaseVideoRate();
                } else {
                    this.decreaseVideoRate();
                }
            }
        });
    }

    increaseVideoRate() {
        const { rateChangeStep } = this.options;

        const $videoList = getAllVideos();
        for (const $video of $videoList) {
            if ($video.playbackRate + rateChangeStep <= 16) {
                $video.playbackRate += rateChangeStep;

                this.activatePlaybackRatePanel($video.playbackRate);
            }
        }
    }

    decreaseVideoRate() {
        const { rateChangeStep } = this.options;

        const $videoList = getAllVideos();
        for (const $video of $videoList) {
            if ($video.playbackRate - rateChangeStep > 0) {
                $video.playbackRate -= rateChangeStep;

                this.activatePlaybackRatePanel($video.playbackRate);
            }
        }
    }

    resetVideoRate() {
        const $videoList = getAllVideos();
        for (const $video of $videoList) {
            $video.playbackRate = 1;

            this.activatePlaybackRatePanel($video.playbackRate);
        }
    }

    activatePlaybackRatePanel(rate) {
        if (this.playbackRatePanel) {
            this.playbackRatePanel.show();
        } else {
            const { panelHideTimeout } = this.options;
            this.playbackRatePanel = new PlaybackRatePanel(panelHideTimeout);
        }

        this.playbackRatePanel.setRate(rate);
    }
}
