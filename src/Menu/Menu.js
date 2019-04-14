import React, {Component} from 'react';
import {Link} from "react-router-dom";


export default class Menu extends Component {


    render() {
        return (
        <menu>
            <ul className="list-group">
                <Link to='/users'>
                    <span className="list-group-item list-group-item-action a">Пользователи</span>
                </Link>
                <Link to='/support'>
                    <li className="list-group-item list-group-item-action a">Панель поддержки</li>
                </Link>
            </ul>
        </menu>
        );
    }
}
