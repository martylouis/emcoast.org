import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

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
          <Link to="/" className="text-lg font-bold leading-none">
            {site.siteMetadata.title}
            {' '}
            <span className="font-light">Announcements</span>
          </Link>
          <div className="text-xs text-teal-200">Last Updated: May 19, 2020</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
