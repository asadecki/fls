const React = require('react');
const Grid = require('react-bootstrap/lib/Grid');
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');
const Jumbotron = require('react-bootstrap/lib/Jumbotron');
const Panel = require('react-bootstrap/lib/Panel');
const Player = require('./Player.jsx');
const PlayerStore = require('../stores/PlayerStore');

let PlayerGrid = React.createClass({

  getInitialState() {


    return {
      players: [],
      statisticTitle: "Statistics of Schibsted Tech Polska",
      statisticName: "Nothing"
    }
  },

  _onChange() {
    this.setState(PlayerStore.getData());
  },

  componentDidMount() {
    PlayerStore.addChangeListener(this._onChange);
  },

  render() {
    let {players} = this.state;
    let {statisticTitle} = this.state;

    let topPlayers = players.slice(0, 3);
    let otherPlayers = players.slice(3, players.length);
    return (
      <div>
        <Panel className='js-stats-title'>{statisticTitle}</Panel>
        <Grid>
          <Row className='show-grid js-top-player'>{topPlayers.map(player => <Col xs={12} md={4}><Player
            player={player}/></Col>)}</Row>
          <Row className='show-grid'>{otherPlayers.map(player => <Col xs={12} md={3}><Player
            player={player}/></Col>)}</Row>
        </Grid>
      </div>
    );
  }
});

module.exports = PlayerGrid;
