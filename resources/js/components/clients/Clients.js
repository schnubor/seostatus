import React from "react";
import ClientToolbar from './ClientToolbar';
import ClientList from './ClientList';

export default class Clients extends React.Component {
    render(){
        return (
            <div>
                <ClientToolbar />
                <ClientList />
            </div>
        );
    }
}
