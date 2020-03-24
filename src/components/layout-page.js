import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import Header from './header';
import './layout.css';
import SEO from './seo';

const LayoutPageMarkdown = ({ children, pageContext }) => {
  const { title } = pageContext.frontmatter;

  return (
    <div>
      <SEO title={title} />
      <Header />
      <main className="pt-8 pb-24 md:pt-12">
        <article className="container">
          <header>
            <h1>{title}</h1>
          </header>
          <MDXProvider>
            {children}
          </MDXProvider>
        </article>
      </main>
    </div>
  );
};

export default LayoutPageMarkdown;
