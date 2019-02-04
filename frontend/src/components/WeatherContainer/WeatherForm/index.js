import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Form as AntdForm, Input, Button, Select } from 'antd';
import { ErrorDiv, SInput } from 'components/Styled';
import CityOrZipField from './CityOrZipField';
import CountryField from './CountryField';
import schema from './schema';
import { fetchWeather } from 'actions';
import { validateZipAndCity } from 'helpers';
import styled from 'styled-components';

const CITY = 'city';
const ZIP = 'zip_code';

const FormItem = AntdForm.Item;
const Option = Select.Option;

const SSelect = styled(Select)`
  width: 110px !important;
`;

class WeatherForm extends Component {
  state = {
    hasError: false,
    cityOrZip: CITY,
  };

  handleSubmit = values => {
    const { fetchWeather, unit } = this.props;
    console.log(values);
    // Could alternatively use message error for flash message.
    if (!validateZipAndCity(values)) return this.setState({ hasError: true });
    fetchWeather({ ...values, unit }).then(resolve => {
      console.log(resolve);
    });
  };

  renderError = () => (
    <ErrorDiv>
      Both zip code and city are invalid. Either zip code must be 5 digits or
      city must be at least 2 letters.
    </ErrorDiv>
  );

  clearError = () => {};

  handleSelect = (value, resetForm) => {
    const { cityOrZip } = this.state;
    if (cityOrZip !== value) {
      this.setState({ cityOrZip: value });
      resetForm();
    }
  };

  render() {
    const initialValues = { zip_code: '', city: '', country: '' };
    const { hasError, cityOrZip } = this.state;
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          this.handleSubmit(values);
        }}
        validationSchema={schema}
        render={({ field, resetForm }) => (
          <React.Fragment>
            <Form
              onChange={this.clearError}
              className="ant-form ant-form-inline"
            >
              <FormItem>
                <SSelect
                  defaultValue={CITY}
                  onChange={values =>
                    this.handleSelect(values, () => resetForm(initialValues))
                  }
                >
                  <Option value={CITY}>City</Option>
                  <Option value={ZIP}>Zip Code</Option>
                </SSelect>
              </FormItem>
              <FormItem>
                <Input.Group compact>
                  <CityOrZipField field={field} cityOrZip={cityOrZip} />
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
            <ErrorMessage component={ErrorDiv} name={ZIP} />
            <ErrorMessage component={ErrorDiv} name={CITY} />
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
