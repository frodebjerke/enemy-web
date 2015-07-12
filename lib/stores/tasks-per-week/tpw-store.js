var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var TpwState = require('./tpw-state');
var Dispatcher = require('../../dispatcher');
var CHANGE_EVENT = 'tpw-store-change';

var state = new TpwState();

var TpwStore = assign({}, EventEmitter.prototype, {

    getByMonth() {
        return state.getByMonth().toList().toJS();
    },

    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(callback);
    }

});

TpwStore.dispatchToken = Dispatcher.register(function (action) {

    switch(action.actionType) {

        case 'TPW_FETCH':
        state.startRetrieve();
        TpwStore.emitChange();
        break;

        case 'TPW_FETCH_SUCCESS':
        state.retrieve(action.data);
        TpwStore.emitChange();
        break;

        case 'TPW_FETCH_FAIL':
        state.failRetrieve(action.error);
        TpwStore.emitChange();
        break;

    }
});

module.exports = TpwStore;
