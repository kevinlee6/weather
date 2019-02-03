import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from 'components/App';
import Home from 'components/Home';
import AuthForm from 'components/AuthForm';
import { SIGN_IN, REGISTER } from 'constant';
import './index.css';

// change global config
import { message } from 'antd';
import axios from 'axios';
axios.defaults.baseURL =
  process.env.REACT_APP_HEROKU_URL || 'http://localhost:3001/api/';
message.config({ maxCount: 2, duration: 1 });

const root = document.getElementById('root');

ReactDOM.render(
  <Root>
    <Router>
      <App>
        <Route path="/" exact component={Home} />
        <Route path="/signin" render={() => <AuthForm command={SIGN_IN} />} />
        <Route
          path="/register"
          render={() => <AuthForm command={REGISTER} />}
        />
      </App>
    </Router>
  </Root>,
  root
);
