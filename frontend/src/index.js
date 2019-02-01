import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from 'components/App';
import Landing from 'components/Landing';
import AuthForm from 'components/AuthForm';
import { SIGN_IN, REGISTER } from 'constant';
import './index.css';
const root = document.getElementById('root');

ReactDOM.render(
  <Root>
    <Router>
      <App>
        <Route path="/" exact component={Landing} />
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
