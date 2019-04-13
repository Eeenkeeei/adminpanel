import React, {Component} from 'react';
import Task from "../model/Task"; // <- пока "всегда" нужно не забывать импортировать
import {ListGroup} from 'react-bootstrap';
import UserItem from "../UserItem/UserItem";

export default class UsersList extends Component {

    componentDidMount() {
    }

    render() {

        return (
            <div style={{cursor: 'pointer'}}>
                <ListGroup>
                    {this.props.item.map(value => <UserItem key={value.username} item={value}/>)}
                </ListGroup>
            </div>
        );
    } // console.log(if () {}); <- нельзя
    // <expr> ? <true> : <false> <- тернарный оператор

    handleAdd = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            items: [...prevState.items, new Task(prevState.nextId + 1, prevState.newName, false)], // копия предыдущего массива + новый объект Task
            nextId: prevState.nextId + 1,
            newName: ''
        }));
    };

    // {} <- JSX "вывод" определённого объекта
    // item={this.state.items[0]} <- передача атрибута в виде объекта, а не строки
}
