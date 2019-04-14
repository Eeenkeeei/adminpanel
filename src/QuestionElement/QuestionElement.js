import React, {Component} from 'react';
import PropTypes from "prop-types";
import Question from "../model/Question";


export default class QuestionElement extends Component {

    state = {
        isClicked: false,
        questionBody: ''
    };
    handlerAnswerButton = () => {
        console.log('Клик на кнопке');
        this.setState({
            isClicked: !this.state.isClicked
        })
    };

    handlerAddAnswer = (event) =>{
        event.preventDefault();
        console.log(new Question(this.props.item.username, this.props.item.theme, this.props.item.question, this.state.questionBody));
        this.setState({
            isClicked: !this.state.isClicked
        });
        fetch("http://localhost:7777/addAnswer", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "username": this.props.item.username,
                "theme": this.props.item.theme,
                "question": this.props.item.question,
                "status": this.state.questionBody
            })
        });
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


        return (
            <div>
                <div className="card" style={{marginTop: 15}}>
                    <div className="card-body">
                        <h5 className="card-title">Пользователь: {this.props.item.username}</h5>
                        <h6 className="card-subtitle mb-2 h5">Тема вопроса: {this.props.item.theme}</h6>
                        <p className="card-text h5">{this.props.item.question}</p>
                        {this.props.item.status === 'false' ?
                            <span className="badge badge-danger"><h6>Требуется ответ</h6></span> : <span className="badge badge-success"><h6>Дан ответ</h6></span>}
                        <p>
                            <button className="btn-outline-dark btn btn-sm" style={{marginTop: 15}}
                                    onClick={this.handlerAnswerButton}>Ответить
                            </button>
                        </p>
                        {answerForm}
                    </div>
                </div>
            </div>
        )
    }
}

QuestionElement.propTypes = {
    item: PropTypes.instanceOf(Question),
    onRemove: PropTypes.func
};
