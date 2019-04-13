import React, {Component} from 'react';
import QuestionElement from "../QuestionElement/QuestionElement";
import User from "../model/User";

export default class QuestionList extends Component{

    state = {
        users: [],
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
                    for (const resultElement of result) {
                        this.setState({
                            users: [...this.state.users, new User(resultElement)]
                        });
                    }
                },
                (error) => {
                    console.log(error)
                }
            )
    }
    render(){
        return(
            <div>
                {this.state.users.map(value => <QuestionElement key={value.username} item={value}/>)}
            </div>
        )
    }
}
