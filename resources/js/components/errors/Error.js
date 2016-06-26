import React from "react";
import ErrorClient from "./ErrorClient";

export default class Error extends React.Component {
    render(){
        return (
            <div className="ui grid">
                <div className="sixteen wide column">
                    <h4 className="ui top attached header">
                        Random Error
                    </h4>
                    <div className="ui segment attached">
                        <ErrorClient />
                        <ErrorClient />
                        <ErrorClient />
                    </div>
                    <div className="ui message bottom attached">
                        trololol
                    </div>
                </div>
            </div>
        );
    }
}
