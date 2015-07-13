var React = require('react');
var _ = require('lodash');
var moment = require('moment');

class OneWeek extends React.Component {

  render() {
    var week = this.props.week;

    var visual = _.chain(new Array(week.max))
      .fill(<span className="nmy-tpw-bar">&nbsp;</span>)
      .fill(<span className="nmy-tpw-bar--none">&nbsp;</span>, week.completed, week.max)
      .value();

    var weekStart = moment().week(week.week).startOf('week');
    var weekEnd = moment().week(week.week).endOf('week');
    var weekPeriodString = weekStart.format("DD.") + " to " + weekEnd.format("DD.")

    return (
      <div className="nmy-tpw-week" title={"Completed " + week.completed}>
        <div className="nmy-tpw-visual">
          {visual}
        </div>
        <h4>Week {week.week}</h4>
        <p className="nmy-typo--meta">{weekPeriodString}</p>
      </div>
    );
  }

}

module.exports = OneWeek;
