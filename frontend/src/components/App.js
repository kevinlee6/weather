import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Layout, Spin } from 'antd';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { verify, fetchWeather, initUnit } from 'actions';

class App extends Component {
  async componentDidMount() {
    const { verify, fetchWeather, initUnit } = this.props;
    const initValues = await verify();
    const unit = initValues && initValues.unit;
    unit && initUnit(unit);
    await fetchWeather({ query: 'New York', unit: unit || this.props.unit });
  }

  render() {
    const { children, loading, weather } = this.props;
    return (
      <Spin spinning={loading}>
        <Layout>
          <Header />
          <Content weather={weather}>{children}</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Spin>
    );
  }
}

const mapStateToProps = state => {
  const { unit } = state.unit;
  const { loading } = state.auth;
  const { weather } = state.weather;
  return { loading, weather, unit };
};

export default withRouter(
  connect(
    mapStateToProps,
    { verify, fetchWeather, initUnit }
  )(App)
);
