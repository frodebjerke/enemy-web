var React = require('react');

var TaskForm = React.createClass({

  getInitialState: function () {
    return {
      value: this.props.value || ''
    }
  },

  render: function () {
    return (
      <input
        onBlur={this._save}
        onChange={this._onChange}
        onKeyDown={this._onKeyDown}
        value={this.state.value}
        autoFocus={true}
        />
    );
  },

  _save: function () {
    this.props.onSave(this.state.value);
    this.setState({
      value: ''
    });
  },

  _onChange: function (event) {
    this.setState({
      value: event.target.value
    });
  },

  _onKeyDown: function (event) {
    if (event.keyCode === 13) {
      this._save();
    }
  }

});

module.exports = TaskForm;
