var TpwClient = require('../data/tpw');
var Dispatcher = require('../dispatcher');

var TpwActions = {

    fetch() {

        Dispatcher.dispatch({
            actionType: 'TPW_FETCH'
        });

        TpwClient.getAll()
            .then((data) => {
                Dispatcher.dispatch({
                    actionType: 'TPW_FETCH_SUCCESS',
                    data: data
                });
            })
            .catch((error) => {
                Dispatcher.dispatch({
                    actionType: 'TPW_FETCH_FAIL',
                    error: error,
                    context: "Loading tasks per week"
                });
            });

    }

}

module.exports = TpwActions;
