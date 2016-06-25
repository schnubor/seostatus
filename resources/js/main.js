import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
    render(){
        const name = "Christian";
        return (
            <h1>it works, {name}!</h1>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
