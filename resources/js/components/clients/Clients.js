import React from "react";
import ClientToolbar from './ClientToolbar';
import ClientList from './ClientList';
import DataStore from "../../stores/DataStore";

export default class Clients extends React.Component {
    constructor() {
        super();
        this.updateData = this.updateData.bind(this);
        this.state = {
            clients: DataStore.getClients()
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
            clients: DataStore.getClients()
        });
        console.log("data in Clients.js", this.state.clients);
    }

    render(){
        return (
            <div>
                <ClientToolbar />
                <ClientList clients={this.state.clients}/>
            </div>
        );
    }
}
