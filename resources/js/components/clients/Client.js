import React from "react";
import ClientError from "./ClientError";
import classNames from 'classnames';

export default class Client extends React.Component {
    constructor(){
        super();
        this.state = {
            collapsed: true,
            loading: false
        }
    }

    toggleClientErrors() {
        this.setState({
            collapsed: !this.state.collapsed
        });
        console.log(this.state.collapsed);
    }

    render(){
        const { errors } = this.props;

        const ClientErrorComponents = errors.map((error) => {
            return <ClientError key={error.id} {...error} />
        });

        const segmentClass = classNames({
            'ui segment stacked': this.state.collapsed,
            'ui segment top attached': !this.state.collapsed
        });

        const bodyClass = classNames({
            'transition hidden': this.state.collapsed
        });

        const footerClass = classNames({
            'ui message bottom attached': true,
            'transition hidden': this.state.collapsed
        });

        const btnClass = classNames({
            'ui right floated button mini': true,
            'loading': this.state.loading
        });

        return (
            <div className="ui grid">
                <div className="sixteen wide column">
                    <div className={segmentClass}>
                        <h4 className="ui medium header">
                            {this.props.url}
                            <button className={btnClass} onClick={ this.toggleClientErrors.bind(this) }>Show { this.props.errors.length } errors</button>
                        </h4>
                        <div className={bodyClass}>
                            {ClientErrorComponents}
                        </div>

                    </div>
                    <div className={footerClass}>
                        trololol
                    </div>
                </div>
            </div>
        );
    }
}
