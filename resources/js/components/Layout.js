import React from "react";
import Header from "./Header";
import Switch from "./Switch";
import Charts from "./Charts";

export default class Layout extends React.Component {
    render(){
        return (
            <div class="ui container">
                <Header />
                <Switch />
                <Charts />
                {this.props.children}
            </div>
        );
    }
}
