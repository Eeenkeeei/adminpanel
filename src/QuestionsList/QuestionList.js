import React, {Component} from 'react';
import QuestionElement from "../QuestionElement/QuestionElement";
import User from "../model/User";
import Question from "../model/Question";
import AnsweredQuestions from "../AnsweredQuestions/AnsweredQuestions";

export default class QuestionList extends Component {


    handleUsersChange = () => {
        this.setState({toggle: !this.state.toggle});
    };

    handleCounter = (counter) => {
        this.props.onCounterChange(counter);

    };



    state = {
        users: [],
        questions: [],
        toggle: false,
        questionsCounter: 0,
        isClicked: false,
        buttonText: 'Показать завершенные запросы'
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
                                    // console.log('count',this.state.questionsCounter);
                                    this.handleCounter(this.state.questionsCounter);
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.toggle !== this.state.toggle) {
            this.setState({questions: [], users: [], questionsCounter: 0}); // сброс предыдущих массивов
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
                                        console.log('count',this.state.questionsCounter);
                                        this.handleCounter(this.state.questionsCounter);
                                    } else {
                                        this.handleCounter(this.state.questionsCounter);
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

    }

    render() {
        let questionListBody;

        this.state.users.map(user => {
            let support = user.support;
            support.map(value => {

                    questionListBody = this.state.questions.map(value => <QuestionElement onHandleUsersChange={this.handleUsersChange}
                                                                                          key={value.question}  item={value}/>)
            })
        });

        return (
            <div>
                {questionListBody}
            </div>
        )
    }
}
