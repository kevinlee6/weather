import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import { Form as AntdForm, Input, Button, message } from 'antd';
import { ErrorDiv } from 'components/Styled';
import QueryField from './QueryField';
import CountryField from './CountryField';
import schema from './schema';
import { fetchWeather } from 'actions';
import { QUERY } from 'constant';

const FormItem = AntdForm.Item;

class WeatherForm extends Component {
  state = {
    hasError: false,
  };

  handleSubmit = values => {
    const { fetchWeather, unit } = this.props;
    // Could alternatively use message error for flash message.
    fetchWeather({ ...values, unit })
      .then(resolve => {
        const { error } = resolve;
        if (error) {
          message.error('That location could not be found.');
        }
      })
      .catch(err => {
        message.error('Something went wrong.');
      });
  };

  renderError = () => <ErrorDiv>Either zip code or city are invalid.</ErrorDiv>;

  clearError = () => {};

  render() {
    const initialValues = { query: '', country: '' };
    const { hasError } = this.state;
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          this.handleSubmit(values);
        }}
        validationSchema={schema}
        render={() => (
          <React.Fragment>
            <Form
              onChange={this.clearError}
              className="ant-form ant-form-inline"
            >
              <FormItem>
                <Input.Group compact>
                  <QueryField />
                  <CountryField />
                </Input.Group>
              </FormItem>
              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                  shape="circle"
                  icon="search"
                />
              </FormItem>
            </Form>
            <ErrorMessage component={ErrorDiv} name={QUERY} />

            {hasError ? this.renderError() : null}
          </React.Fragment>
        )}
      />
    );
  }
}

const mapStateToProps = state => {
  const { unit } = state;
  return { unit };
};

export default connect(
  mapStateToProps,
  { fetchWeather }
)(WeatherForm);
