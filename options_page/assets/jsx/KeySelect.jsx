class KeySelect extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <select
                name={this.props.name}
                value={this.props.value}
                onChange={this.props.handleChange}
                data-string-to-array={true}
                data-delimiter={this.props.delimiter}
            >
                <option value="NumpadAdd|Equal">Plus (+)</option>
                <option value="NumpadSubtract|Minus">Minus (-)</option>
                <option value="NumpadMultiply|Digit8">Multiply (*)</option>
                <option value="KeyZ">Z</option>
                <option value="KeyX">X</option>
                <option value="KeyC">C</option>
                <option value="KeyV">V</option>
                <option value="Numpad0">Numpad 0</option>
                <option value="Numpad1">Numpad 1</option>
                <option value="Numpad2">Numpad 2</option>
                <option value="Numpad3">Numpad 3</option>
                <option value="Numpad4">Numpad 4</option>
                <option value="Numpad5">Numpad 5</option>
                <option value="Numpad6">Numpad 6</option>
                <option value="Numpad7">Numpad 7</option>
                <option value="Numpad8">Numpad 8</option>
                <option value="Numpad9">Numpad 9</option>
            </select>
        );
    }
}
