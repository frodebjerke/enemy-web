var React = require('react');
var TaskActions = require('../actions/task-actions');
var TaskForm = require('./task-form.react');

var TaskSection = React.createClass({
  render: function () {

    var todos = this.props.allTasks.map((task) => {
      return <TaskItem key={task.id} task={task} />;
    });

    return (
      <section id="task">
        <TaskForm
          onSave={this._onSave}
          />
        <ul>{todos}</ul>
      </section>
    );
  },

  _onSave: function (text) {
    if (text.trim()) {
      TaskActions.create(text);
    }
  }
});

module.exports = TaskSection;
