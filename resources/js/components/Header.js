import React from 'react';
import classNames from 'classnames';
import $ from 'jquery';

export default class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            loading: false,
            jsonURL: 'http://jenkins.magalog.net:8081/job/frontend/job/frontend_e2etest_live_extended/lastCompletedBuild/testReport/api/json'
        }
    }

    // Live update URL when changing the input
    updateURL(e) {
        let jsonURL = e.target.value;
        this.setState({jsonURL});
    }

    // Fetches Jenkins test result as JSONP
    fetchJSON() {
        this.setState({ loading: true });

        $.ajax({
            url: this.state.jsonURL + '?jsonp=?',
            type: 'GET',
            dataType: 'jsonp',
            jsonp: 'callback',
            error: function(error, textStatus) {
                this.setState({ loading: false });
                // TODO: Set error state
            }.bind(this),
            success: function(resp) {
                // console.log(resp);
                this.setState({ loading: false });

                /* TODO
                var tests = this.extractTestCases(resp);
                this.buildVueData(tests);
                this.updateCharts();
                */
            }.bind(this),
            timeout: 10000
        });
    }

    render(){
        var btnClass = classNames({
            'ui teal right button': true,
            'loading': this.state.loading
        });

        return (
            <div>
                <div className="ui divider hidden"></div>
                <div className="ui huge message">
                    <h1 className="ui header huge ">Styla SEO Stats</h1>
                    <div className="ui hidden divider"></div>
                    <div className="ui action input fluid">
                        <input type="text" placeholder="Jenkins URL" value={this.state.jsonURL} onChange={this.updateURL.bind(this)} />
                        <button className={btnClass} onClick={ this.fetchJSON.bind(this) }>Parse</button>
                    </div>
                    <div className="ui hidden divider"></div>
                </div>
                <div className="ui divider hidden"></div>
            </div>
        );
    }
}
