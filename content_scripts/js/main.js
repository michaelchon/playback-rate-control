chrome.storage.sync.get(["options"], (result) => {
    const options = result.options;

    const { websitesToIgnore } = options;
    if (websitesToIgnore.includes(window.location.origin + "/")) return;

    new PlaybackRateController(options);
    new PlaybackSkip();
});
