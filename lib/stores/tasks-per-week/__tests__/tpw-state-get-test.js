jest.autoMockOff();
var TpwState = require('../tpw-state');
var TpwClient = require('../../../data/tpw');

describe('TPW State (Tasks per week) - Get (using mock data)', function () {

    pit('GetByMonth - correct number of months', function () {
        var state = new TpwState();
        return TpwClient.getAll().then((data) => {

            state.startRetrieve();
            state.retrieve(data);
            var res = state.getByMonth();

            expect(res.count()).toBe(2);
        });
    });

    pit('GetByMonth - correct monthly and weekly order', function () {
        var state = new TpwState();
        return TpwClient.getAll().then((data) => {

            state.startRetrieve();
            state.retrieve(data);
            var res = state.getByMonth();

            expect(res.first().first().week).toBe(27);
        });
    });
})
