var React = require('react');

var TextInput = React.createClass({

  getInitialState: function () {
    return {
      value: this.props.value || ''
    }
  },

  render: function () {
    return (
      <input
        onChange={this._onChange}
        value={this.state.value}
        />
    );
  },

  _onChange: function (event) {
    var value = event.target.value;
    this.setState({
      value: value
    });
    this.props.onChange(value);
  }

});

module.exports = TextInput;
