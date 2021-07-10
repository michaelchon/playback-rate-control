class Options extends React.Component {
    constructor(props) {
        super(props);

        this.keysDelimiter = "|";
        this.websitesToIgnoreDelimiter = ",";

        this.state = {
            areOptionsReceived: false,
        };

        this.getOptions = this.getOptions.bind(this);
        this.convertStringToArray = this.convertStringToArray.bind(this);
        this.convertStringToArray = this.convertStringToArray.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.getOptions();
    }

    convertArrayToString(array, delimiter) {
        return array.join(delimiter);
    }

    convertStringToArray(string, delimiter) {
        return string.split(delimiter);
    }

    convertNumberToString(number) {
        return number.toString();
    }

    convertStringToNumber(string) {
        return parseFloat(string);
    }

    getOptions() {
        chrome.storage.sync.get(["options"], (result) => {
            const options = result.options;
            this.setState(
                Object.assign(options, {
                    areOptionsReceived: true,
                })
            );
        });
    }

    handleChange(e) {
        const target = e.target;
        const name = target.name;
        let value = target.type === "checkbox" ? target.checked : target.value;

        if (target.dataset.stringToArray) {
            value = this.convertStringToArray(value, target.dataset.delimiter);
        } else if (target.dataset.stringToNumber) {
            value = this.convertStringToNumber(value);
        }

        this.setState({
            [name]: value,
        });
    }

    handleSubmit() {
        if (!safeConfirm("Do you want to save all changes?")) return;

        chrome.storage.sync.set({
            options: {
                increaseRateKeys: this.state.increaseRateKeys,
                decreaseRateKeys: this.state.decreaseRateKeys,
                resetRateKeys: this.state.resetRateKeys,
                isChangingRateByWheelEnabled: this.state
                    .isChangingRateByWheelEnabled,
                rateChangeStep: this.state.rateChangeStep,
                panelHideTimeout: this.state.panelHideTimeout,
                websitesToIgnore: this.state.websitesToIgnore,
            },
        });
    }

    handleReset() {
        if (!safeConfirm("Do you want to reset options to default?")) return;

        chrome.runtime.sendMessage("reset options", () => {
            window.setTimeout(this.getOptions, 500);
        });
    }

    render() {
        if (!this.state.areOptionsReceived) {
            return <div>Receiving options...</div>;
        }

        const keysDelimiter = this.keysDelimiter;

        const handleChange = this.handleChange;
        const convertArrayToString = this.convertArrayToString;
        const convertNumberToString = this.convertNumberToString;

        return (
            <div>
                <div className="mb-6">
                    <div className="field">
                        <label className="label">Increase Rate Key</label>
                        <div className="control">
                            <div className="select">
                                <KeySelect
                                    name="increaseRateKeys"
                                    value={convertArrayToString(
                                        this.state.increaseRateKeys,
                                        keysDelimiter
                                    )}
                                    handleChange={handleChange}
                                    delimiter={keysDelimiter}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Decrease Rate Key</label>
                        <div className="control">
                            <div className="select">
                                <KeySelect
                                    name="decreaseRateKeys"
                                    value={convertArrayToString(
                                        this.state.decreaseRateKeys,
                                        keysDelimiter
                                    )}
                                    handleChange={handleChange}
                                    delimiter={keysDelimiter}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Reset Rate Key</label>
                        <div className="control">
                            <div className="select">
                                <KeySelect
                                    name="resetRateKeys"
                                    value={convertArrayToString(
                                        this.state.resetRateKeys,
                                        keysDelimiter
                                    )}
                                    handleChange={handleChange}
                                    delimiter={keysDelimiter}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="checkbox">
                            <input
                                className="mr-1"
                                type="checkbox"
                                name="isChangingRateByWheelEnabled"
                                checked={
                                    this.state.isChangingRateByWheelEnabled
                                }
                                onChange={handleChange}
                            />
                            Change Rate By Wheel
                        </label>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="field">
                        <label className="label">Rate Change Step</label>
                        <div className="control">
                            <input
                                className="input"
                                type="number"
                                name="rateChangeStep"
                                value={convertNumberToString(
                                    this.state.rateChangeStep
                                )}
                                onChange={handleChange}
                                data-string-to-number={true}
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="field">
                        <label className="label">Panel Duration (ms)</label>
                        <div className="control">
                            <input
                                className="input"
                                type="number"
                                name="panelHideTimeout"
                                value={convertNumberToString(
                                    this.state.panelHideTimeout
                                )}
                                onChange={handleChange}
                                data-string-to-number={true}
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="field">
                        <label className="label">Websites to ignore</label>
                        <div className="control">
                            <input
                                className="input"
                                type="string"
                                name="websitesToIgnore"
                                value={convertArrayToString(
                                    this.state.websitesToIgnore,
                                    this.websitesToIgnoreDelimiter
                                )}
                                onChange={handleChange}
                                data-string-to-array={true}
                                data-delimiter={this.websitesToIgnoreDelimiter}
                            />
                        </div>
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <button
                            className="button is-link"
                            onClick={this.handleSubmit}
                        >
                            Save
                        </button>
                    </div>
                    <div className="control">
                        <button
                            className="button is-link is-light"
                            onClick={this.handleReset}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
