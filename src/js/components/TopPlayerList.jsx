const React = require('react');
const Grid = require('react-bootstrap/lib/Grid');
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');
const Jumbotron = require('react-bootstrap/lib/Jumbotron');
const Player = require('./Player.jsx');

let TopPlayerList = React.createClass({

  	_onChange() {
  	},

  	componentDidMount() {
  	},

  	render() {
    	let {players} = this.props;
    	console.log({players});
		return (
			<div>
      			<Grid>
                	<Row className='show-grid'>
                  		<Col xs={12} md={4}><Player player={players[1]}/></Col>
                  		<Col xs={12} md={4}><Player player={players[0]}/></Col>
                  		<Col xs={12} md={4}><Player player={players[2]}/></Col>
                	</Row>

              </Grid>
              </div>
    	);
  	}
});

module.exports = TopPlayerList;
