import React, {Component} from 'react';

import classes from './Pre.css';

class Pre extends Component {

    render() {
        return (
            <pre className={classes.Pre}>
                {this.props.children}
            </pre>
        )
    }
}

export default Pre;