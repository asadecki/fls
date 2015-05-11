var Constants = require('../constants/AppConstants');
var YqlHelper = require('../helpers/YqlHelper');
var SeasonsConstant = require('../constants/SeasonsInfo');
var TeamConstant = require('../constants/TeamInfo');
var StatisticConstant = require('../constants/StatisticIds');
var AppDispatcher = require('../dispatchers/AppDispatcher');
var $ = require('jquery');
var Chart = require('chart.js');

module.exports = {

  doGetPlayers: function (params) {

    var ctx = document.getElementById("myChart").getContext("2d");
    var data = {};  
    var myNewChart = new Chart(ctx).PolarArea(data);
    console.log('sss');
    console.log(myNewChart);
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
        mvp: this.getStatisticField(player, 'mvp'),
        yellow: this.getStatisticField(player, 'yellow'),
        red: this.getStatisticField(player, 'red')
      };
    }, this);
  },

  getStatisticField: function (player, statisticName) {
    return parseInt(player[StatisticConstant.StatisticIds[statisticName]].content.replace(/[^0-9.]/g, ""))
  }
};
