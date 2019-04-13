import React, {Component} from 'react';
import User from "../model/User";

export default class DatabaseStatistic extends Component{

    state = {
        users: [

        ],
        avgAge: 0,
        avgCounter: 0
    };



    componentWillMount() {
    }

    render(){

        let menCounter = 0;
        let womenCounter = 0;

        for (const user of this.props.users) {
            if (user.gender === 'Мужской'){
                menCounter++;
            }
            if (user.gender === 'Женский'){
                womenCounter++;
            }

        }
        return(
            <div>
                <span className="h5">Статистика по аккаунтам</span>
                <p>
                    <span className="h5">Всего аккаунтов: {this.props.users.length}</span>
                </p>
                <p>
                    <span className="h5">Мужчин: {menCounter}, женщин: {womenCounter}</span>
                </p>
            </div>
        )
    }
}
