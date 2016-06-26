import React from "react";
import Charts from "./Charts";
import Switch from "./Switch";
import Toolbar from "./Toolbar";
import ClientList from "./clients/ClientList";

export default class Content extends React.Component {
    constructor(){
        super();
        this.name = "Christian";
    }

    render(){
        return (
            <div>
                <Switch></Switch>
                <Charts></Charts>
                <Toolbar></Toolbar>
                <ClientList></ClientList>
            </div>
        );
    }
}
