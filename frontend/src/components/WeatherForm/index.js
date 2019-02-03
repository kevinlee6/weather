import React, { Component } from 'react';
import { Formik } from 'formik';
import schema from './schema';

class WeatherForm extends Component {
  handleSubmit = (values, actions) => {
    console.log(values);
  };

  render() {
    const initialValues = { zip_code: '10001', city: '' };
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          this.handleSubmit(values, actions);
        }}
        validationSchema={schema}
      />
    );
  }
}

export default WeatherForm;
