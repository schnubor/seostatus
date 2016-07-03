import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import _ from "lodash";

class DataStore extends EventEmitter {
    constructor() {
        super();
        this.clients = [];
        this.errors = [];
    }

    getClients() {
        return this.clients;
    }

    getErrors() {
        return this.errors;
    }

    // Extract tests from JSON log
    extractTestCases(resp) {
        let tempCases = [];
        let index = 0;

        // Extract relevant info from "suites"
        for(var suite of resp.suites) {
            for(var test of suite.cases) {
                if(test.status === 'FAILED') {
                    var tempCase = {};

                    tempCase.id = index;
                    tempCase.cat = test.className.match(/ : (.*)/g)[0];
                    tempCase.cat = tempCase.cat.substr(3, tempCase.cat.length);
                    tempCase.url = test.className.match(/.+?(?= : )/g)[0];
                    tempCase.name = test.name;

                    tempCases.push(tempCase);
                    index++;
                }
            }
        }
        return tempCases;
    }

    // Fill Vue clients and errorTypes arrays
    populateData(tests) {
        // Reset existing Vue data
        this.clients = [];
        this.errors = [];

        // populate data
        for(var test of tests) {
            var id = test.id;
            var title = test.cat + ' ' + test.name;
            var error = _.find(this.errors, ['title', title]);
            var client = _.find(this.clients, ['url', test.url]);

            if(typeof client === 'undefined') {
                // Create new client object with 'url' and empty errors array
                var clientObj = {};
                clientObj.id = id;
                clientObj.url = test.url;
                clientObj.errors = [test];
                this.clients.push(clientObj);
            }
            else {
                client.errors.push(test);
            }

            if(typeof error === 'undefined') {
                // Create new errorType object with 'title' and empty clients array
                var errorObj = {};
                errorObj.id = id;
                errorObj.title = title;
                errorObj.clients = [test.url];
                this.errors.push(errorObj);
            }
            else{
                error.clients.push(test.url);
            }
        }

        this.emit("change");
    }

    handleActions(action) {
        console.log("Datastore received an action", action);
        switch(action.type) {
            case "FETCH_DATA": {
                this.emit("loading");
                break;
            }
            case "RECEIVE_DATA": {
                this.emit("fetched");
                let testCases = this.extractTestCases(action.data);
                this.populateData(testCases);
                break;
            }
        }
    }
}

const dataStore = new DataStore;

dispatcher.register(dataStore.handleActions.bind(dataStore));

export default dataStore;
