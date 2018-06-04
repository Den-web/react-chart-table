import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
// Our Components
import Login from './pages/Login/Login';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={Login} />
        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
