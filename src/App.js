import React, {Component} from 'react';
import './App.css';
import Menu from "./Menu/Menu"
import Main from "./Main/Main"

class App extends Component {
    state = {
        questionsCounter: 0
    };

    onChangeState = (counter) =>{
        this.setState({
            questionsCounter: counter
        })
    }

    render() {
        // return React.createElement('section', null, React.createElement('div', null, React.createElement('span', null, null)));
        return ( // <- нужно запомнить про открывающую круглую скобку


            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <Menu/>
                        {this.state.questionsCounter}
                    </div>
                    <div className="col-9">
                        <Main  count={this.state.questionsCounter} onChangeState={this.onChangeState}/>
                    </div>
                </div>
            </div>
        ); // <- внутри JSX наверху должен быть всегда один родитель
    }
}

export default App;
