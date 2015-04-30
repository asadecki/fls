const React = require('react');
const PlayerStore = require('../stores/PlayerStore');
const PlayerAction = require('../actions/PlayerAction');
const TopPlayerList = require('./TopPlayerList.jsx');
const Button = require('react-bootstrap/lib/Button');


let App = React.createClass({

  	getInitialState() {
    	return {
      		players: []
    	}
  	},

  	_onChange() {
    	this.setState(PlayerStore.getAll());
  	},

  	componentDidMount() {
    	PlayerStore.addChangeListener(this._onChange);
    	PlayerAction.getPlayers();
  	},

  	render() {
    	let {players} = this.state;
    	console.log({players});
		return (

      		<div className="container">
        		<TopPlayerList players ={players}/>
      		</div>
    	);
  	}
});

module.exports = App;
