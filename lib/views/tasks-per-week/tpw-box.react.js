var React = require('react');
var _ = require('lodash');
var OneMonth = require('./one-month.react');

class TasksPerWeekBox extends React.Component {

  render() {

    var tpws = this.props.tpws;

    var months = _.map(tpws, (month, i) => <OneMonth key={i} month={month} />);

    return (
      <section className="nmy-tpw">
        <div className="nmy-tpw-meta">
          <h2>Tasks completed per week</h2>
          <p className="nmy-typo--meta">Months logged: {tpws.length}</p>
        </div>
        <div className="nmy-tpw-months">
          {months}
        </div>
      </section>
    );
  }
}

module.exports = TasksPerWeekBox;
