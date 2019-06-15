import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

import formFields from '../../utils/formFields';

 const SurveyFormReview = ({ onBack, formValues, submitSurvey, history }) => {
   const reviewFields = _.map(formFields, ({label, name}) => {
     return (
       <div key={name} style={{ marginBottom: '20px' }}>
         <label style={{ fontSize: '1em' }}>{label}</label>
         <div>
           {formValues[name]}
         </div>
       </div>
     );
   });

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <h5>Please confirm your entries</h5>
      <br/>
      <div className="card-panel">
        {reviewFields}
      </div>
      <br />
      <button className="cyan btn-flat waves-effect white-text" onClick={onBack}>
        <i className="material-icons left">chevron_left</i>
        Edit
      </button>
      <button className="green btn-flat waves-effect white-text right" onClick={() => submitSurvey(formValues, history)}>
        <i className="material-icons right">email</i>
        Send
      </button>
    </div>
  );
};

function mapStateToProps(state) {

  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
