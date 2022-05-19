import Head from 'next/head'
import { ExternalLink } from 'react-feather'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>
          Emerald Coast Congregation of Jehovah&rsquo;s Witnesses | Miramar
          Beach FL
        </title>
        <meta
          name="description"
          content="Latest updates and information on current meeting arrangements."
        />
        <link
          rel="icon"
          type="img/png"
          sizes="512x512"
          href="/img/favicon.png"
          title="Emerald Coast Congregation"
        />
      </Head>

      <main className="container">
        <header>
          <div className="pt-[6vh]">
            <h1 className="text-4xl font-bold leading-none tracking-tight md:text-5xl">
              Emerald Coast Congregation
            </h1>
            <div className="mt-2 space-x-2 text-gray-600">
              <span>Miramar Beach, FL</span>
              <span>•</span>
              <a
                href="https://jw.org"
                rel="noreferrer nofollow"
                className="inline-flex gap-1 font-bold text-gray-700 no-underline border-none"
              >
                JW.org{' '}
                <span className="self-center">
                  <ExternalLink className="text-gray-500" size="16" />
                </span>
              </a>
            </div>
          </div>
        </header>
        <article className="pb-24">{children}</article>
      </main>
    </>
  )
}
