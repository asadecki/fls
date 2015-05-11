const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const BaseStore = require('./BaseStore');
const assign = require('object-assign');

let _data = {};

let MenuStore = assign({}, BaseStore, {

  getData() {
    return {
      menuType: _data
    };
  },

  dispatcherIndex: AppDispatcher.register(function (payload) {
    let action = payload.action;

    if (action.type === Constants.ActionTypes.CHOOSE_MENU_TYPE) {
      _data = action.menuType;
      MenuStore.emitChange();
    }
  })
});


module.exports = MenuStore;
