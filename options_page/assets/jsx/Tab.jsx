class Tab extends React.Component {
    constructor(props) {
        super(props);
    }

    isActive() {
        return this.props.activeTab === this.props.tabValue;
    }

    render() {
        const tabValue = this.props.tabValue;

        return (
            <li
                className={this.isActive() ? "is-active" : undefined}
                onClick={this.props.changeTab}
            >
                <a data-tab-value={tabValue}>{tabValue.capitalize()}</a>
            </li>
        );
    }
}
