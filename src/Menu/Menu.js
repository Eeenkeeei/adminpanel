import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Menu extends Component {
    state = {
        supportCounter: 0
    };

    handleCounterChange = (count) => {
        this.setState({supportCounter: count});
    };

    render() {
        return (
        <menu>
            <ul className="list-group a">
                <Link to='/users'>
                    <span className="list-group-item list-group-item-action a">Пользователи</span>
                </Link>
                <Link to='/support'>
                    <li className="list-group-item list-group-item-action a">Панель поддержки <span className="badge badge-success">{this.state.supportCounter}</span></li>
                </Link>
            </ul>
        </menu>
        );
    }
}
