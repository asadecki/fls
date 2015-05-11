var Constants = require('../constants/AppConstants');
var SeasonsConstant = require('../constants/SeasonsInfo');
var StatisticsHelper = require('../helpers/StatisticsHelper');
var TokenHelper = require('../helpers/TokenHelper');

module.exports = {

  getPlayers: function (params) {
    if (params.seasonName === 'forever') {
      params.token = TokenHelper.token();
      Object.keys(SeasonsConstant.Seasons).forEach(function (seasonName) {
        params.actionType = Constants.ActionTypes.GET_FOREVER_PLAYERS_STATISTICS;
        params.seasonName = seasonName;
        StatisticsHelper.doGetPlayers(params);
      }, this);
    } else {
      params.seasonNiceName = SeasonsConstant.Seasons[params.seasonName].SEASON_NICE_NAME;
      params.actionType = Constants.ActionTypes.GET_SEASON_PLAYERS_STATISTICS;
      StatisticsHelper.doGetPlayers(params);
    }
  }
};
