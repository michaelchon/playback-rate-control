var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Description = function (_React$Component) {
    _inherits(Description, _React$Component);

    function Description() {
        _classCallCheck(this, Description);

        return _possibleConstructorReturn(this, (Description.__proto__ || Object.getPrototypeOf(Description)).apply(this, arguments));
    }

    _createClass(Description, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "content" },
                React.createElement(
                    "h2",
                    null,
                    "Description"
                ),
                "Control playback rate of HTML videos by pressing hot keys."
            );
        }
    }]);

    return Description;
}(React.Component);