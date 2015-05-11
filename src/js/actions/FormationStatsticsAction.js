var Constants = require('../constants/AppConstants');
var SeasonsConstant = require('../constants/SeasonsInfo');
var TeamConstant = require('../constants/TeamInfo');
var StatisticsHelper = require('../helpers/StatisticsHelper');
var AppDispatcher = require('../dispatchers/AppDispatcher');
var YqlHelper = require('../helpers/YqlHelper');

module.exports = {
  getFormations: function (params) {
    if (params.seasonName === 'forever') {
    } else {
      params.seasonNiceName = SeasonsConstant.Seasons[params.seasonName].SEASON_NICE_NAME;
      params.actionType = Constants.ActionTypes.GET_SEASON_FORMATION_STATISTICS;
      StatisticsHelper.doGetPlayers(params);
    }
  }
};
