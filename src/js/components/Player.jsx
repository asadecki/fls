const React = require('react');
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');
const Jumbotron = require('react-bootstrap/lib/Jumbotron');
const Badge = require('react-bootstrap/lib/Badge');

let Player = React.createClass({

  	render() {
    	let {player} = this.props;

		return (
			<Jumbotron className="player-panel">
				<p>{player.name} <Badge> {player.number}</Badge></p>
				<p>Value : {player.value} </p>
				<img src="http://liga-fls.pl/home/images/com_joomleague/database/persons/watek_pawel.jpg" className="img-rounded"/>
			</Jumbotron>
		);
  	}
});

module.exports = Player;
