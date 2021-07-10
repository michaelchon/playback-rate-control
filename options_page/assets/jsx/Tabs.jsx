class Tabs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const tabs = this.props.tabs.map((tabValue, index) => (
            <Tab
                tabValue={tabValue}
                activeTab={this.props.activeTab}
                changeTab={this.props.changeTab}
                key={index}
            />
        ));

        return (
            <div className="tabs">
                <ul>{tabs}</ul>
            </div>
        );
    }
}
