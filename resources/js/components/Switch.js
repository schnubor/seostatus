import React from "react";

export default class Switch extends React.Component {
    render(){
        return (
            <div className="ui buttons">
                <button className="ui button active">Errors per Client</button>
                <button className="ui button">Clients per Error</button>
            </div>
        );
    }
}
