var AppDispatcher = require('../dispatchers/AppDispatcher');
var Constants = require('../constants/AppConstants');

var statisticValues = {
    'appearances' : 6,
    'goals': 7,
    'assists': 8,
    'goals-and-assists': [7, 8]
};

var seasons = {
    "seasonFall2014": {
        "SEASON_ID": 77,
        "SEASON_NAME": "liga-d1-jesien-2014",
        "SEASON_NICE_NAME": "Fall 2014",
        "TEAM_ID": 178,
        "TEAM_NAME": "schibsted-tech-polska"
    },

    "seasonSpring2015": {
        "SEASON_ID": 87,
        "SEASON_NAME": "liga-d1-wiosna-2015",
        "SEASON_NICE_NAME": "Spring 2015",
        "TEAM_ID": 178,
        "TEAM_NAME": "schibsted-tech-polska"
    }
};

// TODO this is shit. Each time someone sees that one panda dies
var YAHOO_URL_TEMPLATE = "https://query.yahooapis.com/v1/public/yql?" +
    "q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fliga-fls.pl%2Fhome%2Findex.php%3Foption%3Dcom_joomleague%26view%3Droster%26p%3DSEASON_ID%3ASEASON_NAME%26tid%3DTEAM_ID%3ATEAM_NAME%26division%3D0%26Itemid%3D567'" +
    "&format=json" +
    "&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";


module.exports = {

    getPlayers: function (seasonName, valueName) {
        if (seasonName === 'forever') {
            Object.keys(seasons).forEach(function (seasonName) {
                this.doGetPlayers(seasonName, valueName, Constants.ActionTypes.GET_FOREVER_STATISTICS, Object.keys(seasons).length);
            }, this);

        } else {
            this.doGetPlayers(seasonName, valueName, Constants.ActionTypes.GET_SEASON_STATISTICS);
        }
    },

    doGetPlayers: function (seasonName, valueName, actionType, seasonToCollectNumber) {

        $.ajax({
            traditional: true,
            url: this.prepareYahooUrl(seasonName),
            dataType: 'jsonp',
            success: function (data) {
                if (data.query.results) {
                    var $players = data.query.results.body.div[0].div.section.section[1].div.table[1].tbody.tr;
                    var players = this.convertData($players, valueName);
                    this.sendDataToDispatcher(actionType, players, valueName, seasonName, seasonToCollectNumber);
                }
            }.bind(this),
            error: function (xhr, status, err) {
                console.log('errrorrrr');
            }.bind(this)
        });
    },

    sendDataToDispatcher: function(actionType, players, valueName, seasonName, seasonToCollectNumber) {
        AppDispatcher.handleViewAction({
            type: actionType,
            players: players,
            statisticName: valueName,
            seasonName: seasons[seasonName].SEASON_NICE_NAME,
            seasonToCollectNumber: seasonToCollectNumber
        });
    },

    convertData: function ($table, valueName) {
        var players = $table.filter(function (item) {
            return item.td.length === 12;
        }).map(function (item) {

            var player = item.td;

            var number = player[0].content;
            var name = player[3].a.span.content;
            var value;

            if (valueName === 'goals-and-assists') {
                var value7 = parseInt(player[statisticValues['goals']].content.replace(/[^0-9.]/g, ""));
                var value8 = parseInt(player[statisticValues['assists']].content.replace(/[^0-9.]/g, ""));
                value = value7 + value8;
            } else {
                value = parseInt(player[statisticValues[valueName]].content.replace(/[^0-9.]/g, ""));
            }

            return {
                number: number,
                name: name,
                value: value
            };

        });
        return players;
    },

    prepareYahooUrl: function (seasonName) {
        var seasonToGet = seasons[seasonName];
        return YAHOO_URL_TEMPLATE
            .replace("SEASON_ID", seasonToGet.SEASON_ID)
            .replace("SEASON_NAME", seasonToGet.SEASON_NAME)
            .replace("TEAM_ID", seasonToGet.TEAM_ID)
            .replace("TEAM_NAME", seasonToGet.TEAM_NAME);
    }
};
