import React, {Component} from 'react';
import PropTypes from 'prop-types'; // Alt + enter -> add to package.json
import {ListGroup} from 'react-bootstrap';
import User from "../model/User";

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
                <div style={{cursor: 'default', marginTop: 10}}>
                    <ul className="list-inline">
                        <li className="list-inline-item h6">Пол: {this.props.item.gender.length > 1 ? this.props.item.gender : 'Не указан'} |</li>
                        <li className="list-inline-item h6">{this.props.item.email} |</li>
                        <li className="list-inline-item h6">Место учебы: {this.props.item.edu.length > 1 ? this.props.item.edu : 'Не указано'} |</li>
                        <li className="list-inline-item h6">Возраст: {this.props.item.age.length > 1 ? this.props.item.age : 'Не указан'} </li>
                        <button className="btn btn-outline-dark btn-sm">Удалить аккаунт</button>
                    </ul>
                </div>
            ;

        }
        return (
            <div style={{cursor: 'default', marginTop: 10}}>
                <ListGroup.Item className="h5" onClick={this.handleUserObjectClick}>{this.props.item.username}, тегов: {this.props.item.noteTags.length}, занятий: {this.props.item.timetable.length}</ListGroup.Item>
                {extendedInfo}
            </div>
        );
    }


}

UserItem.propTypes = {
    item: PropTypes.instanceOf(User),
    onRemove: PropTypes.func
};
