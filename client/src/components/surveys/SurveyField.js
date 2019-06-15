import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {

  return (
    <div>
      <label style={{ fontSize: '1em' }}>{label}</label>
      <input {...input} style={{ color: '#424242', marginBottom: '5px' }} />
      <div className="red-text" style={{ fontSize: '0.8em', marginBottom: '20px' }}>{touched && error}</div>
    </div>
  );
};
