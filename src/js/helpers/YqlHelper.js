var Constants = require('../constants/AppConstants');
var SeasonsConstant = require('../constants/SeasonsInfo');
var TeamConstant = require('../constants/TeamInfo');

// TODO this is shit. Each time someone sees that one panda dies
var YAHOO_URL_TEMPLATE = "https://query.yahooapis.com/v1/public/yql?" +
  "q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fliga-fls.pl%2Fhome%2Findex.php%3Foption%3Dcom_joomleague%26view%3Droster%26p%3DSEASON_ID%3ASEASON_NAME%26tid%3DTEAM_ID%3ATEAM_NAME%26division%3D0%26Itemid%3D567'" +
  "&format=json" +
  "&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

module.exports = {

  prepareYahooUrl: function (seasonName) {
    console.log("YqlHelper#prepareYahooUrl");
    console.log(seasonName);
    return YAHOO_URL_TEMPLATE
      .replace("SEASON_ID", SeasonsConstant.Seasons[seasonName].SEASON_ID)
      .replace("SEASON_NAME", SeasonsConstant.Seasons[seasonName].SEASON_NAME)
      .replace("TEAM_ID", TeamConstant.Team.TEAM_ID)
      .replace("TEAM_NAME", TeamConstant.Team.TEAM_NAME);
  }
};
