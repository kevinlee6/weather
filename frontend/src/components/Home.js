import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherContainer from './WeatherContainer';
import styled from 'styled-components';

const Div = styled.div`
  margin-bottom: 20px;
`;

const NotLoggedInMessage = () => (
  <Div>
    Get the latest weather! Create an account or sign in to have access to saved
    locations.
  </Div>
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
        <WeatherContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const authenticated = state.auth.authenticated;
  return { authenticated };
};

export default connect(mapStateToProps)(Home);
