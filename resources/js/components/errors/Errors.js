import React from "react";
import ErrorToolbar from './ErrorToolbar';
import ErrorList from './ErrorList';

export default class Errors extends React.Component {
    render(){
        return (
            <div>
                <ErrorToolbar />
                <ErrorList />
            </div>
        );
    }
}
