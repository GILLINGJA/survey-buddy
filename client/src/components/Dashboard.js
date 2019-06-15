import React from 'react';
import { Link } from 'react-router-dom';
const Dashboard = () => {
  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <div className="card-panel">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sapien quis lacus vulputate tincidunt eu quis eros. Mauris congue vitae leo ut eleifend. Sed eleifend eget nulla non vehicula. Phasellus vel mi ac urna hendrerit euismod. Nulla vel nisi vel lacus consequat dignissim id vitae risus. Etiam lobortis eros quis urna imperdiet fermentum. Vivamus eget nulla et est pretium fermentum. Suspendisse potenti. Duis euismod arcu sit amet posuere convallis. Ut vel sapien a est commodo volutpat sed sed urna. Nullam vehicula ligula sem, a varius felis pretium eget.</div>
      <div className="card-panel">Pellentesque ultrices pellentesque ante luctus pellentesque. Nulla congue facilisis lobortis. Vivamus sit amet tortor tellus. Donec hendrerit dolor eu convallis elementum. Nam dapibus eros sit amet lectus facilisis auctor. Ut gravida ex ut eros dictum volutpat. Mauris aliquet laoreet eros in semper. Suspendisse pulvinar, magna ac aliquam condimentum, dui est accumsan justo, a egestas nibh odio posuere felis. Vivamus placerat lectus sed sapien viverra, a feugiat neque venenatis. Maecenas sit amet ex ut lacus posuere pharetra. Pellentesque vel massa tristique dui varius rutrum vel ut sem. Suspendisse ultrices mi sit amet aliquam porttitor. Aliquam erat volutpat. Nullam sit amet felis imperdiet, interdum lorem ac, laoreet mauris. Cras imperdiet tincidunt lacus, nec faucibus nibh.</div>
      <div className="card-panel">Quisque porta vel velit vel ornare. Donec semper scelerisque eros sed aliquam. Donec non euismod nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur tempus id sem sit amet mattis. Integer id urna at metus scelerisque malesuada nec eget diam. Suspendisse potenti. Nulla finibus scelerisque vehicula. Aenean lacinia imperdiet ex in scelerisque.</div>
      <div className="card-panel">Suspendisse quis mollis lorem. Cras interdum a orci ac placerat. Curabitur consequat efficitur nunc ac aliquet. Aliquam at sagittis nibh, a commodo lorem. Etiam et nisl leo. Quisque vehicula diam quis sagittis accumsan. Sed convallis quam tempus nibh rutrum efficitur. Nullam sed elit nibh. Fusce malesuada vel nunc id imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus laoreet ullamcorper enim non ullamcorper. Vestibulum volutpat, dolor vel sollicitudin blandit, arcu nisi dapibus risus, in malesuada risus lacus at orci. Vestibulum libero sem, vehicula vel tellus in, pharetra posuere mi.</div>
      <div className="card-panel">Aenean dolor augue, dictum eget cursus et, ullamcorper sit amet diam. Pellentesque id scelerisque dolor. Sed quis turpis a dolor bibendum gravida. Vivamus eros enim, condimentum fermentum interdum vel, rutrum at est. Morbi diam eros, sagittis ac elementum non, scelerisque ut mauris. Nullam bibendum blandit elementum. Sed condimentum elit at tortor convallis, non mollis nibh efficitur. Donec efficitur convallis tortor eu aliquam. Integer mollis elit sit amet turpis ultricies rhoncus. Quisque urna erat, tincidunt ac augue vitae, fringilla cursus sapien.</div>
      <div className="fixed-action-btn" style={{ marginRight: '16%' }}>
        <Link to='/surveys/new' className="cyan btn-floating btn-large waves-effect waves-light">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
