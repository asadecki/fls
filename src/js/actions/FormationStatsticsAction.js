var Constants = require('../constants/AppConstants');
var SeasonsConstant = require('../constants/SeasonsInfo');
var TeamConstant = require('../constants/TeamInfo');
var StatisticsHelper = require('../helpers/StatisticsHelper');
var AppDispatcher = require('../dispatchers/AppDispatcher');
var YqlHelper = require('../helpers/YqlHelper');

module.exports = {
  getFormations: function (params) {
    console.log('FormationStatisticAction#getFormations');

    var params = {
      seasonName: "seasonSpring2015",
      actionType: Constants.ActionTypes.GET_SEASON_FORMATION_STATISTICS
    };

    StatisticsHelper.doGetPlayers(params);
  }
};
