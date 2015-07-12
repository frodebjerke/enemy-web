jest.autoMockOff();
var TpwState = require('../tpw-state');

describe('TPW State (Tasks per week) - Mutate', function () {

    it('TPW_FETCH_SUCCESS: sets data with key "year:week"', function () {
        var state = new TpwState();
        var data = [{
            year: 2015,
            week: 5
        }];

        state.startRetrieve();
        state.retrieve(data);

        expect(state.tpws.keySeq().toArray()).toContain('2015:5');
    });

    it('TPW_FETCH_SUCCESS: merging data', function () {
        var state = new TpwState();
        var data1 = [{
            year: 2015,
            week: 5,
            completed: 3
        }, {
            year: 2015,
            week: 6,
            completed: 4
        }];
        var data2 = [{
            year: 2015,
            week: 6,
            completed: 10
        }, {
            year: 2015,
            week: 7,
            completed: 6
        }];

        state.retrieve(data1);
        state.retrieve(data2);

        expect(state.tpws.count()).toBe(3);
        expect(state.tpws.get('2015:6').completed).toBe(10);
    });
})
