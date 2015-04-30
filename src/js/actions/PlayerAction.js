var AppDispatcher = require('../dispatchers/AppDispatcher');
var Constants = require('../constants/AppConstants');
const PlayerStore = require('../stores/PlayerStore');


module.exports = {

    getPlayers: function () {
        $.ajax({
            traditional: true,
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fliga-fls.pl%2Fhome%2Findex.php%3Foption%3Dcom_joomleague%26view%3Droster%26p%3D87%3Aliga-d1-wiosna-2015%26tid%3D178%3Aschibsted-tech-polska%26division%3D0%26Itemid%3D567'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
            dataType: 'jsonp',
            success: function (data) {

                if (data.query.results) {

                    var $players = data.query.results.body.div[0].div.section.section[1].div.table[1].tbody.tr;
                    var players = this.convertData($players, 7);

                    AppDispatcher.handleViewAction({
                        type: Constants.ActionTypes.GET_STATISTICS,
                        players: players
                    });
                }

            }.bind(this),
            error: function (xhr, status, err) {
                console.log('errrorrrr');
            }.bind(this)
        });
    },

    convertData: function ($table, valueIndex) {
        var players = $table.filter(function (item) {
            return item.td.length === 12;
        }).map(function (item) {

            var player = item.td;

            var number = player[0].content;
            var name = player[3].a.span.content;
            var value = player[valueIndex].content.replace(/[^0-9.]/g, "");
            return {
                number: number,
                name: name,
                value: value
            };

        });
        return this.sortPlayers(players);
    },

    sortPlayers: function (array) {
        return array.sort(function (a, b) {
            if (a.value > b.value) {
                return -1;
            }
            if (a.value < b.value) {
                return 1;
            }
            return 0;
        });
    }
};
