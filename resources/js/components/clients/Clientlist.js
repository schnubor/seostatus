import React from "react";
import Client from "./Client";

export default class ClientList extends React.Component {
    render(){
        const { clients } = this.props;
        const ClientComponents = clients.map((client) => {
            return <Client key={client.id} {...client}/>
        });

        return (
            <div>
                <div className="ui horizontal section divider">
                    List of Clients
                </div>
                {ClientComponents}
            </div>
        );
    }
}
