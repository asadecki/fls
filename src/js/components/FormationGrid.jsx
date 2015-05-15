const React = require('react');
const Chart = require('chart.js');
const FormationStore = require('../stores/FormationStore');
const FormationGoals = require('../templates/FormationGoals');

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
      <canvas id="myChart" width="400" height="400"></canvas>
    );
  },

  componentDidUpdate() {
    console.log("FormationGrid#componentDidUpdate");

    let goals = this.state;

    console.log(goals);
    console.log(goals.center);
    console.log(goals.defence);
    console.log(goals.wings);
    var data = FormationGoals.Data;

    data[0].value = goals.defence;
    data[1].value = goals.center;
    data[2].value = goals.wings;

    console.log(data);

    var ctx = document.getElementById("myChart").getContext("2d");
    var myNewChart = new Chart(ctx).Pie(data);
  }
});

module.exports = FormationGrid;
