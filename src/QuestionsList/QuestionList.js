import React, {Component} from 'react';
import QuestionElement from "../QuestionElement/QuestionElement";
import User from "../model/User";
import Question from "../model/Question";

export default class QuestionList extends Component {

    state = {
        users: [],
        questions: []
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
                    let objectToPush;
                    for (const resultElement of result) {
                        if (resultElement.support.length !== 0) {

                            resultElement.support.map((object) => {

                                objectToPush = new Question(resultElement.username, object.theme, object.question, object.status )

                                this.setState({

                                    questions: [...this.state.questions, objectToPush]
                                });

                            })
                        }

                        this.setState({
                            users: [...this.state.users, new User(resultElement)],

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
        console.log(this.state.questions);

        return (
            <div>
                {/*{this.state.users.map(value => <QuestionElement key={value.username} item={value}/>)}*/}
            </div>
        )
    }
}
