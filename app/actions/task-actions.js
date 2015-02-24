var AppDispatcher = require('../dispatcher/app-dispatcher');
var TaskConstants = require('../constants/task-constants');

var TaskActions = {
  create: function (text) {
    AppDispatcher.dispatch({
      actionType: TaskConstants.TASK_CREATE,
      text: text
    });
  }
};

module.exports = TaskActions;
