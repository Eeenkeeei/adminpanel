import React, {Component} from 'react';
import {Form, Button} from "react-bootstrap";
import App from '../App';
import Question from "../model/Question";
import User from "../model/User";
export default class PasswordForm extends Component {
    state = {
        isConfirmed: false,
        password: ''
    };

    handlerLoginForm = (event) =>{
        event.preventDefault();
        fetch("http://localhost:7777/confirmAdminPassword", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "password": this.state.password
            })
        })
            .then(res => res.json())
            .then(
                (result) => {
                    if (result === 'confirm'){
                        this.setState({
                            isConfirmed: true
                        });
                    }
                },
                (error) => {
                    console.log(error)
                }
            );


    };

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({
            password: value
        });

    };

    render(){

        let body =  <Form  className="col-2 mx-auto" style={{marginTop: 200}}>
            <Form.Group>
                <Form.Control placeholder="Пароль" type="password" value={this.state.password} onChange={this.handleChange}/>
            </Form.Group>
            <Button variant="success" type="submit" className="btn-block" onClick={this.handlerLoginForm}>
                Войти
            </Button>
        </Form>;
        {this.state.isConfirmed ? body = <App/> : body = body}
        return(
            <div>
                {body}
            </div>
        )
    }
}
