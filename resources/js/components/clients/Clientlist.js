import React from "react";
import Client from "./Client";

export default class ClientList extends React.Component {
    render(){
        return (
            <div>
                <div className="ui horizontal section divider">
                    List of Clients
                </div>
                <Client />
                <Client />
            </div>
        );
    }
}
