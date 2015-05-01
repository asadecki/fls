const React = require('react');
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');
const Jumbotron = require('react-bootstrap/lib/Jumbotron');


let Player = React.createClass({

  	render() {
    	let {player} = this.props;

		if (player) {

			return (
				<Jumbotron className="player-panel">
					<p>{player.name} </p>
					<p>Number : {player.number} </p>
					<p>Value : {player.value} </p>
					<img src="http://liga-fls.pl/home/images/com_joomleague/database/persons/watek_pawel.jpg" className="img-circle"/>
				</Jumbotron>
    		);
    	} else {
    		return <div></div>
    	}
  	}
});

module.exports = Player;
