var React = require('react');

class OneWeek extends React.Component {

  render() {
    var week = this.props.week;
    console.log(week);
    
    return (
      <div>
        <h4>Week {week.week}</h4>
        <div>Completed {week.completed}</div>
      </div>
    );
  }

}

module.exports = OneWeek;
