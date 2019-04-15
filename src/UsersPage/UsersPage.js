import React, {Component} from 'react';
import UsersList from "../UsersList/UsersList";
import DatabaseStatistic from "../DatabaseStatistic/DatabaseStatistic";
import User from "../model/User";
import Question from "../model/Question";
export default class UsersPage extends Component{
    state = {
        users: [

        ],
        questions: [],
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
        return(

            <div>
                <UsersList item={this.state.users}/>
            </div>

        )
    }
}
