import React from "react";
import ErrorToolbar from './ErrorToolbar';
import ErrorList from './ErrorList';
import DataStore from "../../stores/DataStore";

export default class Errors extends React.Component {
    constructor() {
        super();
        this.state = {
            errors: DataStore.getErrors()
        }
    }
    
    componentWillMount() {
        DataStore.on("change", () => {
            this.setState({
                errors: DataStore.getErrors()
            });
            console.log("data in Errors.js", this.state.errors);
        });
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
