import React, {Component} from 'react';
import '../App.css';
import {Route, Switch} from "react-router-dom";
import Support from "../Support/Support";
import UsersPage from "../UsersPage/UsersPage";
import "animate.css"
import DatabaseStatistic from "../DatabaseStatistic/DatabaseStatistic";
import {Helmet} from "react-helmet";

export default class Main extends Component{
    state = {
        count: 1
    };

    handleCounterChange = (counter) => {
        this.props.onChangeState(counter)
    };



    render() {

        return(
            <main count={this.state.count}>
                <Switch>
                    <Route exact path='/users' component={UsersPage} className="fadeIn wow animated"/>
                    <Route path='/support'  render={(props)=><Support count={this.state.count} onHandleUsersChange={this.handleCounterChange} {...props}/>}/>}/>
                    <Route exact path='/statistic' component={DatabaseStatistic} className="fadeIn wow animated" />
                </Switch>
            </main>
        )
    }
}
