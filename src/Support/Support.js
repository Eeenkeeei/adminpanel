import React, {Component} from 'react';
import Task from "../model/Task"; // <- пока "всегда" нужно не забывать импортировать
import {ListGroup} from 'react-bootstrap';
import User from "../model/User";
import DatabaseStatistic from "../UsersPage/UsersPage";

export default class UsersList extends Component {
    // state -> состояние компонента - mutable (изменяемое)
    state = {
        users: [

        ],
    }; // <- ES10: 2019 (Babel)

    componentDidMount() {
        fetch("http://localhost:7777/test", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "username": this.p,
                "message": this.state.newName
            })
        })
            .then(res => res.json())
            .then(
                (result) => {
                    for (const resultElement of result) {
                        this.setState({
                            users: [...this.state.users, new User(resultElement)]
                        });
                    }

                    console.log(this.state.users)
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    render() {
        return (
            <div>
                {/*<DatabaseStatistic users={this.state.users}/>*/}
                support
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
