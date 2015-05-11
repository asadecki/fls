const React = require('react');
const Grid = require('react-bootstrap/lib/Grid');
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');
const Jumbotron = require('react-bootstrap/lib/Jumbotron');
const Panel = require('react-bootstrap/lib/Panel');
const Player = require('./Player.jsx');
const FormationStore = require('../stores/FormationStore');

let FormationGrid = React.createClass({

  getInitialState() {
    return {
      x: []
    }
  },

  _onChange() {
    this.setState(FormationStore.getData());
  },

  componentDidMount() {
    FormationStore.addChangeListener(this._onChange);
  },

  render() {
    return (
      <div>xxx</div>
    );
  }
});

module.exports = FormationGrid;
