import React from "react";
import ErrorToolbar from './ErrorToolbar';
import ErrorList from './ErrorList';
import DataStore from "../../stores/DataStore";

export default class Errors extends React.Component {
    constructor() {
        super();
        this.updateData = this.updateData.bind(this);
        this.state = {
            errors: DataStore.getErrors()
        }
    }

    // Bind events
    componentWillMount() {
        DataStore.on("change", this.updateData);
    }

    // Unbind events
    componentWillUnmount() {
        DataStore.removeListener("change", this.updateData);
    }

    // Get current data from DataStore
    updateData() {
        this.setState({
            errors: DataStore.getErrors()
        });
        console.log("data in Errors.js", this.state.errors);
    }

    render(){
        return (
            <div>
                <ErrorToolbar />
                <ErrorList />
            </div>
        );
    }
}
