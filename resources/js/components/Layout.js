import React from "react";
import Header from "./Header";
import Switch from "./Switch";
import Charts from "./Charts";

export default class Layout extends React.Component {
    render(){
        const { location } = this.props;

        return (
            <div class="ui container">
                <Header />
                <Switch location={location}/>
                <Charts location={location}/>
                {this.props.children}
            </div>
        );
    }
}
