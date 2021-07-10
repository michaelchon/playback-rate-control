class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: "options",
        };

        this.changeTab = this.changeTab.bind(this);
    }

    changeTab(e) {
        this.setState({ activeTab: e.target.dataset.tabValue });
    }

    getMainContent() {
        let mainContent;

        const activeTab = this.state.activeTab;
        if (activeTab === "options") {
            mainContent = <Options />;
        } else if (activeTab === "about") {
            mainContent = <About />;
        }

        return mainContent;
    }

    render() {
        return (
            <section className="section">
                <div className="container">
                    <Title />
                    <Tabs
                        tabs={["options", "about"]}
                        activeTab={this.state.activeTab}
                        changeTab={this.changeTab}
                    />
                    {this.getMainContent()}
                </div>
            </section>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
