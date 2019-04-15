import React, {Component} from 'react';
import Question from "../model/Question";
import User from "../model/User";

export default class DatabaseStatistic extends Component {
    state = {
        users: [],
        questionsCounter: 0,
        questions: []
    }

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
                                        questionsCounter: this.state.questionsCounter + 1
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

        let menCounter = 0;
        let womenCounter = 0;

        for (const user of this.state.users) {
            if (user.gender === 'Мужской') {
                menCounter++;
            }
            if (user.gender === 'Женский') {
                womenCounter++;
            }
        }
        let supportCount = 0;
        let lessonsCount = 0;
        this.state.users.map(value => {
            supportCount += value.support.length;
            lessonsCount += value.timetable.length;
        });

        return (
            <div className="card">

                <div className="card-body">
                    <p>
                        <span className="h5">Количество аккаунтов: {this.state.users.length}</span>
                    </p>
                    <p>
                        <span className="h5">Мужчин: {menCounter}, женщин: {womenCounter}</span>
                    </p>
                    <p>
                        <span className="h5">Общее количество обращений в поддержку: {supportCount}</span>
                    </p>
                    <p>
                        <span className="h5">Общее количество добавленных занятий: {lessonsCount}</span>
                    </p>
                </div>


            </div>
        )
    }
}
