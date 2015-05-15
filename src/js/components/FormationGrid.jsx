const React = require('react');
const Chart = require('chart.js');
const FormationStore = require('../stores/FormationStore');
const Grid = require('react-bootstrap/lib/Grid');
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');

let FormationGrid = React.createClass({

  getInitialState() {
    return {
      goals: []
    }
  },

  _onChange() {
    this.setState(FormationStore.getData());
  },

  componentDidMount() {
    FormationStore.addChangeListener(this._onChange);
  },

  render() {
    console.log("FormationGrid#render");
    return (
    <Row className='show-grid'>
      <Col xs={6} md={4}><canvas id="chartGoals" width="300" height="300"></canvas></Col>
      <Col xs={6} md={4}><canvas id="chartAssists" width="300" height="300"></canvas></Col>
      <Col xs={6} md={4}><canvas id="chartBoth" width="300" height="300"></canvas></Col>
    </Row>
    );
  },

  componentDidUpdate() {
    // TODO move it somewhere. No more copy-paste
    console.log("FormationGrid#componentDidUpdate");

    let stats = this.state;
    let goals = stats.goals;
    let assists = stats.assists;
    let both = stats.both;

    var ctx1 = document.getElementById("chartGoals").getContext("2d");
    var myNewChart1 = new Chart(ctx1).Pie(goals);

    var ctx2 = document.getElementById("chartAssists").getContext("2d");
    var myNewChart2 = new Chart(ctx2).Pie(assists);

    var ctx3 = document.getElementById("chartBoth").getContext("2d");
    var myNewChart3 = new Chart(ctx3).Pie(both);
  }
});

module.exports = FormationGrid;
