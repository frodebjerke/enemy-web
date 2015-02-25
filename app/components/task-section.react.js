var React = require('react');
var TaskActions = require('../actions/task-actions');
var TaskForm = require('./task-form.react');
var TaskItem = require('./task-item.react');
var _ = require('lodash');

var TaskSection = React.createClass({
  render: function () {
    var todos = _.map(this.props.allTasks, function (task) {
      return <li><TaskItem key={task.id} task={task} /></li>;
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
