import React, {Component} from 'react';
import Task from "../model/Task"; // <- пока "всегда" нужно не забывать импортировать
import User from "../model/User";
import QuestionList from "../QuestionsList/QuestionList";

export default class UsersList extends Component {
    // state -> состояние компонента - mutable (изменяемое)


    render() {
        return (
            <div>
                <QuestionList/>
            </div>
        );
    } // console.log(if () {}); <- нельзя
    // <expr> ? <true> : <false> <- тернарный оператор

    // {} <- JSX "вывод" определённого объекта
    // item={this.state.items[0]} <- передача атрибута в виде объекта, а не строки
}
