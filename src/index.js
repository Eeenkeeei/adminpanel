import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import PasswordForm from "./PasswordForm/PasswordForm"
ReactDOM.render((
    <BrowserRouter>
        <PasswordForm/>
    </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();
