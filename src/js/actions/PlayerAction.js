var Constants = require('../constants/AppConstants');
var SeasonsConstant = require('../constants/SeasonsInfo');
var TeamConstant = require('../constants/TeamInfo');
var StatisticConstant = require('../constants/StatisticIds');
var AppDispatcher = require('../dispatchers/AppDispatcher');
var YqlHelper = require('../helpers/YqlHelper');

module.exports = {

  getPlayers: function (params) {
    if (params.seasonName === 'forever') {
      params.token = this.token();
      Object.keys(SeasonsConstant.Seasons).forEach(function (seasonName) {
        params.actionType = Constants.ActionTypes.GET_FOREVER_PLAYERS_STATISTICS;
        params.seasonName = seasonName;
        this.doGetPlayers(params);
      }, this);
    } else {
      params.seasonNiceName = SeasonsConstant.Seasons[params.seasonName].SEASON_NICE_NAME;
      params.actionType = Constants.ActionTypes.GET_SEASON_PLAYERS_STATISTICS;
      this.doGetPlayers(params);
    }
  },

  doGetPlayers: function (params) {
    $.ajax({
      traditional: true,
      url: YqlHelper.prepareYahooUrl(params.seasonName),
      dataType: 'jsonp',
      success: function (data) {
        if (data.query.results) {
          var $players = data.query.results.body.div[0].div.section.section[1].div.table[1].tbody.tr;
          params.players = this.convertData($players, params.valueName);
          this.sendDataToDispatcher(params);
        }
      }.bind(this),
      error: function (xhr, status, err) {
        console.log('errrorrrr');
      }.bind(this)
    });
  },

  sendDataToDispatcher: function (params) {
    AppDispatcher.handleViewAction(params);
  },

  convertData: function ($table) {
    return $table.filter(function (item) {
      return item.td.length === 12;
    }).map(function (item) {
      var player = item.td;
      return {
        number: player[0].content,
        name: player[3].a.span.content,
        goals: this.getStatisticField(player, 'goals'),
        assists: this.getStatisticField(player, 'assists'),
        appearances: this.getStatisticField(player, 'appearances'),
        mvp : this.getStatisticField(player, 'mvp'),
        yellow: this.getStatisticField(player, 'yellow'),
        red: this.getStatisticField(player, 'red')
      };
    }, this);
  },

  getStatisticField: function (player, statisticName) {
    return parseInt(player[StatisticConstant.StatisticIds[statisticName]].content.replace(/[^0-9.]/g, ""))
  },

  token: function () {
    return Math.random().toString(36).substr(2);
  }
};
