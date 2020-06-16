import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import Updated from './updated';

const Header = () => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <header className="text-white bg-teal-600">
      <div className="container">
        <div className="items-center justify-between py-4 md:flex">
          <Link to="/" className="text-2xl font-bold leading-none">
            {site.siteMetadata.title}
          </Link>
          <Updated />
        </div>
      </div>
    </header>
  );
};

export default Header;
