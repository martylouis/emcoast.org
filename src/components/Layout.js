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
      <header class="py-4 md:py-8">
        <div className="container">
          <h1 className="text-xl font-extrabold leading-tight md:text-2xl">
            Emerald Coast Congregation
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Miramar Beach, FL •  
            <a
              href="https://jw.org"
              rel="noreferrer nofollow"
              className="inline-flex font-normal text-gray-600 no-underline border-none"
            >
              JW.org{' '}
              <span className="self-center ml-2">
                <IconLaunch />
              </span>
            </a>
          </p>
        </div>
      </header>
      <main className="pb-32">
        <article className="container">{children}</article>
      </main>
    </>
  );
}

function IconLaunch(props) {
  const title = props.title || 'launch';

  return (
    <svg
      height="12"
      width="12"
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="currentColor" stroke="currentColor" strokeWidth="1">
        <path
          d="M9.5,8.5v2a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1v-7a1,1,0,0,1,1-1h2"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          fill="none"
          points="6.5 0.5 11.5 0.5 11.5 5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          x1="11.5"
          x2="5.5"
          y1="0.5"
          y2="6.5"
        />
      </g>
    </svg>
  );
}
