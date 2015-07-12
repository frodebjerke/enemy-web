jest.autoMockOff();
var TpwState = require('../tpw-state');

describe('TPW State (Tasks per week) - Meta', function () {

    it('TPW_FETCH: sets isLoading and unsets failed', function (done) {
        var state = new TpwState();

        state.startRetrieve();

        expect(state.isLoading).toBe(true);
        expect(state.failed).toBe(false);
    });

    it('TPW_FETCH_SUCCESS: unsets isLoading', function () {
        var state = new TpwState();
        state.startRetrieve();
        state.retrieve([]);
        expect(state.isLoading).toBe(false);
    });

    it('TPW_FETCH_FAIL: sets failed and unsets loading', function () {
        var state = new TpwState();

        state.startRetrieve();
        state.failRetrieve();

        expect(state.failed).toBe(true);
        expect(state.isLoading).toBe(false);
    });
})
