import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  formatDate(date) {
    return (date.toLocaleTimeString().substr(0,5) + ' ' + date.toLocaleDateString());
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card grey lighten-3 hoverable" key={survey._id}>
          <div className="card-content">
            <span className="card-title bold">{survey.title}</span>
            <p>{survey.body}<span className="right">Sent: {this.formatDate(new Date(survey.dateSent))}</span></p>
            <p className="right">Last Responded: {survey.lastResponded ? this.formatDate(new Date(survey.lastResponded)) : 'None yet'}</p>
          </div>
          <div className="card-action"><a>Yes: {survey.yes}</a><a>No: {survey.no}</a></div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderSurveys()}
      </div>
    );
  }
};

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
