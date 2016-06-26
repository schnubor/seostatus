import React from "react";
import Error from "./Error";

export default class ErrorList extends React.Component {
    render(){
        return (
            <div>
                <Error />
                <Error />
            </div>
        );
    }
}
