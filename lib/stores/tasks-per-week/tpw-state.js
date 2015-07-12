var Immutable = require('immutable');
var TpwRecord = require('./tpw-record');
var _ = require('lodash');

class TpwState {
    constructor() {
        this.tpws = Immutable.Map();
        this.isLoading = false;
    }

    getByMonth() {
        return this.tpws
            .toList()
            .sortBy(week => week.week)
            .groupBy(week => week.month)
            .toList()
            .sortBy(month => - month.first().month);
    }

    retrieve(data) {
        _.each(data, (week) => {
            var record = new TpwRecord(week);
            var key = week.year + ":" + week.week;
            this.tpws = this.tpws.set(key, record);
        }, this);

        this.isLoading = false;
    }

    startRetrieve() {
        this.isLoading = true;
        this.failed = false;
    }

    failRetrieve() {
        this.isLoading = false;
        this.failed = true;
    }
}

module.exports = TpwState;
