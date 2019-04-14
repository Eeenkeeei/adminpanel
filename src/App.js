import React, {Component} from 'react';
import './App.css';
import {Container, Row, Col} from "react-bootstrap";
import Menu from "./Menu/Menu"
import Main from "./Main/Main"

class App extends Component {
    render() {
        // return React.createElement('section', null, React.createElement('div', null, React.createElement('span', null, null)));
        return ( // <- нужно запомнить про открывающую круглую скобку


            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <Menu/>
                    </div>
                    <div className="col-9">
                        <Main/>
                    </div>
                </div>
            </div>
            // <Container>
            //     <Row>
            //         <Col className="col-3">
            //
            //
            //
            //         </Col>
            //         <Col className="col-9">
            //
            //
            //
            //         </Col>
            //     </Row>
            // </Container>
        ); // <- внутри JSX наверху должен быть всегда один родитель
    }
}

export default App;
