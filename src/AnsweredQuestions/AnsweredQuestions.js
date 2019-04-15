import React, {Component} from 'react';

export default class AnsweredQuestions extends Component {

    render() {
        let questionCard =
            <div className="fadeIn wow animated">
                <div className="card" style={{marginTop: 15}}>
                    <div className="card-body">
                        <h5 className="card-title">Пользователь: {this.props.item.username}</h5>
                        <h6 className="card-subtitle mb-2 h5">Тема вопроса: {this.props.item.theme}</h6>
                        <p className="card-text h5">{this.props.item.question}</p>
                        <span className="badge-success badge"><h6>Ответ дан. Текст ответа:</h6></span>
                        <p>
                        <span className="h5">{this.props.item.status}</span>
                        </p>
                    </div>
                </div>
            </div>;
        return (
            questionCard
        )
    }
}
