import Link from 'next/link';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import moment from 'moment';

export default function Layout({ children, buildTimestamp }) {
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
        description="Latest updates and information on our current meeting schedules and guidelines during the COVID-19 pandemic."
      />
      <header className="text-white bg-teal-600">
        <div className="container">
          <div className="items-center justify-between py-4 md:flex">
            <Link href="/">
              <a className="text-2xl font-bold leading-none">
                Emerald Coast Congregation
              </a>
            </Link>
            <div className="px-1 text-xs font-bold text-teal-900 bg-teal-100 rounded-sm">
              Updated: {moment(buildTimestamp).format('MMM Do, YYYY')}
            </div>
          </div>
        </div>
      </header>
      <main className="pt-8 pb-24 md:pt-12">
        <article className="container mdx">{children}</article>
      </main>
    </>
  );
}

export const getStaticProps = () => {
  return {
    props: {
      buildTimestamp: Date.now(),
    },
  };
};
