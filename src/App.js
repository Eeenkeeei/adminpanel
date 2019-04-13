import React, {Component} from 'react';
import './App.css';
import {Container, Row, Col} from "react-bootstrap";
import Menu from "./Menu/Menu"
import Main from "./Main/Main"

class App extends Component {
    render() {
        // return React.createElement('section', null, React.createElement('div', null, React.createElement('span', null, null)));
        return ( // <- нужно запомнить про открывающую круглую скобку

            <Container>
                <Row>
                    <Col className="col-3">

                        <Menu/>

                    </Col>
                    <Col className="col-9">

                        <Main/>

                    </Col>
                </Row>
            </Container>
        ); // <- внутри JSX наверху должен быть всегда один родитель
    }
}

export default App;
