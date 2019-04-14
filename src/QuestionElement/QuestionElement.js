import React, {Component} from 'react';
import PropTypes from "prop-types";
import Question from "../model/Question";
import User from "../model/User";


export default class QuestionElement extends Component {
    handlerChangeUsers = () => {
        this.props.onHandleUsersChange();
    };

    state = {
        isClicked: false,
        questionBody: '',
        isUpdated: this.props.isUpdated
    };

    handlerAnswerButton = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    };


    handlerAddAnswer = (event) => {
        let result1;
        let result2;
        event.preventDefault();
        this.setState({
            isClicked: !this.state.isClicked
        });
        fetch("https://timetable-eeenkeeei.herokuapp.com/addAnswer", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "username": this.props.item.username,
                "theme": this.props.item.theme,
                "question": this.props.item.question,
                "status": this.state.questionBody
            })
        }).then((res) => {
            res.json().then((res) => {

                result1 = res
            });

        });
        fetch("https://timetable-eeenkeeei.herokuapp.com/getSupportList", {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
            .then(res => res.json())
            .then(
                (result) => {
                    result2 = result;
                    if (result1 !== undefined && result2 !== undefined) {
                        this.handlerChangeUsers();
                    }
                },
                (error) => {
                    console.log(error)
                }
            );


        this.setState({
            questionBody: ''
        });
    };

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({
            questionBody: value
        });
    };

    handleAnswerSendButton = (event) => {
        this.handlerAddAnswer(event);
        this.handlerChangeUsers();
    };

    render() {
        const isClicked = this.state.isClicked;
        let answerForm;
        if (isClicked) {
            answerForm =
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Ответ:</label>
                        <textarea className="form-control" value={this.state.questionBody} onChange={this.handleChange}>
                                </textarea>
                        <button type="submit" style={{marginTop: 15}} className="btn btn-outline-success btn-sm"
                                onClick={this.handlerAddAnswer}>Добавить ответ
                        </button>
                    </div>
                </form>
            ;
        }

        let questionCard;
        // if (this.props.item.status !== 'false'){
        //     questionCard = null
        // }
        {
            this.props.item.status === 'false' ? questionCard =
                <div>
                    <div className="card" style={{marginTop: 15}}>
                        <div className="card-body">
                            <h5 className="card-title">Пользователь: {this.props.item.username}</h5>
                            <h6 className="card-subtitle mb-2 h5">Тема вопроса: {this.props.item.theme}</h6>
                            <p className="card-text h5">{this.props.item.question}</p>
                            {this.props.item.status === 'false' ?
                                <span className="badge badge-danger"><h6>Требуется ответ</h6></span> :
                                <span className="badge badge-success"><h6>Вопрос закрыт</h6></span>
                            }
                            <p>
                                <button className="btn-outline-dark btn btn-sm" style={{marginTop: 15}}
                                        onClick={this.handlerAnswerButton}>Ответить
                                </button>
                            </p>
                            {answerForm}
                        </div>
                    </div>
                </div> : questionCard = null
        }

        return (
            questionCard
        )
    }
}

QuestionElement.propTypes = {
    item: PropTypes.instanceOf(Question),
    onRemove: PropTypes.func
};
