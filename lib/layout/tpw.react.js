var React = require('react');
var TpwStore = require('../stores/tasks-per-week');
var TpwsBox = require('../views/tasks-per-week');
var TpwActions = require('../actions/tpw-actions');

class Tpw extends React.Component {

  constructor() {
    this.state = {
      tpws: TpwStore.getByMonth()
    };
  }

  componentDidMount() {
    TpwStore.addChangeListener(this._onTpwChange.bind(this));

    TpwActions.fetch();
  }

  componentWillUnmount() {
    TpwStore.removeChangeListener(this._onTpwChange);
  }

  render() {
    return <TpwsBox tpws={this.state.tpws} />
  }

  _onTpwChange() {
    this.setState({
      tpws: TpwStore.getByMonth()
    });
  }

}

module.exports = Tpw;
