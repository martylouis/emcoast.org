import '@/styles/tailwind.css';
import 'tailwindcss/utilities.css';
import '@/styles/custom.css';
import Layout from '@/components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
