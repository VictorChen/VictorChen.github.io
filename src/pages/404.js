import React from 'react';
import './404.css';

const NotFoundPage = () => (
  <div className="NotFoundPage">
    <div className="NotFoundPage__main">
      <h1><i className="NotFoundPage__error-icon fa fa-exclamation-triangle" /> NOT FOUND</h1>
      <p>Oops... you probably shouldn't be here...</p>
    </div>
  </div>
);

export default NotFoundPage;
