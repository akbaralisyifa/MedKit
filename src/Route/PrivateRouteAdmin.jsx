import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PrivateRouteAdmin({ component: Component }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('isLoginAdmin') !== 'true') {
      navigate('/admin');
    }
  }, []);

  return <Component />;
}
