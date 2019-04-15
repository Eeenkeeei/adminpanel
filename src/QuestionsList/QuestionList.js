import React, {Component} from 'react';
import QuestionElement from "../QuestionElement/QuestionElement";
import User from "../model/User";
import Question from "../model/Question";

export default class QuestionList extends Component {


    handleUsersChange = () => {
        this.setState({toggle: !this.state.toggle});
    };

    state = {
        users: [],
        questions: [],
        toggle: false,
        questionsCounter: 0
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


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.toggle !== this.state.toggle) {
            this.setState({questions: [], users: []}); // сброс предыдущих массивов
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

    }

    render() {
        return (
            <div>
                {this.state.questions.map(value => <QuestionElement onHandleUsersChange={this.handleUsersChange}
                                                                    key={value.question}  item={value}/>)}

            </div>
        )
    }
}
