import React from 'react';
import { Link } from 'react-router';

export default class Switch extends React.Component {
    render(){
        const { location } = this.props;
        const clientsClassName = (location.pathname === "/" || location.pathname === "/clients") ? "active" : "";
        const errorsClassName = location.pathname === "/errors" ? "active": "";

        return (
            <div className="ui buttons">
                <Link to='clients' className={"ui button " + clientsClassName}>Errors per Client</Link>
                <Link to='errors' className={"ui button " + errorsClassName}>Clients per Error</Link>
            </div>
        );
    }
}
