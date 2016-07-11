import React from 'react';
import { Link } from 'react-router';

export default class Navigation extends React.Component {
    render(){
        const { location } = this.props;
        const clientsClassName = (location.pathname === "/" || location.pathname === "/clients") ? "active" : "";
        const errorsClassName = location.pathname === "/errors" ? "active": "";

        return (
            <div className="ui top fixed menu large">
                <div className="ui container">
                    <div className="item"><img src="/images/styla-logotype.png" alt="Styla"/></div>
                    <Link to='clients' className={"item " + clientsClassName}>Clients</Link>
                    <Link to='errors' className={"item " + errorsClassName}>Errors</Link>
                </div>
            </div>
        );
    }
}
