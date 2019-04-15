import React, {Component} from 'react';

export default class Img extends Component {
    render() {
        const {src} = this.props;

        return (
            <img src={src} alt="1" />
        );
    }
}
