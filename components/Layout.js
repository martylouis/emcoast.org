import Head from 'next/head';
import { NextSeo } from 'next-seo';
import dayjs from 'dayjs';

export default function Layout({ children }) {
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
          <h1>Emerald Coast Congregation</h1>
        </div>
      </header>
      <main className="pb-32">
        <article className="container mdx">{children}</article>
      </main>
    </>
  );
}
