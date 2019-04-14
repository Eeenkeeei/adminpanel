import React, {Component} from 'react';
import '../App.css';
import {Route, Switch} from "react-router-dom";
import Support from "../Support/Support";
import UsersPage from "../UsersPage/UsersPage";


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
