const React = require('react');
const ButtonGroup = require('react-bootstrap/lib/ButtonGroup');
const Button = require('react-bootstrap/lib/Button');
const PlayerAction = require('../actions/PlayerAction');



let Menu = React.createClass({

	handleBestStrikesClick() {
		PlayerAction.getPlayers('goals');
	},

	handleBestAssistsClick() {
		PlayerAction.getPlayers('assists');
    },

    handleBestStrikesAndAssists() {
		PlayerAction.getPlayers('both');
    },

	render() {
		return (
			<ButtonGroup justified>
            	<Button onClick={this.handleBestStrikesClick} href='#'>Best strikers</Button>
            	<Button onClick={this.handleBestAssistsClick} href='#'>Who can pass like Iniesta?</Button>
            	<Button onClick={this.handleBestStrikesAndAssists} href='#'>Who can do both?</Button>
	 	  	</ButtonGroup>
		)
  	}
});

module.exports = Menu;
