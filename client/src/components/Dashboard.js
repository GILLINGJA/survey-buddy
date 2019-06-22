import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <SurveyList />
      <div className="fixed-action-btn" style={{ marginRight: '16%' }}>
        <Link to='/surveys/new' className="cyan btn-floating btn-large waves-effect waves-light hoverable">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
