const getAllVideos = () => {
    return document.querySelectorAll("video");
};

const isEnteringText = () => {
    const $inputList = document.querySelectorAll(
        'input, textarea, [contenteditable="true"]'
    );

    for (const $input of $inputList) {
        if (document.activeElement === $input) {
            return true;
        }
    }

    return false;
};
