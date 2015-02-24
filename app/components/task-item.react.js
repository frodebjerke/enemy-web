var React = require('react');

var TaskItem = React.createClasse({
  render: () => {
    var task = this.props.task;

    return (
      <div>{task.text}</div>
    );
  }
});
