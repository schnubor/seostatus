import React from "react";
import Header from "./Header";
import Content from "./Content";

export default class Layout extends React.Component {
    render(){
        return (
            <div class="ui container">
                <Header />
                <Content />
            </div>
        );
    }
}
