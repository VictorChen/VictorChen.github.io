import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import FaviconUrl from "../assets/favicon.ico";
import 'font-awesome/css/font-awesome.css';
import './index.css';

const Layout = ({ children, data }) => (
  <div className="Layout">
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content="Personal website for Victor Chen." />
      <meta name="author" content="Victor Chen" />
      <meta name="keywords" content="engineer, frontend, full stack, javascript, software, Victor Chen, web" />
      <link rel="shortcut icon" href={FaviconUrl} />
    </Helmet>
    {children()}
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
