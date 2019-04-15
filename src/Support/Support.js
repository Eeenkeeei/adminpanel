import React, {Component} from 'react';
import QuestionList from "../QuestionsList/QuestionList";

export default class UsersList extends Component {
    // state -> состояние компонента - mutable (изменяемое)
    state = {
        questionsCounter: 0

    }; // <- ES10: 2019 (Babel)
    handleCounterChange = (counter) => {
        this.props.onHandleUsersChange(counter);
        // console.log('ВЫЗОВ ИЗ questionlist')
    };

    render() {
        return (
            <div>
                <QuestionList onCounterChange={this.handleCounterChange}/>
            </div>
        );
    }

}
