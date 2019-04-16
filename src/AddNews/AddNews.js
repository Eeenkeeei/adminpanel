import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";

export default class AddNews extends Component {

    state = {
        header: '',
        body: '',
        author: '',
        result: ''
    };

    handleAddNews = (event) => {
        event.preventDefault();
        console.log(this.state.header, this.state.author, this.state.body);
        fetch("https://timetable-eeenkeeei.herokuapp.com/addNews", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "header": this.state.header,
                "author": this.state.author,
                "body": this.state.body
            })
        })
            .then(res => res.json())
            .then(
                (result) => {
                    if (result === 'added'){
                        this.setState({
                            result: 'added'
                        });
                    }
                },
                (error) => {
                    console.log(error)
                }
            );

        this.setState({
            header: '',
            author: '',
            body: ''
        })
    };

    handleChangeHeader = (event) => {
        const header = event.target.value;
        this.setState({
            header: header
        });
    };
    handleChangeAuthor = (event) => {
        const author = event.target.value;
        this.setState({
            author: author
        });

    };
    handleChangeBody = (event) => {
        const body = event.target.value;
        this.setState({
            body: body
        });
    };

    render() {
        let result = this.state.result;
        let resultText;
        {result === 'added' ? resultText = <span className="badge-success badge fadeIn wow animated"><h5>Новость добавлена</h5> </span>: resultText = null}
        return (
            <div className="fadeIn wow animated">
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Заголовок статьи</Form.Label>
                        <Form.Control type="text" value={this.state.header} onChange={this.handleChangeHeader}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Автор</Form.Label>
                        <Form.Control type="text" value={this.state.author} onChange={this.handleChangeAuthor}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Текст</Form.Label>
                        <Form.Control as="textarea" rows="3" value={this.state.body} onChange={this.handleChangeBody}/>
                    </Form.Group>
                    <Button variant="outline-dark" type="submit" onClick={this.handleAddNews}>
                        Добавить новость
                    </Button>
                </Form>
                <div style={{marginTop: 20}}>
                    {resultText}
                </div>
            </div>
        )
    }

}
