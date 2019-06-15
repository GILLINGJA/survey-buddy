import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';

import validateEmails from '../../utils/validateEmails';
import formFields from '../../utils/formFields';

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({label, name}) => {
      return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
    });
  }

  render() {
    return (
      <div style={{ width: '80%', margin: 'auto' }}>
      <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat waves-effect white-text">Cancel<i className="material-icons right">cancel</i></Link>
          <button type="submit" className="cyan btn-flat waves-effect waves-light right white-text secondary-content">Review<i className="material-icons right">chevron_right</i></button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name, label }) => {
    if(!values[name]) {
      errors[name] = `You must provide a ${label.toLowerCase()}`;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
