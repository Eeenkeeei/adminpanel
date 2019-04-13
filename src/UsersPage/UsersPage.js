import React, {Component} from 'react';
import UsersList from "../UsersList/UsersList";
import DatabaseStatistic from "../DatabaseStatistic/DatabaseStatistic";
import User from "../model/User";

export default class UsersPage extends Component{
    state = {
        users: [

        ],

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

                    // console.log(this.state.users)
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    render() {
        return(

            <div>
                <DatabaseStatistic users={this.state.users}/>
                <UsersList item={this.state.users}/>
            </div>

        )
    }
}
