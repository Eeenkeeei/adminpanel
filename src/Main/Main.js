import React, {Component} from 'react';
import '../App.css';
import UsersList from "../UsersList/UsersList"; // <- фигурные скобочки не ставятся, потому что export default
import {Route, Switch} from "react-router-dom";
import Support from "../Support/Support";
import UsersPage from "../UsersPage/UsersPage";
import User from "../model/User";

export default class Main extends Component{

    render() {

        return(
            <main>
                <Switch>
                    <Route exact path='/users' component={UsersPage}/>
                    <Route path='/support' component={Support}/>
                </Switch>
            </main>
        )
    }
}
