var React = require('react');
var _ = require('lodash');
var OneMonth = require('./one-month.react');

class TasksPerWeekBox extends React.Component {

  render() {

    var tpws = this.props.tpws;

    var months = _.map(tpws, (month, i) => <OneMonth key={i} month={month} />);

    return (
      <section className="nmy-box">
        <h2>Tasks completed per week</h2>
        <div>Weeks logged: {tpws.length}</div>
        <div>
          {months}
        </div>
      </section>
    );
  }
}

module.exports = TasksPerWeekBox;
