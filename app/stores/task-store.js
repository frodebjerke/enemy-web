var AppDispatcher = require('../dispatcher/app-dispatcher');
var EventEmitter = require('events').EventEmitter;
var TaskConstants = require('../constants/task-constants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _tasks = {};
var ids = 1;

function create(text) {
  _tasks[ids] = {
    id: ids++,
    text: text,
    created: new Date(),
    updated: new Date(),
    complete: false
  }
}

var TaskStore = assign({}, EventEmitter.prototype, {
  getAll:  function (){
    return _tasks;
  },
  emitChange: function (){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function (action) {
  var text;

  switch(action.actionType) {
    case TaskConstants.TASK_CREATE:
      text = action.text.trim();
      if (text !== '') {
        create(text);
      }
      TaskStore.emitChange();
      break;

    default:
  }
})

module.exports = TaskStore;
