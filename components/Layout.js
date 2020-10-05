import Head from 'next/head';
import { NextSeo } from 'next-seo';
import moment from 'moment';

export default function Layout({ children }) {
  const buildTimestamp = '2020-10-05';
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="img/png"
          sizes="512x512"
          href="/img/favicon.png"
        />
      </Head>
      <NextSeo
        title="Emerald Coast Congregation"
        description="Latest updates and information on current arrangements during the COVID-19 pandemic."
      />
      <header className="pt-4 md:pt-16">
        <div className="container">
          <h1 className="leading-10">
            Emerald Coast Congregation Announcements
          </h1>
          <p className="inline-block px-1 mt-0 mb-2 text-xs font-bold text-teal-900 bg-teal-200 rounded">
            Updated: {moment(buildTimestamp).format('MMM Do, YYYY')}
          </p>
        </div>
      </header>
      <main className="pb-32">
        <article className="container mdx">{children}</article>
      </main>
    </>
  );
}
