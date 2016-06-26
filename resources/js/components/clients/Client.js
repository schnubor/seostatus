import React from "react";
import ClientError from "./ClientError";

export default class Client extends React.Component {
    render(){
        return (
            <div>
                <h4 className="ui top attached header">
                    Random client
                </h4>
                <div className="ui segment attached">
                    <ClientError></ClientError>
                    <ClientError></ClientError>
                    <ClientError></ClientError>
                    <ClientError></ClientError>
                </div>
                <div className="ui message attached">
                    trololol
                </div>
            </div>
        );
    }
}
