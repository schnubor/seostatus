import React from "react";

export default class ClientToolbar extends React.Component {
    render(){
        return (
            <div>
                <div className="ui horizontal section divider">
                    Filter Tools
                </div>
                <div className="ui form">
                    <div className="fields">
                        <div className="field">
                            <div className="ui left icon input">
                                <input type="text" placeholder="Search..."/>
                                <i className="search icon"></i>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui selection dropdown">
                                <input type="hidden" name="sorting"/>
                                <i className="dropdown icon"></i>
                                <div className="default text">Sorting</div>
                                <div className="menu">
                                    <div className="item" data-value="1">Number of Errors</div>
                                    <div className="item" data-value="0">Alphabetical</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui horizontal section divider">
                    List of Clients
                </div>
            </div>
        );
    }
}
