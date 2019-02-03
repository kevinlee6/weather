import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherForm from './WeatherForm';

const NotLoggedInMessage = () => (
  <div>
    Get the latest weather! Create an account or sign in to have access to saved
    locations.
  </div>
);

class Home extends Component {
  renderIfAuth = () => {
    const { authenticated } = this.props;
    return authenticated ? null : <NotLoggedInMessage />;
  };

  render() {
    return (
      <div>
        {this.renderIfAuth()}
        <WeatherForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const authenticated = state.auth.authenticated;
  return { authenticated };
};

export default connect(mapStateToProps)(Home);
