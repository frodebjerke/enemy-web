var React = require('react');
var TextInput = require('./text-input.react');
var _ = require('lodash');

var TaskForm = React.createClass({

  getInitialState: function () {
    return {
      title: this.props.title || ''
    }
  },

  render: function () {
    return (
      <TextInput
        value={this.state.title}
        onChange={this._onChange("title")}
         />
    );
  },

  _onChange: _.curry(function (key, value) {
    console.log("_onChange", key, value);
  })
});

module.exports = TaskForm;
