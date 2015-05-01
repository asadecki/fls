const React = require('react');
const Grid = require('react-bootstrap/lib/Grid');
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');
const Jumbotron = require('react-bootstrap/lib/Jumbotron');
const Player = require('./Player.jsx');

let TopPlayerList = React.createClass({

  	render() {
    	let {players} = this.props;
    	let topPlayers = players.slice(0,3);
    	let otherPlayers = players.slice(3,players.length);
		return (
			<div>
      			<Grid>
                  	<Row className='show-grid'>{topPlayers.map(player => <Col xs={12} md={4}><Player player={player} /></Col>)}</Row>
					<Row className='show-grid'>{otherPlayers.map(player => <Col xs={12} md={3}><Player player={player} /></Col>)}</Row>
              </Grid>
              </div>
    	);
  	}
});

module.exports = TopPlayerList;
