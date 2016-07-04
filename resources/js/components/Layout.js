import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Charts from "./Charts";

export default class Layout extends React.Component {
    render(){
        const { location } = this.props;

        return (
            <div class="ui container">
                <Navigation location={location}/>
                <Header />
                <Charts location={location}/>
                {this.props.children}
            </div>
        );
    }
}
