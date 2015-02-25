var React = require('react');

var TaskItem = React.createClass({
  render: function (){
    var task = this.props.task;
    console.log(task);

    return (
      <div>{task.text}</div>
    );
  }
});

module.exports = TaskItem;
