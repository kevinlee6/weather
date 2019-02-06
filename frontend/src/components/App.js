import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Layout, Spin } from 'antd';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { verify, fetchWeather, initUnit, initFavorite } from 'actions';

class App extends Component {
  async componentDidMount() {
    const { verify, fetchWeather, initUnit, initFavorite } = this.props;
    const initValues = await verify();
    const unit = initValues && initValues.unit;
    unit && initUnit(unit);
    const favorite = initValues && initValues.user_locations;
    favorite && initFavorite(favorite);
    await fetchWeather({ query: 'New York', unit: unit || this.props.unit });
  }

  render() {
    const { children, loading, condition } = this.props;
    return (
      <Spin spinning={loading}>
        <Layout>
          <Header />
          <Content weather={condition}>{children}</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Spin>
    );
  }
}

const mapStateToProps = state => {
  const { unit } = state.unit;
  const { loading } = state.auth;
  const { condition } = state.weather;
  return { loading, condition, unit };
};

export default withRouter(
  connect(
    mapStateToProps,
    { verify, fetchWeather, initUnit, initFavorite }
  )(App)
);
