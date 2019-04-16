import React, {Component} from 'react';
import QuestionElement from "../QuestionElement/QuestionElement";
import User from "../model/User";
import Question from "../model/Question";
import AnsweredQuestions from "../AnsweredQuestions/AnsweredQuestions";

export default class SupportArchive extends Component {


    handleUsersChange = () => {
        this.setState({toggle: !this.state.toggle});
    };


    state = {
        users: [],
        questions: [],
        toggle: false,
        questionsCounter: 0,
        isClicked: false,
    }; // <- ES10: 2019 (Babel)

    componentDidMount() {
        fetch("https://timetable-eeenkeeei.herokuapp.com/getSupportList", {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
            .then(res => res.json())
            .then(
                (result) => {
                    let objectToPush;
                    for (const resultElement of result) {
                        if (resultElement.support.length !== 0) {
                            resultElement.support.map((object) => {
                                objectToPush = new Question(resultElement.username, object.theme, object.question, object.status);
                                this.setState({
                                    questions: [...this.state.questions, objectToPush]
                                });
                                if (objectToPush.status === 'false') {
                                    this.setState({
                                        questionsCounter: this.state.questionsCounter+1
                                    });
                                }

                            })
                        }
                        this.setState({
                            users: [...this.state.users, new User(resultElement)],
                        });

                    }
                },
                (error) => {
                    console.log(error)
                }
            );


    }

    render() {
        let answeredQuestionsArray = [];
        this.state.users.map(value => {
            let support = value.support;
            support.map(result => {
                if (result.status !== 'false'){
                    answeredQuestionsArray.push(new Question(value.username, result.theme, result.question, result.status))
                }
            })
        });
        let answeredQuestions;
            answeredQuestions =
                <div>
                    {answeredQuestionsArray.map(value => <AnsweredQuestions key={value.question} item={value}/>)}
                </div>

            ;

        return (
            <div>
                {answeredQuestions}
            </div>
        )
    }
}
