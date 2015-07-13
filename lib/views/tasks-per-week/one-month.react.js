var React = require('react');
var OneWeek = require('./one-week.react');
var moment = require('moment');
var _ = require('lodash');

class OneMonth extends React.Component {

  render() {
    var month = this.props.month;
    var monthName = moment().month(month[0].month).format('MMMM');
    var weeks = _.map(month, (week, i) => <OneWeek key={i} week={week} />);

    return (
      <div className="nmy-tpw-month">
        <div className="nmy-tpw-month-meta">
          <h3>{monthName}</h3>
        </div>
        <div className="nmy-tpw-weeks">
          {weeks}
        </div>
      </div>
    );
  }
}

module.exports = OneMonth;
