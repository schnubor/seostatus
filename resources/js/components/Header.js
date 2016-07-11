import React from 'react';
import classNames from 'classnames';
import DataStore from "../stores/DataStore";
import * as DataActions from "../actions/DataActions";

export default class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            loading: false,
            //jsonURL: 'http://jenkins.magalog.net:8081/job/frontend/job/frontend_e2etest_live_extended/lastCompletedBuild/testReport/api/json',
            jsonURL: 'http://smileanddie.com/jenkins.json'
        }
    }

    componentWillMount() {
        // Bind events
        DataStore.on("loading", () => {
            this.setState({
                loading: true
            });
        });

        DataStore.on("fetched", () => {
            this.setState({
                loading: false
            });
        });
    }

    // Load data after page load
    componentDidMount() {
        DataActions.fetch(this.state.jsonURL);
    }

    // Live update URL when changing the input
    updateURL(e) {
        let jsonURL = e.target.value;
        this.setState({jsonURL});
    }

    // update data store
    updateDataStore(tests) {
        console.log(tests);
    }

    parseClickHandler() {
        DataActions.fetch(this.state.jsonURL);
    }

    render(){
        const btnClass = classNames({
            'ui teal right button': true,
            'loading': this.state.loading
        });

        const headerStyle = {
            marginTop: 80
        };

        return (
            <div style={headerStyle}>
                <div className="ui huge message">
                    <h1 className="ui header huge ">Styla SEO Status</h1>
                    <div className="ui hidden divider"></div>
                    <div className="ui action input fluid">
                        <input type="text" placeholder="Jenkins URL" value={this.state.jsonURL} onChange={this.updateURL.bind(this)} />
                        <button className={btnClass} onClick={ this.parseClickHandler.bind(this) }>Parse</button>
                    </div>
                    <div className="ui hidden divider"></div>
                </div>
                <div className="ui divider hidden"></div>
            </div>
        );
    }
}
