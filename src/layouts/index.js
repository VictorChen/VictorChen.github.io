import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'font-awesome/css/font-awesome.css';
import './index.css';

const Layout = ({ children, data }) => (
  <div className="Layout">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Personal website for Victor Chen.' },
        { name: 'author', content: 'Victor Chen' },
        {
          name: 'keywords',
          content: [
            'engineer',
            'frontend',
            'full stack',
            'javascript',
            'software',
            'Victor Chen',
            'web',
            'website',
          ].join(', '),
        },
      ]}
    />
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
