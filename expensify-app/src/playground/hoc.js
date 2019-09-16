// higher-order component
// a component that renders another component: HOC
// use same HOC to render other components, in order to re-use code, advantages are: 
// render hijacking
// prop manipulation
// abstract state

import React from 'react';
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>the info is {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private info. Please don't share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info)

// require Authentication
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login to view</p>}
    </div>
  );
};

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin = {false} info="THIS" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated = {true} info="THIS" />, document.getElementById('app'))

