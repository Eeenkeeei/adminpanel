import React, {Component} from 'react';
import PropTypes from 'prop-types'; // Alt + enter -> add to package.json
import {ListGroup} from 'react-bootstrap';
import User from "../model/User";
import "animate.css"

export default class UserItem extends Component {

    state = {
        isClicked: false,
        value: ''
    };

    handleUserObjectClick = () => {
        console.log('Клик на списке');
        this.setState({
            isClicked: !this.state.isClicked
        })
    };


    render() {
        const isClicked = this.state.isClicked;
        let extendedInfo;
        if (isClicked) {
            extendedInfo =
                <div style={{cursor: 'default', marginTop: 10}} className="fadeIn wow animated">
                    <ul className="list-inline">
                        <li className="list-inline-item h6">Пол: {this.props.item.gender.length > 1 ? this.props.item.gender : 'Не указан'} |</li>
                        <li className="list-inline-item h6">{this.props.item.email} |</li>
                        <li className="list-inline-item h6">Место
                            учебы: {this.props.item.edu.length > 1 ? this.props.item.edu : 'Не указано'} |
                        </li>
                        <li className="list-inline-item h6">Возраст: {this.props.item.age.length > 1 ? this.props.item.age : 'Не указан'} </li>
                    </ul>
                </div>
            ;

        }
        let supportCounter;
        {
            this.props.item.support.length !== 0 ? supportCounter =
                <span>Количество обращений:  <span className="badge badge-info">{this.props.item.support.length}</span></span> : supportCounter = null
        }
        let lessonsCounter;
        {
            this.props.item.timetable.length !== 0 ? lessonsCounter = <span>Занятий:  <span
                className="badge badge-info">{this.props.item.timetable.length}</span> </span> : lessonsCounter = null
        }
        let tagsCounter;
        {
            this.props.item.noteTags.length !== 0 ? tagsCounter = <span> Тегов:  <span
                className="badge badge-info">{this.props.item.noteTags.length}</span> </span> : tagsCounter = null
        }
        return (
            <div style={{cursor: 'pointer', marginTop: 5}}>
                <ListGroup.Item className="h5" onClick={this.handleUserObjectClick}>{this.props.item.username}
                    {tagsCounter} {lessonsCounter}
                    {supportCounter}
                </ListGroup.Item>
                {extendedInfo}
            </div>
        );
    }


}

UserItem.propTypes = {
    item: PropTypes.instanceOf(User),
    onRemove: PropTypes.func
};
