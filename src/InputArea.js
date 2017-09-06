import React from 'react';
import PropTypes from 'prop-types';

class InputArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (this.state.text && this.state.text !== '') {
      this.props.onSubmit(this.state.text);
      this.setState({ text: '' });
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div>
        <input type="text" name="text" value={this.state.text} onChange={this.handleChange} />
        <button onClick={this.onClick}>Add</button>
      </div>
    );
  }
}

InputArea.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default InputArea;
