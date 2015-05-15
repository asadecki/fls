var Constants = require('../constants/AppConstants');
var StatisticsHelper = require('../helpers/StatisticsHelper');

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
