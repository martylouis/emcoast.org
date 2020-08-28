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
    <div className="px-2 text-xs font-bold text-teal-800 bg-white rounded">
      Updated:
      {' '}
      {data.currentBuildDate.currentDate}
    </div>
  );
};

export default Updated;
