import React from "react";
import classNames from 'classnames';

export default class ClientError extends React.Component {
    constructor() {
        super();
        this.state = {
            isMarkupError: false,
            isSitemapError: false,
            isSocialError: false
        }
    }

    // categorize error
    componentWillMount() {
        if(this.props.cat.indexOf('Sitemap') !== -1) {
            this.setState({ isSitemapError: true });
            return;
        }

        if(this.props.cat.indexOf('SEO HTML') !== -1) {
            this.setState({ isMarkupError: true });
            return;
        }

        if(this.props.cat.indexOf('Social Media') !== -1) {
            this.setState({ isSocialError: true });
            return;
        }
    }

    render(){
        var errorClass = classNames({
            'ui segment': true,
            'red': this.state.isMarkupError,
            'yellow': this.state.isSitemapError,
            'blue': this.state.isSocialError
        });

        return (
            <div className={errorClass}>
                {this.props.cat} {this.props.name}
            </div>
        );
    }
}
