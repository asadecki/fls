const React = require('react');
const MenuStore = require('./../../stores/MenuStore');
const StatisticTypeMenu = require('./../menu/StatisticTypeMenu.jsx');
const IndividualView = require('./../view/IndividualView.jsx');
const TeamView = require('./../view/TeamView.jsx');

let MainView = React.createClass({

  getInitialState() {
    return {
      menuType: ''
    }
  },

  _onChange() {
    this.setState(MenuStore.getData());
  },

  componentDidMount() {
    MenuStore.addChangeListener(this._onChange);
  },

  render() {

    let {menuType} = this.state;

    return (
      <div className="container">
        <StatisticTypeMenu/>
        {menuType === 'individual' ? <IndividualView/> : ""}
        {menuType === 'team' ? <TeamView/> : ""}
      </div>
    );
  }
});

module.exports = MainView;
