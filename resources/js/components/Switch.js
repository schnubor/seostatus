import React from 'react';
import { Link } from 'react-router';

export default class Switch extends React.Component {
    render(){
        return (
            <div className="ui buttons">
                <Link to='/' className="ui button">Errors per Client</Link>
                <Link to='errors' className="ui button">Clients per Error</Link>
            </div>
        );
    }
}
