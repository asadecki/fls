console.log('\'Allo \'Allo!');

$.ajax({
    url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fliga-fls.pl%2Fhome%2Findex.php%3Foption%3Dcom_joomleague%26view%3Droster%26p%3D87%3Aliga-d1-wiosna-2015%26tid%3D178%3Aschibsted-tech-polska%26division%3D0%26Itemid%3D567'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
    success: function (data) {
        convertData(data.query.results.body.div[0].div.section.section[1].div.table[1].tbody.tr);
    },
    crossDomain: true,
    dataType: 'jsonp'
});

function convertData($table) {

    console.log($table)

    var players = $table.filter(function (item) {
        return item.td.length === 12.;
    }).map(function (item) {

        var player = item.td;

        var number = player[0].content;
        var name = player[3].a.span.content;
        var goals = player[7].content.replace(/[^0-9.]/g, "");

        return {
            number: number,
            name: name,
            goals: goals
        };

    });

    players.sort(function (a, b) {
        if (a.goals > b.goals) {
            return -1;
        }
        if (a.goals < b.goals) {
            return 1;
        }
        return 0;
    });

    appendPlayer($("#js-top-3-1"), players[0]);
    appendPlayer($("#js-top-3-2"), players[1]);
    appendPlayer($("#js-top-3-3"), players[2]);

    $("#js-top-3").show();


    var rowsNumber = Math.ceil((players.length - 3) / 6);

    var $topDiv = $("#others");

    console.log(players);

    var currentPlayerNumber = 3;
    for (var rowIndex = 0; rowIndex < rowsNumber; rowIndex++) {

        var $row = $("<div></div>");
        $row.addClass("row");
        $topDiv.append($row);

        for (var columnIndex = 0; columnIndex < 6; columnIndex++) {
            var $colMd2 = $("<div></div>");
            $colMd2.addClass("col-md-2");

            $row.append($colMd2);

            var $panel = $("<div></div>");
            $panel.addClass("panel");
            $panel.addClass("panel-primary");
            $panel.addClass("text-center");
            $panel.addClass("no-boder");
            $panel.addClass("bg-color-brown");
            $panel.addClass("brown");
            appendPlayer($panel, players[currentPlayerNumber]);
            currentPlayerNumber++;
            $colMd2.append($panel);
        }


    }

    function appendPlayer($element, player) {
        $element.append(
                "<div>" +
                "<img src='http://img.uefa.com/imgml/TP/players/1/2014/324x324/63706.jpg' class='img-circle player-image'>" +
                "<div>" + "Name: " + player.name + "</div>" +
                "<div>" + "Number: " + player.number + "</div>" +
                "<div>" + "Goals: " + player.goals + "</div>" +
                "</div>"
        );
    }
}