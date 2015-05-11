var AppDispatcher = require('../dispatchers/AppDispatcher');
var Constants = require('../constants/AppConstants');

module.exports = {

  setMenuType: function (menuType) {

    var ctx = document.getElementById("myChart").getContext("2d");
    console.log(ctx);
    var myNewChart = new Chart(ctx).PolarArea(data);

    AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.CHOOSE_MENU_TYPE,
      menuType: menuType
    });
  }
};
