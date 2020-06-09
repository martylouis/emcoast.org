import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

const Updated = () => {
  const data = useStaticQuery(graphql`
  query {
    currentBuildDate {
      currentDate
    }
  }
`);
  return (
    <div className="text-xs text-white">
      Updated:
      {' '}
      {data.currentBuildDate.currentDate}
    </div>
  );
};

export default Updated;
