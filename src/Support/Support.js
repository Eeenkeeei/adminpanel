import React, {Component} from 'react';
import QuestionList from "../QuestionsList/QuestionList";

export default class UsersList extends Component {
    // state -> состояние компонента - mutable (изменяемое)
    state = {
        questionsCounter: 0

    }; // <- ES10: 2019 (Babel)
    handlerChangeUsers = (counter) => {
        this.props.onHandleUsersChange(counter);
    };

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
