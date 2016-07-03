import React from "react";
import ClientError from "./ClientError";

export default class Client extends React.Component {
    render(){
        const { errors } = this.props;

        const ClientErrorComponents = errors.map((error) => {
            return <ClientError key={error.id} {...error} />
        });

        return (
            <div className="ui grid">
                <div className="sixteen wide column">
                    <h4 className="ui top attached header">
                        {this.props.url}
                    </h4>
                    <div className="ui segment attached">
                        {ClientErrorComponents}
                    </div>
                    <div className="ui message bottom attached">
                        trololol
                    </div>
                </div>
            </div>
        );
    }
}
