var AppDispatcher = require('../dispatchers/AppDispatcher');
var Constants = require('../constants/AppConstants');

module.exports = {

  setMenuType: function (menuType) {

    AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.CHOOSE_MENU_TYPE,
      menuType: menuType
    });
  }
};
