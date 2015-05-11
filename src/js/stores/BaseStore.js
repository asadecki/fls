const assign = require('object-assign');
const EventEmitter = require('events').EventEmitter;
const AppDispatcher = require('../dispatchers/AppDispatcher');

const CHANGE_EVENT = 'change';

var handlers = {};

module.exports = assign({}, EventEmitter.prototype, {

  addHandler: function (actionType, handler) {
    handlers[actionType] = handler;
  },

  dispatcherIndex: AppDispatcher.register(function (payload) {
    let action = payload.action;

    var handler = handlers[action.actionType];
    if (handler) {
      handler(action);
    }
    return true;
  }),

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  }
});
