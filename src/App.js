import React, {Component} from 'react';
import './App.css';
import Menu from "./Menu/Menu"
import Main from "./Main/Main"

class App extends Component {
    state = {
        questionsCounter: 0,
        toggle: false,
        toggleCount: 0
    };

    onChangeToggle = () =>{
        this.setState({
            toggle: !this.state.toggle
        })
    };


    onChangeState = (counter) =>{
        this.setState({
            questionsCounter: counter,
            toggleCount: counter,

        });
        // console.log('counter', counter)
    };

    render() {
        // console.log(this.state.questionsCounter);

        // return React.createElement('section', null, React.createElement('div', null, React.createElement('span', null, null)));
        return ( // <- нужно запомнить про открывающую круглую скобку


            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <Menu count={this.state.questionsCounter}/>
                    </div>
                    <div className="col-9">
                        <Main onChangeState={this.onChangeState}/>
                    </div>
                </div>
            </div>
        ); // <- внутри JSX наверху должен быть всегда один родитель
    }
}

export default App;
