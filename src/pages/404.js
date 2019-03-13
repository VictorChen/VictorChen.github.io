import React from 'react';
import Layout from '../components/Layout';
import './404.css';

const NotFoundPage = () => (
  <Layout>
    <div className="NotFoundPage">
      <div className="NotFoundPage__main">
        <h1>
          <i className="NotFoundPage__error-icon fa fa-exclamation-triangle" />{' '}
          NOT FOUND
        </h1>
        <p>Oops... you probably shouldn't be here...</p>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
