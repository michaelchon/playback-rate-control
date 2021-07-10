var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Options = function (_React$Component) {
    _inherits(Options, _React$Component);

    function Options(props) {
        _classCallCheck(this, Options);

        var _this = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

        _this.keysDelimiter = "|";
        _this.websitesToIgnoreDelimiter = ",";

        _this.state = {
            areOptionsReceived: false
        };

        _this.getOptions = _this.getOptions.bind(_this);
        _this.convertStringToArray = _this.convertStringToArray.bind(_this);
        _this.convertStringToArray = _this.convertStringToArray.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleReset = _this.handleReset.bind(_this);

        _this.getOptions();
        return _this;
    }

    _createClass(Options, [{
        key: "convertArrayToString",
        value: function convertArrayToString(array, delimiter) {
            return array.join(delimiter);
        }
    }, {
        key: "convertStringToArray",
        value: function convertStringToArray(string, delimiter) {
            return string.split(delimiter);
        }
    }, {
        key: "convertNumberToString",
        value: function convertNumberToString(number) {
            return number.toString();
        }
    }, {
        key: "convertStringToNumber",
        value: function convertStringToNumber(string) {
            return parseFloat(string);
        }
    }, {
        key: "getOptions",
        value: function getOptions() {
            var _this2 = this;

            chrome.storage.sync.get(["options"], function (result) {
                var options = result.options;
                _this2.setState(Object.assign(options, {
                    areOptionsReceived: true
                }));
            });
        }
    }, {
        key: "handleChange",
        value: function handleChange(e) {
            var target = e.target;
            var name = target.name;
            var value = target.type === "checkbox" ? target.checked : target.value;

            if (target.dataset.stringToArray) {
                value = this.convertStringToArray(value, target.dataset.delimiter);
            } else if (target.dataset.stringToNumber) {
                value = this.convertStringToNumber(value);
            }

            this.setState(_defineProperty({}, name, value));
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit() {
            if (!safeConfirm("Do you want to save all changes?")) return;

            chrome.storage.sync.set({
                options: {
                    increaseRateKeys: this.state.increaseRateKeys,
                    decreaseRateKeys: this.state.decreaseRateKeys,
                    resetRateKeys: this.state.resetRateKeys,
                    isChangingRateByWheelEnabled: this.state.isChangingRateByWheelEnabled,
                    rateChangeStep: this.state.rateChangeStep,
                    panelHideTimeout: this.state.panelHideTimeout,
                    websitesToIgnore: this.state.websitesToIgnore
                }
            });
        }
    }, {
        key: "handleReset",
        value: function handleReset() {
            var _this3 = this;

            if (!safeConfirm("Do you want to reset options to default?")) return;

            chrome.runtime.sendMessage("reset options", function () {
                window.setTimeout(_this3.getOptions, 500);
            });
        }
    }, {
        key: "render",
        value: function render() {
            if (!this.state.areOptionsReceived) {
                return React.createElement(
                    "div",
                    null,
                    "Receiving options..."
                );
            }

            var keysDelimiter = this.keysDelimiter;

            var handleChange = this.handleChange;
            var convertArrayToString = this.convertArrayToString;
            var convertNumberToString = this.convertNumberToString;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "mb-6" },
                    React.createElement(
                        "div",
                        { className: "field" },
                        React.createElement(
                            "label",
                            { className: "label" },
                            "Increase Rate Key"
                        ),
                        React.createElement(
                            "div",
                            { className: "control" },
                            React.createElement(
                                "div",
                                { className: "select" },
                                React.createElement(KeySelect, {
                                    name: "increaseRateKeys",
                                    value: convertArrayToString(this.state.increaseRateKeys, keysDelimiter),
                                    handleChange: handleChange,
                                    delimiter: keysDelimiter
                                })
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "field" },
                        React.createElement(
                            "label",
                            { className: "label" },
                            "Decrease Rate Key"
                        ),
                        React.createElement(
                            "div",
                            { className: "control" },
                            React.createElement(
                                "div",
                                { className: "select" },
                                React.createElement(KeySelect, {
                                    name: "decreaseRateKeys",
                                    value: convertArrayToString(this.state.decreaseRateKeys, keysDelimiter),
                                    handleChange: handleChange,
                                    delimiter: keysDelimiter
                                })
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "field" },
                        React.createElement(
                            "label",
                            { className: "label" },
                            "Reset Rate Key"
                        ),
                        React.createElement(
                            "div",
                            { className: "control" },
                            React.createElement(
                                "div",
                                { className: "select" },
                                React.createElement(KeySelect, {
                                    name: "resetRateKeys",
                                    value: convertArrayToString(this.state.resetRateKeys, keysDelimiter),
                                    handleChange: handleChange,
                                    delimiter: keysDelimiter
                                })
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "field" },
                        React.createElement(
                            "label",
                            { className: "checkbox" },
                            React.createElement("input", {
                                className: "mr-1",
                                type: "checkbox",
                                name: "isChangingRateByWheelEnabled",
                                checked: this.state.isChangingRateByWheelEnabled,
                                onChange: handleChange
                            }),
                            "Change Rate By Wheel"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "mb-6" },
                    React.createElement(
                        "div",
                        { className: "field" },
                        React.createElement(
                            "label",
                            { className: "label" },
                            "Rate Change Step"
                        ),
                        React.createElement(
                            "div",
                            { className: "control" },
                            React.createElement("input", {
                                className: "input",
                                type: "number",
                                name: "rateChangeStep",
                                value: convertNumberToString(this.state.rateChangeStep),
                                onChange: handleChange,
                                "data-string-to-number": true
                            })
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "mb-6" },
                    React.createElement(
                        "div",
                        { className: "field" },
                        React.createElement(
                            "label",
                            { className: "label" },
                            "Panel Duration (ms)"
                        ),
                        React.createElement(
                            "div",
                            { className: "control" },
                            React.createElement("input", {
                                className: "input",
                                type: "number",
                                name: "panelHideTimeout",
                                value: convertNumberToString(this.state.panelHideTimeout),
                                onChange: handleChange,
                                "data-string-to-number": true
                            })
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "mb-6" },
                    React.createElement(
                        "div",
                        { className: "field" },
                        React.createElement(
                            "label",
                            { className: "label" },
                            "Websites to ignore"
                        ),
                        React.createElement(
                            "div",
                            { className: "control" },
                            React.createElement("input", {
                                className: "input",
                                type: "string",
                                name: "websitesToIgnore",
                                value: convertArrayToString(this.state.websitesToIgnore, this.websitesToIgnoreDelimiter),
                                onChange: handleChange,
                                "data-string-to-array": true,
                                "data-delimiter": this.websitesToIgnoreDelimiter
                            })
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "field is-grouped" },
                    React.createElement(
                        "div",
                        { className: "control" },
                        React.createElement(
                            "button",
                            {
                                className: "button is-link",
                                onClick: this.handleSubmit
                            },
                            "Save"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "control" },
                        React.createElement(
                            "button",
                            {
                                className: "button is-link is-light",
                                onClick: this.handleReset
                            },
                            "Reset"
                        )
                    )
                )
            );
        }
    }]);

    return Options;
}(React.Component);