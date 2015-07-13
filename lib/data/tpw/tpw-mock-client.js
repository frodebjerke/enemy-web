

module.exports = {
    getAll() {
        return Promise.resolve([{
            year: 2015,
            week: 26,
            month: 5,
            completed: 22,
            max: 35
        }, {
            year: 2015,
            week: 25,
            month: 5,
            completed: 15,
            max: 35
        }, {
            year: 2015,
            week: 24,
            month: 5,
            completed: 19,
            max: 35
        }, {
            year: 2015,
            week: 23,
            month: 5,
            completed: 24,
            max: 35
        }, {
            year: 2015,
            week: 27,
            month: 6,
            completed: 21,
            max: 35
        }, {
            year: 2015,
            week: 28,
            month: 6,
            completed: 23,
            max: 35
        }]);
    }
}
