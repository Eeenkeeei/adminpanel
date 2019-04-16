import React, {Component} from 'react';
import {Card} from "react-bootstrap"
import News from "../model/News";

export default class NewsComponent extends Component {

    handlerChangeUsers = () => {
        this.props.onHandleUsersChange();
    };


    handleRemoveNews = async () => {

        fetch("https://timetable-eeenkeeei.herokuapp.com/removeNews", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "id": this.props.item.id,
                "text": this.props.item.body
            })
        }).then(res => {
            res.json().then(value => {
                fetch("https://timetable-eeenkeeei.herokuapp.com/getNewsList", {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'},
                })
                    .then(res => res.json())
                    .then(
                        (result) => {
                            result.map(async value => {
                                console.log(result);
                            })
                        },
                        (error) => {
                            console.log(error)
                        }
                    );
            })
        });

        setTimeout(() => {
            this.handlerChangeUsers()

        }, 500)

    };

    render() {
        let card;
        card = <Card style={{marginTop: 5}} className="fadeIn wow animated">
            <Card.Body>
                <Card.Title>Заголовок: {this.props.item.header}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Автор: {this.props.item.author}</Card.Subtitle>
                <Card.Text>
                    {this.props.item.body}
                </Card.Text>
                <button className="btn btn-outline-dark btn-sm" onClick={this.handleRemoveNews}>Удалить новость
                </button>
            </Card.Body>
        </Card>;
        return (
            card
        )
    }
}
