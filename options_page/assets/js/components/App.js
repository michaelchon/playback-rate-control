var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            activeTab: "options"
        };

        _this.changeTab = _this.changeTab.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: "changeTab",
        value: function changeTab(e) {
            this.setState({ activeTab: e.target.dataset.tabValue });
        }
    }, {
        key: "getMainContent",
        value: function getMainContent() {
            var mainContent = void 0;

            var activeTab = this.state.activeTab;
            if (activeTab === "options") {
                mainContent = React.createElement(Options, null);
            } else if (activeTab === "about") {
                mainContent = React.createElement(About, null);
            }

            return mainContent;
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "section",
                { className: "section" },
                React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(Title, null),
                    React.createElement(Tabs, {
                        tabs: ["options", "about"],
                        activeTab: this.state.activeTab,
                        changeTab: this.changeTab
                    }),
                    this.getMainContent()
                )
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));