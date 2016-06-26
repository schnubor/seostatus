import React from 'react';

export default class Header extends React.Component {
    render(){
        return (
            <div>
                <div className="ui divider hidden"></div>
                <div className="ui huge message">
                    <h1 className="ui header huge ">Styla SEO Stats</h1>
                    <div className="ui hidden divider"></div>
                    <div className="ui action input fluid">
                        <input type="text" placeholder="Jenkins URL"/>
                        <button className="ui teal right button">Parse</button>
                    </div>
                    <div className="ui hidden divider"></div>
                </div>
                <div className="ui divider hidden"></div>
            </div>
        );
    }
}
