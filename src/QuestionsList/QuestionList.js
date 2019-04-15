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

    hideAnsweredQuestions = () =>{
        this.setState({
            isClicked: !this.state.isClicked,
        });
        {this.state.buttonText === 'Показать завершенные запросы' ? this.setState({buttonText: 'Скрыть завершенные запросы'}) : this.setState({buttonText: 'Показать завершенные запросы'})}
    };

    render() {
        const isClicked = this.state.isClicked;
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
        if (isClicked) {
            answeredQuestions =
                <div>
                    {answeredQuestionsArray.map(value => <AnsweredQuestions key={value.question} item={value}/>)}
                </div>

            ;
        }


        return (
            <div>
                <button className="btn btn-outline-dark btn-sm" onClick={this.hideAnsweredQuestions}>{this.state.buttonText}</button>
                {answeredQuestions}
                {this.state.questions.map(value => <QuestionElement onHandleUsersChange={this.handleUsersChange}
                                                                    key={value.question}  item={value}/>)}

            </div>
        )
    }
}
