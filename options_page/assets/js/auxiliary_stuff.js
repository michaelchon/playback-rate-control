String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

const safeConfirm = (msg) => {
    const openTime = new Date();
    const result = window.confirm(msg);
    const closeTime = new Date();

    if (closeTime - openTime < 10) {
        return true;
    } else {
        return result;
    }
};
