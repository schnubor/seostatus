import React from "react";

export default class Layout extends React.Component {
    constructor(){
        super();
        this.name = "Christian";
    }

    render(){
        return (
            <h1>it works, {this.name}!</h1>
        );
    }
}
