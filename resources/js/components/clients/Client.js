import React from "react";
import ClientError from "./ClientError";

export default class Client extends React.Component {
    render(){
        return (
            <div className="ui grid">
                <div className="sixteen wide column">
                    <h4 className="ui top attached header">
                        Random client
                    </h4>
                    <div className="ui segment attached">
                        <ClientError></ClientError>
                        <ClientError></ClientError>
                        <ClientError></ClientError>
                        <ClientError></ClientError>
                    </div>
                    <div className="ui message bottom attached">
                        trololol
                    </div>
                </div>
            </div>
        );
    }
}
