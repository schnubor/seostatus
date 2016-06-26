import React from "react";
import Client from "./Client";

export default class ClientList extends React.Component {
    render(){
        return (
            <div>
                <Client />
                <Client />
            </div>
        );
    }
}
