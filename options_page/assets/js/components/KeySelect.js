var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KeySelect = function (_React$Component) {
    _inherits(KeySelect, _React$Component);

    function KeySelect(props) {
        _classCallCheck(this, KeySelect);

        return _possibleConstructorReturn(this, (KeySelect.__proto__ || Object.getPrototypeOf(KeySelect)).call(this, props));
    }

    _createClass(KeySelect, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "select",
                {
                    name: this.props.name,
                    value: this.props.value,
                    onChange: this.props.handleChange,
                    "data-string-to-array": true,
                    "data-delimiter": this.props.delimiter
                },
                React.createElement(
                    "option",
                    { value: "NumpadAdd|Equal" },
                    "Plus (+)"
                ),
                React.createElement(
                    "option",
                    { value: "NumpadSubtract|Minus" },
                    "Minus (-)"
                ),
                React.createElement(
                    "option",
                    { value: "NumpadMultiply|Digit8" },
                    "Multiply (*)"
                ),
                React.createElement(
                    "option",
                    { value: "KeyZ" },
                    "Z"
                ),
                React.createElement(
                    "option",
                    { value: "KeyX" },
                    "X"
                ),
                React.createElement(
                    "option",
                    { value: "KeyC" },
                    "C"
                ),
                React.createElement(
                    "option",
                    { value: "KeyV" },
                    "V"
                ),
                React.createElement(
                    "option",
                    { value: "Numpad0" },
                    "Numpad 0"
                ),
                React.createElement(
                    "option",
                    { value: "Numpad1" },
                    "Numpad 1"
                ),
                React.createElement(
                    "option",
                    { value: "Numpad2" },
                    "Numpad 2"
                ),
                React.createElement(
                    "option",
                    { value: "Numpad3" },
                    "Numpad 3"
                ),
                React.createElement(
                    "option",
                    { value: "Numpad4" },
                    "Numpad 4"
                ),
                React.createElement(
                    "option",
                    { value: "Numpad5" },
                    "Numpad 5"
                ),
                React.createElement(
                    "option",
                    { value: "Numpad6" },
                    "Numpad 6"
                ),
                React.createElement(
                    "option",
                    { value: "Numpad7" },
                    "Numpad 7"
                ),
                React.createElement(
                    "option",
                    { value: "Numpad8" },
                    "Numpad 8"
                ),
                React.createElement(
                    "option",
                    { value: "Numpad9" },
                    "Numpad 9"
                )
            );
        }
    }]);

    return KeySelect;
}(React.Component);