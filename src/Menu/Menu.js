import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Menu extends Component {
    state = {
        count: 0
    };

    componentDidMount() {
        // console.log('MENU COUNT OLD', this.state.count);
        // console.log('MENU COUNT', this.props.count);
        if (this.state.count !== this.props.count){
            this.setState({
                count: this.props.count
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log('MENU COUNT OLD', this.state.count);
        // console.log('MENU COUNT', this.props.count);
        if (prevState.count !== this.props.count){
            this.setState({
                count: this.props.count
            })
        }
    }

    render() {
        return (
        <menu>
            <ul className="list-group a">
                <Link to='/users'>
                    <span className="list-group-item list-group-item-action a">Пользователи</span>
                </Link>
                <Link to='/support'>
                    <li className="list-group-item list-group-item-action a">Панель поддержки <span className="badge badge-success">{this.props.count}</span></li>
                </Link>
            </ul>
        </menu>
        );
    }
}
