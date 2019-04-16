import React, {Component} from 'react';
import {Link} from "react-router-dom";
import SupportArchive from "../SupportArchive/SupportArchive";

export default class Menu extends Component {
    state = {
        count: 0
    };

    componentDidMount() {
        // console.log('MENU COUNT OLD', this.state.count);
        // console.log('MENU COUNT', this.props.count);
        if (this.state.count !== this.props.count) {
            this.setState({
                count: this.props.count
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log('MENU COUNT OLD', this.state.count);
        // console.log('MENU COUNT', this.props.count);
        if (prevState.count !== this.props.count) {
            this.setState({
                count: this.props.count
            })
        }
    }

    render() {
        let counter;
        {
            this.props.count === 0 ? counter = null : counter = this.props.count
        }
        return (
            <menu>
                <ul className="list-group a">
                    <Link to='/users'>
                    <span className="h6 list-group-item list-group-item-action a"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24"
                        viewBox="0 0 24 24">
    <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg> Пользователи</span>
                    </Link>
                    <Link to='/support'>

                            <span className="h6 list-group-item list-group-item-action" style={{marginTop: 5}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                                <path d="M0 0h24v24H0z" fill="none"/>
                            </svg> Панель поддержки
                                <span className="badge badge-danger"
                                      style={{fontSize: 18, marginLeft: 5}}>{counter}</span>
                            </span>

                    </Link>
                    <Link to='/archive'>

                            <span className="h6 list-group-item list-group-item-action" style={{marginTop: 5}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path
                                    d="M0 0h24v24H0z" fill="none"/><path
                                    d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/></svg> Архив обращений
                            </span>

                    </Link>
                    <Link to='/news'>

                            <span className="h6 list-group-item list-group-item-action" style={{marginTop: 5}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path
                                    d="M0 0h24v24H0z" fill="none"/><path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"/></svg> Добавить новость
                            </span>

                    </Link>
                    <Link to='/newsList'>

                            <span className="h6 list-group-item list-group-item-action" style={{marginTop: 5}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path
                                    d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z"/><path fill="none"
                                                                                             d="M0 0h24v24H0V0z"/></svg> Список новостей
                            </span>

                    </Link>
                    <Link to='/statistic'>

                            <span className="h6 list-group-item list-group-item-action" style={{marginTop: 5}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path
                                    d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/><path
                                    fill="none" d="M0 0h24v24H0z"/></svg> Статистика
                            </span>

                    </Link>
                </ul>

            </menu>
        );
    }
}
