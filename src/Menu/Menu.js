import React, {Component} from 'react';
import {Link} from "react-router-dom";



export default class Menu extends Component {


    render() {
        return (
        <menu>
            {/*<Dropdown.Menu show style={{top: 0}}>*/}

                <Link to='/users'>
                    <button className="btn btn-outline-dark btn-sm">Пользователи</button>
                </Link>
                <Link to='/support'>
                    <button className="btn btn-outline-dark btn-sm" style={{marginTop: 10}}>Панель поддержки</button>
                </Link>
            {/*</Dropdown.Menu>*/}
        </menu>
        );
    }
}
