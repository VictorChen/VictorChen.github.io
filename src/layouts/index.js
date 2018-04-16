import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import FaviconUrl from "../assets/favicon.ico";
import './index.css';

const Layout = ({ children, data }) => (
  <div className="Layout">
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content="Personal website for Victor Chen." />
      <meta name="author" content="Victor Chen" />
      <meta name="keywords" content="engineer, frontend, full stack, javascript, software, Victor Chen, web" />
      <link rel="shortcut icon" href={FaviconUrl} />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
        integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg"
        crossorigin="anonymous"
      />
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
