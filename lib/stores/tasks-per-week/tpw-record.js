var Immutable = require('immutable');

var TpwRecord = Immutable.Record({
    year: 0,
    week: 0,
    month: 0,
    completed: 0,
    max: 0
});

module.exports = TpwRecord;
