class About extends React.Component {
    render() {
        return (
            <div>
                <div className="mb-6">
                    <Description />
                </div>
                <div>
                    <AboutVersionLogs />
                </div>
            </div>
        );
    }
}
