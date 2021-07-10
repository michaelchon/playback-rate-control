const defaultOptions = {
    increaseRateKeys: ["NumpadAdd", "Equal"],
    decreaseRateKeys: ["NumpadSubtract", "Minus"],
    resetRateKeys: ["NumpadMultiply", "Digit8"],
    isChangingRateByWheelEnabled: true,
    rateChangeStep: 0.25,
    panelHideTimeout: 500,
    websitesToIgnore: [],
};

const setDefaultOptions = () => {
    chrome.storage.sync.set({ options: defaultOptions });
};

chrome.runtime.onInstalled.addListener(({ reason }) => {
    if (reason === "install") {
        setDefaultOptions();
    }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === "reset options") {
        setDefaultOptions();
        sendResponse();
    }
});
