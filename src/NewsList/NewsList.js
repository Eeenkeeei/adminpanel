import React, {Component} from 'react';
import Question from "../model/Question";
import User from "../model/User";
import News from "../model/News";
import NewsComponent from "../NewsComponent/NewsComponent";
import QuestionElement from "../QuestionsList/QuestionList";

export default class NewsList extends Component {
    state = {
        news: [],
        toggle: false,
    };
    handleUsersChange = () => {
        console.log(this.state.toggle);
        this.setState({toggle: !this.state.toggle});
    };

    componentDidMount() {
        fetch("https://timetable-eeenkeeei.herokuapp.com/getNewsList", {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
            .then(res => res.json())
            .then(
                (result) => {
                    result.map(value => {
                        console.log(result);
                        let id = value._id;
                        console.log(new News(id, value.header, value.author, value.text));
                        this.setState({
                            news: [...this.state.news, new News(value._id, value.header, value.author, value.text)]
                        })
                    })


                    // for (const resultElement of result) {
                    //
                    //     this.setState({
                    //         news: [...this.state.news, new News(resultElement)],
                    //     });
                    //     console.log(this.state.news)
                    //
                    // }
                },
                (error) => {
                    console.log(error)
                }
            );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('update');
        if (prevState.toggle !== this.state.toggle) {
            this.setState({news: []}); // сброс предыдущих массивов

            fetch("https://timetable-eeenkeeei.herokuapp.com/getNewsList", {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            })
                .then(res => res.json())
                .then(
                    (result) => {
                        result.map(value => {
                            console.log(result);
                            let id = value._id;
                            console.log(new News(id, value.header, value.author, value.text));
                            this.setState({
                                news: [...this.state.news, new News(value._id, value.header, value.author, value.text)]
                            })
                        })
                    },
                    (error) => {
                        console.log(error)
                    }
                );
        }
    }

    render() {
        console.log(this.state.news);
        let questionListBody = null;
        this.state.news.map(news => {
            questionListBody = this.state.news.map(value => <NewsComponent
                key={value.id} item={value} onHandleUsersChange={this.handleUsersChange}/>)
        });

        return (
            <div>
                {questionListBody}
            </div>
        )
    }
}
