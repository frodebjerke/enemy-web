var React = require('react');
var TaskStore = require('../stores/task-store');
var TaskSection = require('./task-section.react');

function getTaskState() {
  return {
    allTasks: TaskStore.getAll()
  };
}

var EnemyApp = React.createClass({

  getInitialState: function () {
    return getTaskState();
  },

  componentDidMount: function () {
    TaskStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    TaskStore.removeChangeListener(this._onChange);
  },

  render: function () {
    return (
      <div>
        <TaskSection
          allTasks={this.state.allTasks}
        />
      </div>
    )
  },

  _onChange: function () {
    this.setState(getTaskState());
  }
})

module.exports = EnemyApp;
