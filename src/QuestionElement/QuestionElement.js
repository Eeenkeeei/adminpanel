import React, {Component} from 'react';
import Question from "../model/Question";
import User from "../model/User";

export default class QuestionElement extends Component{

    render() {
        let support = this.props.item.support;
        if (this.props.item.support.length !== 0){
            console.log(support.map(value => {console.log(this.props.item.username, value.theme, value.question, value.status)}))
        }
        // let questions = [];
        // questions = [...questions, new Question(this.props.item.username, this.props.item.support.theme, this.props.item.support.question, this.props.item.support.status)];
        // console.log(questions)

        return(
            <div>
                {this.props.item.username}

            </div>
        )
    }
}
