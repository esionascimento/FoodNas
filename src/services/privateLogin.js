import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { authenticate } from './fetchActions';

export function RoutePrivate ({ component: Component, ...rest }) {
  const [fact, setFact] = useState(true);
  
  useEffect(() => {
    const token = localStorage.getItem('production_token');
    authenticate({token}).then(() => {
      setFact(true);
    }).catch(() => setFact(false));
  }, []);
  
  return fact ? Outlet : <Navigate to="/not-found" />
}

RoutePrivate.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object
}
