import React from 'react';
import { Navigate } from 'react-router-dom';
import withUser from './withUser';

const UserRoute = ({ user, children }) => {
  if(!user){
    return (
      <Navigate to="/Login" />
    );
  }
  return children;
}

export default withUser(UserRoute);